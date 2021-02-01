import { initialBoard, Card, theme, winSequences } from "./constants";

export function scrambleBoard(board: Card[]): Card[] {
  let scrambledBoard: Card[] = [...board];
  for (let i = board.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [board[i], board[j]] = [board[j], board[i]];
  }
  return scrambledBoard;
}

function applyTheme(scrambledBoard: Card[], theme: string[]) {
  return scrambledBoard.map((card, index) => {
    if (index !== 12) {
      return { ...card, label: theme[card.id] };
    } else {
      return { ...card, toggled: true, label: "Poncho!" };
    }
  });
}

export function getNewBoard(): Card[] {
  return applyTheme(scrambleBoard(initialBoard), theme);
}

export function getBingoIndexes(board: Card[]): number[] {
  let toggledCardsIndexes: number[] = [];
  board.forEach((card, index) => {
    if (card.toggled) toggledCardsIndexes.push(index);
  });

  return winSequences
    .filter((winSequence) =>
      winSequence.every((sequenceNumber) =>
        toggledCardsIndexes.includes(sequenceNumber)
      )
    )
    .flat();
}

export function getIsBingo(board: Card[]): boolean {
  return getBingoIndexes(board).length !== 0;
}

export function segmentBoard(board: Card[], size: number): Card[][] {
  let result = [];
  for (let i = 0; i < board.length; i += size) {
    let segment = board.slice(i, i + size);
    result.push(segment);
  }
  return result;
}
