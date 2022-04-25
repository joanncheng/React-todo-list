import React from 'react';
import { Link } from 'react-router-dom';
import { BsListCheck } from 'react-icons/bs';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome Todo App!</h1>
      <p className="description">To Do gives you focus, from work to play.</p>
      <BsListCheck className="todo-icon" />
      <Link to="/todolist" className="link-btn">
        Get Started
      </Link>
    </div>
  );
};

export default Home;
