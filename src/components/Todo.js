import React, { useState, useContext } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import {
  updateDoc,
  collection,
  query,
  orderBy,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import AuthContext from '../contexts/AuthContext';
import TodoForm from './TodoForm';
import { db } from '../firebase';

const Todo = () => {
  const user = useContext(AuthContext);
  const todoRef = collection(db, `users/${user.uid}/todos/`);
  const [todos] = useCollection(query(todoRef, orderBy('createdAt')), {
    idField: 'id',
  });
  const [edit, setEdit] = useState({ id: null, text: '' });

  const removeTodo = id => {
    const docRef = doc(db, `users/${user.uid}/todos/`, id);
    deleteDoc(docRef);
  };

  const completeTodo = id => {
    const docRef = doc(db, `users/${user.uid}/todos/`, id);
    const todo = todos.docs.find(todo => todo.id === id);
    updateDoc(docRef, { isComplete: !todo.data().isComplete });
  };

  const renderTodos = todos => {
    if (!todos) return;

    return todos.docs.map(todo => (
      <div
        className={`todo-row ${todo.data().isComplete ? 'complete' : ''}`}
        key={todo.id}
      >
        <div
          className="todo-row__text"
          onClick={() => completeTodo(todo.id)}
          key={todo.id}
        >
          {todo.data().text}
        </div>
        <div className="icons">
          <RiCloseCircleLine
            className="delete-icon"
            onClick={() => removeTodo(todo.id)}
          />
          <TiEdit
            className="edit-icon"
            onClick={() => setEdit({ id: todo.id, text: todo.data().text })}
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
