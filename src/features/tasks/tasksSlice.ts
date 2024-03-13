import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITaskItem } from "./TaskItem";

const initialState: ITaskItem[] = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITaskItem>) => {
      state.push(action.payload);
    },
    reset: () => initialState,
  },
});

export const { addTask, reset } = tasksSlice.actions;

export default tasksSlice.reducer;
