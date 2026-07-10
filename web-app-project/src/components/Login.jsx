
/*
const Login = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
    }
  

    return (
        <div className="login-container" >
            <h1>Login</h1>
            <form action="submit" method="GET">

                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username." required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password." required />
                

                <button>Login</button>

            </form>
        </div>
    )
}

export default Login;
*/

import React, { useState } from 'react';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);  
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
    } else {
      setError('');
      console.log('Login submitted:', { email, password });
      // Add authentication logic here
        setIsLoggedIn = true;
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;