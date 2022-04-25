import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({ id: null, value: '' });

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
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          />
        </div>
      </div>
    ));
  };

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({ id: null, value: '' });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return <>{renderTodos(todos)}</>;
};

export default Todo;
