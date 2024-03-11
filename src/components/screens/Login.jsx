import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.css'
import { NavLink , Navigate } from 'react-router-dom'
import { GlobalStateProvider,useGlobalState } from '../GlobalContext';

const Login = () => {
    const {loggedIn, setLoggedIn, setError } = useGlobalState(); 
    const [phoneNo, setPhoneNo] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setLoggedIn(true);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
    
        if (!phoneNo || !password) {
            setError('Phone number and password are required.');
            return;
        }
    
        try {
            const response = await axios.post('https://api.purelink.in/login/', { phone_no: phoneNo, password });
            const { token, name, phone, district, blood_group } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('name', name);
            localStorage.setItem('phoneNo', phone);
            localStorage.setItem('districtId', district.id); 
            localStorage.setItem('bloodGroup', blood_group);

            setLoggedIn(true);
            setError(null);

            console.log('Login Successful:', response.data);
        } catch (error) {
          console.error('Error setting up the request:', error);
          setError('Invalid phone number or password.');
        }
    };


    const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('token');
      localStorage.removeItem('districtId');
      localStorage.removeItem('bloodGroup');
      localStorage.removeItem('phoneNo');
      localStorage.removeItem('name');
      setLoggedIn(false);
      setError(null);
    };


    return (
      <div className='bodyoflogin'>
        {loggedIn ? (
          <div>
            <Navigate to="/dashboard/dash" replace="True"/>
          </div>
          ) : (
            <div class="login-container">
                <div class="screen">
                    <div class="screen__content">
                        <form class="login" onSubmit={handleLogin}>
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="number" class="login__input" placeholder="Phone number"  onChange={(e) => {
                                    if (e.target.value.length <= 10) {
                                        setPhoneNo(e.target.value);
                                    }
                                }} value={phoneNo}/>
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="password" class="login__input" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password} />
                            </div>
                            <button class="button login__submit" type='submit'>
                                <span class="button__text">Log In</span>
                                <i class="button__icon fas fa-chevron-right"></i>
                            </button>				
                        </form>
                        <div class="social-login">
                            <button class="button login__submit">
                                <NavLink to={"../signup"} class="button__text">Sign Up</NavLink>
                            </button>
                        </div>
                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>		
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>		
                </div>
            </div>
            )}
      </div>
      );
};
export default Login;