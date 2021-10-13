// Login.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as auth from "./auth.js";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!username || !password) {
        // handle invalid entries appropriately
        return;
      }
      // make the appropriate api call -- see below
  }
    return (
      <div className="login">
        <p className="login__welcome"></p>
        <form onSubmit={handleSubmit} className="login__form">
          <label for="username">Username:</label>
          <input id="username" required name="username" 
             type="text" value={username} 
             onChange={e => setUsername(e.target.value)}
          />
          <label for="password">Password:</label>
          <input id="password" required name="password" 
            type="password" value={password} 
            onChange={e => setPassword(e.target.value)}
          />
          <div className="login__button-container">
            <button type="submit" className="login__link">
              Log in
            </button>
          </div>
        </form>

        <div className="login__signup">
          <p>Not a member yet?</p>
          <Link to="/register" className="signup__link">
            Sign up here
          </Link>
        </div>
      </div>
    );
  }

export default Login;