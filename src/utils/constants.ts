export interface Card {
  id: number;
  label: string;
  toggled: boolean;
}

export const initialBoard: Card[] = Array.from(Array(25), (_, i) => ({
  id: i,
  label: `${i + 1}`.padStart(2, "0"),
  toggled: false,
}));

export type WinSequence = number[];

export const winSequences: WinSequence[] = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20],
];

export const theme: string[] = [
  // replace this list with anything!
  "Old people",
  "Kids",
  "Baby",
  "Dog",
  "Cat",
  "Train",
  "Ambulance",
  "Airplane",
  "Police car",
  "Helicopter",
  "Cargo truck",
  "Tow truck",

  "", // This space is reserved for Poncho, it will be ignored.

  "Garbage truck",
  "Mail truck",
  "Fire truck",
  "Restaurant",
  "Coffee shop",
  "Pharmacy",
  "Library",
  "Park",
  "Tree",
  "Stop Sign",
  "Bicycle",
  "Motorcycle",
];
