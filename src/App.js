import React from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';

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
