import React from 'react';
import './styles.css';

function Profile() {
  return (
    <div class="profile">
      <h2>My Profile</h2>
      <div class="profile__item">
        <p class="profile__key">Username:</p>
        <p class="profile__value">Kevin</p>
      </div>
      <div class="profile__item">
        <p class="profile__key">Email:</p>
        <p class="profile__value">kevin@mail.com</p>
      </div>
    </div>
  );
}

export default Profile;