/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import todoService from './services/todoService';
import AddToDo from './components/addTodo';
import ToDoItem from './components/toDoItem';
import NavBar from './components/navBar';

const App = () => {
  const [newTodo, setnewTodo] = useState({ id: null, name: '', completed: false });
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await todoService.getAll();
      setTodos(response);
    }
    fetchData();
  }, []);

  function emptyFields() {
    return setnewTodo({
      id: null,
      name: '',
      complete: false,
    });
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await todoService.create(newTodo);
      setTodos(todos.concat(response));
      emptyFields();
    } catch (error) {
      alert(error);
    }
  };
  const onClick = async (id) => {
    const todo = todos.find((n) => n.id === id);
    const changedtodo = { ...todo, completed: !todo.completed };
    try {
      const response = await todoService.update(id, changedtodo);
      setTodos(todos.map((t) => (t.id !== id ? t : response)));
    } catch (error) {
      alert(error);
    }
  };

  const onChange = (event) => {
    setnewTodo({ ...newTodo, name: event.target.value });
  };

  const onRemoveClick = async (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    // eslint-disable-next-line no-alert
    if (window.confirm(`Are you sure you want to delete the note ?`)) {
      try {
        await todoService.remove(id);
        setTodos(updatedTodos);
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <>
      <NavBar />
      <Container maxWidth="md">
        <Box>
          <AddToDo
            onSubmit={onSubmit}
            newTodo={newTodo}
            onInputChange={onChange}
            emptyFields={emptyFields}
          />
          {todos.length > 0 ? (
            todos.map((todo) => (
              <ToDoItem key={todo.id} todo={todo} onClick={onClick} onRemoveClick={onRemoveClick} />
            ))
          ) : (
            <Typography>Add your todos</Typography>
          )}
        </Box>
      </Container>
    </>
  );
};

export default App;
