import React, { useState, useContext } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodosContext from '../contexts/TodosContext';
import TodoForm from './TodoForm';

const Todo = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const [edit, setEdit] = useState({ id: null, text: '' });

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

  const renderTodos = todos => {
    return todos.map((todo, index) => (
      <div
        className={`todo-row ${todo.isComplete ? 'complete' : ''}`}
        key={index}
      >
        <div
          className="todo-row__text"
          onClick={() => completeTodo(todo.id)}
          key={todo.id}
        >
          {todo.text}
        </div>
        <div className="icons">
          <RiCloseCircleLine
            className="delete-icon"
            onClick={() => removeTodo(todo.id)}
          />
          <TiEdit
            className="edit-icon"
            onClick={() => setEdit({ id: todo.id, text: todo.text })}
          />
        </div>
      </div>
    ));
  };

  if (edit.id) {
    return <TodoForm edit={edit} setEdit={setEdit} />;
  }
  return <>{renderTodos(todos)}</>;
};

export default Todo;
