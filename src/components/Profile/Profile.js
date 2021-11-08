import React from 'react';
import './styles.css';

function Profile() {
  function signOut() {
    // TODO
  }

  return (
    <div className='profile'>
      <h2>My Profile</h2>
      <div className='profile__item'>
        <p className='profile__key'>Username:</p>
        <p className='profile__value'>Kevin</p>
      </div>
      <div className='profile__item'>
        <p className='profile__key'>Email:</p>
        <p className='profile__value'>kevin@mail.com</p>
      </div>
      <button className='profile__signout-button'>Signout</button>
    </div>
  );
}

export default Profile;
