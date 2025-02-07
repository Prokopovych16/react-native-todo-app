import { deleteTodoFromServer, getAllTo, getATo, postATo, updateStatus } from "../services/todos.services.js";


// get all todos request
export const getAllTodos = async (req, res) => {

  try {
    const allTodos = await getAllTo();

    res.status(200).send(allTodos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// get a todo request
export const getATodo = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send('Invalid id provided');
  }

  try {
    const chosenTodo = await getATo(id);

    if (!chosenTodo) {
      res.sendStatus(404);
    }

    res.status(200).send(chosenTodo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// post a todo request
export const addNewTodo = async (req, res) => {
  const { todo } = req.body;

  if (!todo) {
    res.status(400).send('Name is not provided');
  }

  try {
    const newTodo = await postATo({ todo });
    
    res.status(200).send(newTodo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// change a completed status
export const updateTodoStatus = async (req, res) => {
  const { id } = req.params

  if (!id) {
    res.status(400).send('Invalid id is provided');
  }

  try {
    const updateTodo = await updateStatus(id);

    if (!updateTodo) {
      res.status(404).send('Can not provide');
    }

    res.status(200).send(updateTodo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}


export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).send('Invalid id is provided');
  }

  try {
    const deletedTodo = deleteTodoFromServer(id);

    res.status(200).send(deletedTodo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}