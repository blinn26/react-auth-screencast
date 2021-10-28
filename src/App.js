import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="app">
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          {isLoggedIn ? <Profile /> : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          {isLoggedIn ? <Redirect to="/profile" /> : <Redirect to="/login" /> }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
