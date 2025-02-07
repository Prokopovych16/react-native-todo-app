import { FlatList, View } from "react-native";
import { TodoItem } from "../TodoItem/TodoItem";
import { styles } from "./TodoList.styles";

export const TodoList = ({ todos, handleActionsWithTodos }) => {

  return (
    <FlatList
      data={todos}          
      renderItem={(todo) => <TodoItem  item={todo.item} handleActionsWithTodos={handleActionsWithTodos} />}
      contentContainerStyle={styles.list} 
    />
  );
};
