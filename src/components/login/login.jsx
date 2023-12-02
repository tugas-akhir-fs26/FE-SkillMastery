import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Validation from '../cregistervalidation';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './register.css'

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: [event.target.value] }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    const { name, email, password } = values;

    if (Object.values(errors).some((error) => error !== '')) {
      console.log('Ada field yang belum terisi');
      return;
    }

    try {
      const response = await fetch('https://6528c37e931d71583df26ee3.mockapi.io/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const responseData = await response.json();

      console.log(responseData);
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  return (
    <div className="body">
      <div className="container">
        <div className="register-container">
          <div className="register-form">
            <h1 className="logo-title">
              <span>Skill</span>
              <span>Mastery</span>
            </h1>
            
            
            <form id="regis-form" onSubmit={handleSubmit} style={{marginTop:'20%'}}>
              <div style={{marginTop:"20px", textAlign:'center'}}>
                <h2>Login</h2>
              </div>
              <div className="input-form">
                <label htmlFor="email"></label>
                <input type="email" id="email" placeholder="Email" name="email" onChange={handleInput} />
                <div className="textalert">{errors.email && <span>{errors.email}</span>}</div>
              </div>
              <div className="input-form">
                <div className="input-password">
                  <label htmlFor="password"></label>
                  <input type="password" id="password" placeholder="Password" name="password" onChange={handleInput} />
                  <div>{errors.password && <span className="textalert">{errors.password}</span>}</div>
                </div>
              </div>
              <div className="button">
                <Stack spacing={2} direction="row">
                  <Button

                    variant="contained"
                    onClick={() => {
                      navigate('/homepage');
                    }}
                    onSubmit={handleSubmit}
                  >
                    Login
                  </Button>
                </Stack>
              </div>
            </form>
            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'10px' }}>
              Belum Punya akun? 
              <Stack spacing={2} direction="row">
                <Button
                style={{marginLeft:'10px'}}
                  variant="outlined"
                  onClick={() => {
                    navigate('/login');
                  }}
                  
                >
                  Daftar
                </Button>
              </Stack>
            </p>
          </div>
        </div>
        <div className="img-container">
          <img style={{width:"100%"}} src="https://i.ibb.co/n33dt5w/login-Img-removebg-preview.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
