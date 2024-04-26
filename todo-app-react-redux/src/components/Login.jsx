// Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Hardcoded username and password
    const validUsername = 'Rohit';
    const validPassword = '1234';

    // Perform validation
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password.');
    } else if (username !== validUsername || password !== validPassword) {
      setError('Invalid username or password.');
    } else {
      // Clear any previous error
      setError('');
      // Call the onLogin callback with the username
      onLogin(username);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-sm w-full p-4 bg-gray-400 rounded shadow-inner">
        <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 mb-2 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 mb-4 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600 w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
