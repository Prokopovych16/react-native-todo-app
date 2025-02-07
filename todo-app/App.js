import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { HomePage } from './src/components/HomePage/HomePage';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { globalStyles } from './src/styles/globalStyles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { CompletedTodos } from './src/components/CompletedPage/CompletedTodos';
import { NotCompletedTodos } from './src/components/NotCompletedPage/NotCompletedTodos';
import axios from 'axios';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [todos, setTodos] = useState([]);


  // fetching all data
  const fetchTodos = async () => {
    try {
      const todos = await axios.get('http://localhost:5700/');

      setTodos(todos.data);

      // console log
      console.log('Server response after fetching all data:', 
        JSON.stringify(todos.data, null, 2)
      );
    } catch (error) {
        console.log('Error fatching data', error);
    }
  };

  // adding a new todo request
  const addTodo = async ({ todo }) => {
    try {
      const response = await axios.post('http://localhost:5700/todo', { todo });

      // locally adding todo for viewing
      setTodos([...todos, response.data]);

      // console log
      console.log('Server response after adding todo:', 
        JSON.stringify(response.data, null, 2)
      );
    } catch (error) {
      console.log('Error in adding todo', error);
    }
  }

  // changing status of todo
  const changeTodoStatus = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:5700/todo/${id}`);

      // locally editind todo status for viewing
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
      
      //console log
      console.log('Server response after changing status of todo:', 
        JSON.stringify(response.data, null, 2)
      );
    } catch (error) {
      console.log('Error in editing todo', error);
    }
  }

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5700/todo/${id}`);

      // locally deleting todo for viewing
      setTodos((todos) => {
        return todos.filter(todo => todo.id !== id);
      });

       //console log
       console.log(`Todo with id --  ${id}  -- was deleted succesfully`);
    } catch (error) {
      console.log('Error in deliting todo', error);
    }
  }



  // loading fonts
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Montserrat-Regular': require('./src/assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('./src/assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
    fetchTodos();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  const handleActionsWithTodos = (todo, action) => {
    switch (action) {
      case 'add':
        addTodo(todo);
        break;
  
      case 'delete':
        deleteTodo(todo.id);
        break;
  
      case 'changeStatus':
        changeTodoStatus(todo.id);
        break;
  
      default:
        break;
    }
  };

  const Tab = createBottomTabNavigator();


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name='Home'
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused 
                  ? require('./src/assets/images/home-active.png') 
                  : require('./src/assets/images/home-black-inactive.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        >
          {() => <HomePage todos={todos} handleActionsWithTodos={handleActionsWithTodos}/>}
          
        </Tab.Screen>
        <Tab.Screen 
          name='Completed'
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused 
                  ? require('./src/assets/images/check-active.png') 
                  : require('./src/assets/images/check-black-inactive.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        >
          {() => <CompletedTodos todos={todos.filter((todo) => todo.completed === true)} handleActionsWithTodos={handleActionsWithTodos} />}
        </Tab.Screen>
        <Tab.Screen 
          name='Not completed'
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused 
                  ? require('./src/assets/images/close-active.png') 
                  : require('./src/assets/images/close-black-inactive.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        >
          {() => <NotCompletedTodos todos={todos.filter((todo) => todo.completed === false)} handleActionsWithTodos={handleActionsWithTodos} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

