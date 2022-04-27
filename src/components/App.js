import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import AuthContext from '../contexts/AuthContext';
import GoogleAuth from './GoogleAuth';
import Home from './Home';
import TodoList from './TodoList';
import './App.scss';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="todo-app">
      <AuthContext.Provider value={user}>
        <GoogleAuth />
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/todolist" component={TodoList} />
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
};
export default App;
