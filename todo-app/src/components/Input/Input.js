import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./Input.styles";
import { globalStyles } from "../../styles/globalStyles";

export const Input = ({ handleActionsWithTodos }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddText = () => {
    setInputValue('');

    handleActionsWithTodos({ todo: inputValue, id: Math.floor(Math.random() * 1000000), completed: false }, 'add');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter the task"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableOpacity
        style={inputValue.trim() ? styles.button : styles.buttonInactive}
        onPress={handleAddText}
        disabled={!inputValue.trim()}
      >
        <Text style={[globalStyles.regularText, styles.buttonText]}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
