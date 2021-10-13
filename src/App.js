import React from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  return (
    <div className="App">
      <Register />
      <Login />
      {isLoggedIn && <p>Welcome, you are logged in!</p>}
    </div>
  );
}

export default App;
