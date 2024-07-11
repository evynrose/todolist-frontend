import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, Button, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store"
import { addTask, editTask, deleteTask, fetchTasks } from "../redux/tasksSlice";
import * as ToDoApi from "../api/todo"


interface Task {
  id: number;
  task: string;
}

const ToDoList: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [editMode, setEditMode] = useState<{ enabled: boolean; taskId: number | null }>({
    enabled: false,
    taskId: null,
  });
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  const handleAddTask = async () => {
    if (inputValue.trim()) {
      // const taskId = tasks.length
      const taskId = Math.max(...tasks.map(task => task.id), 0) + 1
      dispatch(addTask({ taskId, inputValue }));
      await ToDoApi.addTask(inputValue, taskId)
      setInputValue('');
    }
  };

  const handleEditTask = async () => {
    if (inputValue.trim() && editMode.taskId !== null) {
      dispatch(editTask({ taskId: editMode.taskId, newText: inputValue }));
      await ToDoApi.editTask(editMode.taskId, inputValue)
      setInputValue('');
      setEditMode({ enabled: false, taskId: null });
    }
  };

  const handleDeleteTask = async (taskId: number) => {
    dispatch(deleteTask(taskId));
    await ToDoApi.deleteTask(taskId)
  };

  const handleStartEdit = (task: Task) => {
    setInputValue(task.task);
    setEditMode({ enabled: true, taskId: task.id });
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.task}</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Edit" onPress={() => handleStartEdit(item)} />
        <Button title="Delete" onPress={() => handleDeleteTask(item.id)} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.title}>To Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="What would you like to get done today?"
        placeholderTextColor="pink"
        value={inputValue}
        onChangeText={setInputValue}
      />
      {editMode.enabled ? (
        <Button title="Update Task" onPress={handleEditTask} />
      ) : (
        <Button title="Add Task" onPress={handleAddTask} />
      )}
      <Text style={styles.currentTasks}>Current Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "hotpink",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    color: "purple",
    fontSize: 32,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginBottom: 10,
    borderColor: "purple",
    borderWidth: 1,
  },
  currentTasks: {
    color: "purple",
    fontSize: 24,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: 'purple',
    borderBottomWidth: 1,
  },
  item: {
    color: "purple",
    fontSize: 25,
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
});

export default ToDoList;

