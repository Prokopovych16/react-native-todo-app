import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    gap: 8,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: "#696969",
    borderRadius: 20,
    padding: 12,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
    shadowColor: "rgb(77, 77, 87)",
    shadowOffset: { width: 4, height: 7 }, 
    shadowOpacity: 0.2,
    shadowRadius: 29,
    elevation: 5, 
  },  
  button: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    backgroundColor: '#0394dc',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 24,
  },
  buttonInactive: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    backgroundColor: '#646464',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 24,
  },  
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
});