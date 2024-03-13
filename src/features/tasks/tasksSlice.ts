import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITaskItem } from "./TaskItem";

interface ITaskState {
  tasks: ITaskItem[];
  isEditingTask: boolean;
  editingTask: ITaskItem;
}

export enum TasksFilters {
  DEFAULT = 0,
  TITLE_ASC,
  TITLE_DES,
}

export const initialEditingTask: ITaskItem = {
  title: "",
  text: "",
  id: "",
  dateCreated: new Date().getTime(),
  isCompleted: false,
};

const initialState: ITaskState = {
  tasks: [
    {
      title: "BN",
      text: "111111111",
      id: "afghjsn",
      dateCreated: new Date().getTime(),
      isCompleted: false,
    },
    {
      title: "AN",
      text: "222222222",
      id: "ghdjsn",
      dateCreated: new Date().getTime(),
      isCompleted: false,
    },
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
    toggleCompletion: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return {
              ...task,
              isCompleted: !task.isCompleted,
            };
          }

          return task;
        }),
      };
    },
    filterTasks: (state, action: PayloadAction<TasksFilters>) => {
      switch (action.payload) {
        case TasksFilters.TITLE_ASC:
          sortTitleAsc(state);
          break;

        case TasksFilters.TITLE_DES:
          sortTitleDes(state);
          break;
        default:
          break;
      }

      return state;
    },
  },
});

export const {
  addTask,
  reset,
  removeById,
  prepareEditById,
  editById,
  toggleCompletion,
  filterTasks,
} = tasksSlice.actions;

const sortTitleAsc = (state: ITaskState): void => {
  state.tasks.sort((a, b) => {
    const titleA = a.title.toUpperCase(); // ignore upper and lowercase
    const tilteB = b.title.toUpperCase(); // ignore upper and lowercase
    if (titleA < tilteB) {
      return -1;
    }
    if (titleA > tilteB) {
      return 1;
    }
    return 0;
  });
};

const sortTitleDes = (state: ITaskState): void => {
  state.tasks.sort((a, b) => {
    const titleA = a.title.toUpperCase(); // ignore upper and lowercase
    const tilteB = b.title.toUpperCase(); // ignore upper and lowercase
    if (titleA < tilteB) {
      return 1;
    }
    if (titleA > tilteB) {
      return -1;
    }
    return 0;
  });
};

export default tasksSlice.reducer;
