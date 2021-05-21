import React, { useState, useEffect } from "react";
import axios from 'axios';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });
  
  // const error = "";
  //replace with error state

  const [credentials, setCredentials] = useState({
    username: 'Lambda School',
    password: 'i<3Lambd4',
  })
  const [error, setError] = useState('')

  const onChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);

      props.history.push('/protected')
    })
    .catch(err => setError('Username or Password incorrect'))
    console.log()
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={onSubmit}>
          <input type='text' name='username' value={credentials.username} onChange={onChange} data-testid="username"/>
          <input type='password' name='password' value={credentials.password} onChange={onChange} data-testid="password"/>
          <input type='submit' name='submit' />
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.