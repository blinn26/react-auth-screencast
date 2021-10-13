const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (username, email, password) => {
  // your url will be different, of course
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password, email })
  })
  .then((response) => {
    // if response returns 201-created, parse the data and return to next handler
    if (response.status === 201){
      return response.json();
    } 
  })
  .then((res) => {
    // return the parsed data to client
    return res;
  })
  // catch all errors
  .catch((err) => console.log(err));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      // does data have a jwt in it?
      if (data.token) {
        // if so, save it to local storage and return data
        // don't worry about this line now -- it will be explained soon
        localStorage.setItem("token", data.token);
        return data;
      }
    })
    .catch((err) => console.log(err));
};