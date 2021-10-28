import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  return (
    <div className="app">
      <Profile />
      <Register />
      <Login />
    </div>
  );
}

export default App;
