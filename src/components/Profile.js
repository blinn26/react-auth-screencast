import React from 'react';

function Profile() {
  return (
    <>
      <h2>My Profile</h2>
      <div class="profile__item">
        <p class="profile__key">Username:</p>
        <p class="profile__value">Kevin</p>
      </div>
      <div class="profile__item">
        <p class="profile__key">Email:</p>
        <p class="profile__value">kevin@mail.com</p>
      </div>
    </>
  );
}

export default Profile;