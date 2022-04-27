import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowSmUp } from 'react-icons/hi';
import Todo from './todo';
import TodoForm from './TodoForm';
import AuthContext from '../contexts/AuthContext';

const TodoList = () => {
  const user = useContext(AuthContext);

  return (
    <>
      <div>
        {user ? (
          <>
            <h1>Todo List</h1>
            <TodoForm />
            <Todo />
          </>
        ) : (
          <h1>
            Sign In With Google
            <HiArrowSmUp className="arrow-icon icons" />
          </h1>
        )}
      </div>
      <Link to="/" className="btn link-btn">
        Back Home
      </Link>
    </>
  );
};

export default TodoList;
