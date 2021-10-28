import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Register() {
  // create necessary state variables
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO
  };
  // TODO onChange handlers
  return (
    <div className='register'>
      <h2>Please register</h2>
      <form className='register__form'>
        <label>Username: </label>
        <input class="register__input"
          name='username'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email: </label>
        <input class="register__input"
          name='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password: </label>
        <input class="register__input"
          name='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password: </label>
        <input class="register__input"
          name='confirm-password'
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </form>
      <div className='register__button-container'>
        <button onClick={handleSubmit} className='register__button'>
          Sign up
        </button>
      </div>
      <div className='register__signin'>
        <p>Already a member?</p>
        <Link to='login' className='register__login-link'>
          Log in here
        </Link>
      </div>
    </div>
  );
}

export default Register;
