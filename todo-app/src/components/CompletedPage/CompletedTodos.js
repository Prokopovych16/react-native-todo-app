import { FlatList, Text, View } from "react-native";
import { styles } from "./CompletedTodos.styles";
import { TodoItemComp } from "../TodoItemComp/TodoItemComp";

export const CompletedTodos = ({todos, handleActionsWithTodos}) => {

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