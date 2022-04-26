import React from 'react';
import { Link } from 'react-router-dom';
import Todo from './todo';
import TodoForm from './TodoForm';

const TodoList = () => {
  return (
    <>
      <div>
        <h1>Todo List</h1>
        <TodoForm />
        <Todo />
      </div>
      <Link to="/" className="link-btn">
        Back Home
      </Link>
    </>
  );
};

export default TodoList;
