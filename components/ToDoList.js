import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, Button } from "react-native";

function ToDoList() {
  return (
    //where the majority of my code will live. each portion will have a connect to its own style which is in the const below.
    //we use safe area view to avoid clashing with the notch on top of iphones.

    <SafeAreaView style={styles.background}>
      <Text style={styles.title}>To Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="What would you like to get done today?"
        placeholderTextColor="pink"
      />
      <Button title="Add Task" />
      <Text style={styles.currentTasks}>Current Tasks</Text>
    </SafeAreaView>
  );
}

//styling for each portion

const styles = StyleSheet.create({
  background: {
    backgroundColor: "hotpink",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    color: "purple",
    fontSize: 50,
  },
  input: {
    height: 40,
    borderColor: "purple",
    borderWidth: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 10,
  },
  currentTasks: {
    color: "purple",
    fontSize: 50,
  },
});

export default ToDoList;
