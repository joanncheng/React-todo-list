import React, { useState, useEffect, useRef, useContext } from 'react';
import TodosContext from '../contexts/TodosContext';

const TodoForm = props => {
  const { todos, setTodos } = useContext(TodosContext);
  const [input, setInput] = useState(props.edit ? props.edit.text : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const addTodo = todo => {
    if (!todo.text) return;
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, newTodo) => {
    if (!newTodo.text) return;
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? newTodo : todo
    );
    setTodos(updatedTodos);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const todo = { id: Date.now(), text: input };

    if (props.edit) {
      updateTodo(props.edit.id, todo);
      props.setEdit({ id: null, text: '' });
    } else {
      addTodo(todo);
    }
    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            className="todo-form__input edit"
            type="text"
            value={input}
            placeholder="Edit your content"
            name="text"
            onChange={e => setInput(e.target.value)}
            ref={inputRef}
          />
          <button className="todo-form__btn edit">Update</button>
        </>
      ) : (
        <>
          <input
            className="todo-form__input"
            type="text"
            value={input}
            placeholder="Add a todo"
            name="text"
            onChange={e => setInput(e.target.value)}
            ref={inputRef}
          />
          <button className="btn todo-form__btn">Add Todo</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
