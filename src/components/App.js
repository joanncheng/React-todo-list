import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TodoList from './TodoList';
import Home from './Home';
import TodosContext from '../contexts/TodosContext';
import './App.scss';

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo-app">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route
            path="/todolist"
            component={() => (
              <TodosContext.Provider value={{ todos, setTodos }}>
                <TodoList />
              </TodosContext.Provider>
            )}
          />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
