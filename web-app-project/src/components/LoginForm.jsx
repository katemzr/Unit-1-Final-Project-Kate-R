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
              <h1>Hello, Puzzler! Please log in.</h1>

                <label htmlFor="username">Username: admin</label>
                <input type="text" id="username" name="username" placeholder="Enter the username." value={username} required onChange={(e) => setUsername(e.target.value)}/>

                <label htmlFor="password">Password: 1234</label>
                <input type="password" id="password" name="password" placeholder="Enter the password." value={password} required onChange={(e) => setPassword(e.target.value)}/>
                

                <button className="buttons" type="submit">Login</button> 

            </form>
    );
};

export default LoginForm;


