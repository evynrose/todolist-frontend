import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  text: string;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push({ id: state.tasks.length, text: action.payload });
    },
    editTask: (
      state,
      action: PayloadAction<{ taskId: number, newText: string }>
    ) => {
      const { taskId, newText } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      );
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
