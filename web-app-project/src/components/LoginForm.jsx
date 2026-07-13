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


