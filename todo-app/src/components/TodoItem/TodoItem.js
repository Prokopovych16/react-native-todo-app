import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./TodoItem.styles";
import ImageNotComleted from '../../assets/images/close.png';
import ImageCompleted from '../../assets/images/check.png';
import DeleteTodo from '../../assets/images/log-in.png';
import { useState } from "react";

export const TodoItem = ({ item, handleActionsWithTodos }) => {
  const [isCompleted, setIsCompleted] = useState(item.completed);

  const handleCompleted = (todo) => {
    setIsCompleted((comp) => !comp);

    handleActionsWithTodos(todo, 'changeStatus');
  }

  const deleteTodo = (todo) => {
    handleActionsWithTodos(todo, 'delete');
  }

  return (
    <View style={styles.item}>
      <View style={styles.todoWithSelected}>
        <TouchableOpacity onPress={() => handleCompleted(item)}>
          <Image 
            source={isCompleted ? ImageCompleted : ImageNotComleted}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.textTodoItem}>{item.todo}</Text>
      </View>
      <TouchableOpacity onPress={() => deleteTodo(item)}>
        <Image 
          source={DeleteTodo}
          style={styles.deleteTodo}
        />
      </TouchableOpacity>
    </View>
  );
}