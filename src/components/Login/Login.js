import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO
  };

  const handleChange = (e) => {
    // TODO
  };

  return (
    <div className='login'>
      <h2>Login please</h2>
      <form onSubmit={handleSubmit} className='login__form'>
        <label htmlFor='email'>Email: </label>
        <input
          className='login__input'
          id='email'
          required
          name='email'
          type='text'
          value={email}
          onChange={handleChange}
        />
        <label htmlFor='password'>Password: </label>
        <input
          className='login__input'
          id='password'
          required
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
        />
      </form>
      <div className='login__button-container'>
        <button type='submit' className='login__button'>
          Log in
        </button>
      </div>
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
