import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TodoList from './TodoList';
import Home from './Home';
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
            component={() => <TodoList todos={todos} setTodos={setTodos} />}
          />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
