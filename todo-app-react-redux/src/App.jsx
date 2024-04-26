// App.js
import React, { useState } from 'react';
import Todo from './components/Todo';
import Login from './components/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <>
      {loggedIn ? (
        <>
          <Todo username={username} onLogout={handleLogout} />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
