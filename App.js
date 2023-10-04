import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-do list</Text>
      <View style={styles.taskInputContainer}>
        <TextInput
          style={styles.taskInput}
          placeholder="Add new task"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <Button title="+" onPress={addTask} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text
              style={item.completed ? styles.completedTask : styles.taskText}
            >
              {item.text}
            </Text>
            {!item.completed && (
              <>
                <Button
                  title="Done"
                  onPress={() => completeTask(index)}
                />
                <Button title="X" onPress={() => removeTask(index)} />
              </>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000000',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff'
  },
  taskInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  taskInput: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    paddingHorizontal: 20,
    color: '#fff',
    borderRadius: 50,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  taskText: {
    flex: 1,
    fontSize: 18,
    color: '#fff'
  },
  completedTask: {
    flex: 1,
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'green',
    color: '#fff'
  },
});
