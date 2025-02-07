import { FlatList, Text, View } from "react-native";
import { TodoItemComp } from "../TodoItemComp/TodoItemComp";
import { styles } from "./NotCompletedTodos.styles";

export const NotCompletedTodos = ({todos, handleActionsWithTodos}) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={todos}
        renderItem={(todo) => <TodoItemComp item ={todo.item} handleActionsWithTodos={handleActionsWithTodos} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}