import React, { useState, useEffect, useRef } from 'react';

const TodoForm = props => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Date.now(),
      text: input,
    });

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
            placeholder="Edit your item"
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
