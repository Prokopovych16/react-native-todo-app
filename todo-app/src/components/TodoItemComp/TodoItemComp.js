import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./TodoItemComp.styles";
import ImageNotComleted from '../../assets/images/close.png';
import ImageCompleted from '../../assets/images/check.png';
import DeleteTodo from '../../assets/images/log-in.png';

export const TodoItemComp = ({ item, handleActionsWithTodos }) => {
   const deleteTodo = (todo) => {
      handleActionsWithTodos(todo, 'delete');
    }
  
    return (
      <View style={styles.item}>
        <View style={styles.todoWithSelected}>
          
          <Image
            source={item.completed ? ImageCompleted : ImageNotComleted}
            style={styles.image}
          />
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