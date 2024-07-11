import { getTasks } from "@/api/todo";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  task: string;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks',async () => {
  const tasks = await getTasks()
  console.log(tasks);
  return tasks
})

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{taskId:number, inputValue:string}>) => {
      state.tasks.push({ id: action.payload.taskId, task: action.payload.inputValue });
    },
    editTask: (
      state,
      action: PayloadAction<{ taskId: number, newText: string }>
    ) => {
      const { taskId, newText } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, task: newText } : task
      );
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action ) => {
      const tasks = action.payload
      state.tasks = tasks
      console.log(tasks);
    })
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
