import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getNewBoard, getIsBingo, getBingoIndexes } from "../../utils/utils";

export const boardSlice = createSlice({
  name: "board",
  initialState: [...getNewBoard()],
  reducers: {
    newBoard: (state) => [...getNewBoard()],
    toggleCard: (state, action: PayloadAction<number>) => {
      state[action.payload].toggled = !state[action.payload].toggled;
    },
  },
});

export const { newBoard, toggleCard } = boardSlice.actions;

// selectors
export const selectBoard = (state: RootState) => state.board;
export const selectIsBingo = (state: RootState) => getIsBingo(state.board);
export const selectBingoIndexes = (state: RootState) =>
  getBingoIndexes(state.board);

export const boardReducer = boardSlice.reducer;
