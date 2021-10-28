import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO
  };

  // TODO make onChange handlers not inline
  return (
    <div className='login'>
      <p className='login__welcome'>Login please.</p>
      <form onSubmit={handleSubmit} className='login__form'>
        <label for='email'>Email: </label>
        <input
          id='email'
          required
          name='email'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for='password'>Password: </label>
        <input
          id='password'
          required
          name='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='login__button-container'>
          <button type='submit' className='login__link'>
            Log in
          </button>
        </div>
      </form>
      <div className='login__signup'>
        <p>Not a member yet?</p>
        <Link to='/register' className='signup__link'>
          Sign up here
        </Link>
      </div>
    </div>
  );
}

export default Login;
