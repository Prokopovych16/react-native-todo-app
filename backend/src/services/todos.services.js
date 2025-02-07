import { Todo } from "../models/Todo.model.js";


// get all Todos from server
export const getAllTo = async () => {
  const result = Todo.findAll();

  return result;
};

// get a Todo from server
export const getATo = (id) => {
   return Todo.findByPk(id);

};

// post a Todo on the server
export const postATo = async ({ todo }) => {
  const result = await Todo.create({ todo });

  return result;
};


// update a Todo status on server
export const updateStatus = async (id) => {
  const todo = await Todo.findByPk(id);

  if (!todo) {
    return null;
  }

  const [affectedRows] = await Todo.update(
    { completed: !todo.completed },
    { where: { id } }
  );

  return affectedRows === 0 ? null : Todo.findByPk(id);
};

// delete a Todo from the server
export const deleteTodoFromServer = (id) => {
  return Todo.destroy({
    where: {
      id,
    },
  });
}