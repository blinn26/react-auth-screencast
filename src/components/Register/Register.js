import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import * as auth from '../../utils/auth';
import './styles.css';

function Register() {
  const history = useHistory();

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password === values.confirmPassword) {
      auth
        .register(values)
        .then((res) => {
          history.push('/login');
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className='register'>
      <h2>Please register</h2>
      <form className='register__form'>
        <label>
          {'Username: '}
          <input
            className='register__input'
            name='username'
            value={values.username}
            type='text'
            onChange={handleChange}
          />
        </label>
        <label>
          {'Email: '}
          <input
            className='register__input'
            name='email'
            value={values.email}
            type='email'
            onChange={handleChange}
          />
        </label>
        <label>
          {'Password: '}
          <input
            className='register__input'
            name='password'
            value={values.password}
            type='password'
            onChange={handleChange}
          />
        </label>
        <label>
          {'Confirm Password: '}
          <input
            className='register__input'
            name='confirmPassword'
            value={values.confirmPassword}
            type='password'
            onChange={handleChange}
          />
        </label>
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
