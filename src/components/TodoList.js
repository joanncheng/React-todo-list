import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Todo from './todo';
import TodoForm from './TodoForm';

const TodoList = ({ todos, setTodos }) => {
  const addTodo = todo => {
    if (!todo.text) return;

    const newTodo = [...todos, todo];
    setTodos(newTodo);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) return;
    setTodos(prevState =>
      prevState.map(item => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
      <Link to="/" className="link-btn">
        Back Home
      </Link>
    </>
  );
};

export default TodoList;
