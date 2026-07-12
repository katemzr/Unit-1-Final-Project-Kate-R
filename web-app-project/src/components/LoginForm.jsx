import { Navigate } from "react-router";
import React, { useState } from 'react';

const LoginForm = ({onLogin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
        event.preventDefault();
        onLogin({ username, password });

    };
    
    
   
    
    return (
          
         
        
            
            <form onSubmit={handleSubmit}>
              <h1>Login Form</h1>

                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username." value={username} required onChange={(e) => setUsername(e.target.value)}/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password." value={password} required onChange={(e) => setPassword(e.target.value)}/>
                

                <button type="submit">Login</button> 

            </form>
       
  
    )
}

export default LoginForm;



/*

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
*/