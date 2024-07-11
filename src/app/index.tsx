import { Text, View } from "react-native";
import ToDoList from "@/src/components/ToDoList";
import { Provider } from "react-redux";
import store from "@/src/redux/store";
//return component to do list so it renders on screen
export default function Index() {
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
}
