import React from "react";
import { Text, View } from "react-native";
import { Header } from "../Header/Header";
import { styles } from "./HomePage.styles";
import { Input } from "../Input/Input";
import { TodoList } from "../TodoList/TodoList";
import { SafeAreaView } from "react-native-safe-area-context";

export const HomePage = ({ todos, handleActionsWithTodos }) => {
  return (
    <View>
      <View style={styles.container}>
        <Input handleActionsWithTodos={handleActionsWithTodos}/>
        <TodoList 
          todos={todos} 
          handleActionsWithTodos={handleActionsWithTodos} 
        />
      </View>
    </View>
  );
}