import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4,
    elevation: 5,
  },
  todoWithSelected: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  image: {
    width: 30,
    height: 30,
  },    
  textTodoItem: {
    maxWidth: '80%',
    fontSize: 18,
  },
  deleteTodo: {
    width: 30,
    height: 30
  }
});