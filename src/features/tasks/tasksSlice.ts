import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITaskItem } from "./TaskItem";

interface ITaskState {
  tasks: ITaskItem[];
  isEditingTask: boolean;
  editingTask: ITaskItem;
}

export const initialEditingTask: ITaskItem = {
  title: "",
  text: "",
  id: "",
};

const initialState: ITaskState = {
  tasks: [
    { title: "1", text: "111111111", id: "afghjsn" },
    { title: "2", text: "222222222", id: "ghdjsn" },
  ],
  isEditingTask: false,
  editingTask: initialEditingTask,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITaskItem>) => {
      state.tasks.push(action.payload);
    },
    reset: () => initialState,
    removeById: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    },
    prepareEditById: (state, action: PayloadAction<ITaskItem>) => {
      return {
        ...state,
        isEditingTask: true,
        editingTask: action.payload,
      };
    },
    editById: (state, action: PayloadAction<ITaskItem>) => {
      return {
        ...state,
        isEditingTask: false,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }

          return task;
        }),
        editingTask: initialEditingTask,
      };
    },
  },
});

export const { addTask, reset, removeById, prepareEditById, editById } =
  tasksSlice.actions;

export default tasksSlice.reducer;
