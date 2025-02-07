import express from 'express';
import { Todo } from './models/Todo.model.js';
import { addNewTodo, deleteTodo, getAllTodos, getATodo, updateTodoStatus } from './controllers/todos.controllers.js';

export const createServer = () => {
  const app = express();

  app.use(express.json());

  // get all todos
  app.get('/', getAllTodos);

  // get a todo with id
  app.get('/todo/:id', getATodo);

  // add a new todo
  app.post('/todo', addNewTodo);

  // edit todo status
  app.patch('/todo/:id', updateTodoStatus);

  // delete a todo
  app.delete('/todo/:id', deleteTodo);

  return app;
}
