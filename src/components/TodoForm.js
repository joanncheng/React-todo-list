import React, { useState, useEffect, useRef, useContext } from 'react';
import { addDoc, doc, collection, updateDoc } from 'firebase/firestore';
import AuthContext from '../contexts/AuthContext';
import { db } from '../firebase';

const TodoForm = props => {
  const user = useContext(AuthContext);
  const todoRef = collection(db, `users/${user.uid}/todos/`);
  const [input, setInput] = useState(props.edit ? props.edit.text : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (!input) return;

    if (props.edit) {
      const docRef = doc(db, `users/${user.uid}/todos/`, props.edit.id);
      updateDoc(docRef, { text: input });
      props.setEdit({ id: null, text: '' });
    } else {
      addDoc(todoRef, {
        text: input,
        isComplete: false,
        createdAt: Date.now(),
      });
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
          <button className="btn todo-form__btn edit">Update</button>
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
