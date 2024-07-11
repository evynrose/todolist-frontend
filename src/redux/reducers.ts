import { combineReducers } from "redux";
import tasksReducer from "./tasksSlice";

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
