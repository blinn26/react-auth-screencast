const BASE_URL = 'https://register.nomoreparties.co';

export const register = ({ username, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, email }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
    });
};
