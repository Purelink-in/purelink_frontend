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
            <div className="login-container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={handleLogin}>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="number" className="login__input" placeholder="Phone number"  onChange={(e) => {
                                    if (e.target.value.length <= 10) {
                                        setPhoneNo(e.target.value);
                                    }
                                }} value={phoneNo} required/>
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password} required />
                            </div>
                            <button className="button login__submit" type='submit'>
                                <span className="button__text">Log In</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>				
                        </form>
                        <div className="social-login">
                            <NavLink to="../signup" style={{width:'100%'}}>
                                <button className="button login__submit">
                                Sign Up
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>		
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1">
                            <img src={require('./../assets/main-page-images/logo_official.png')} alt="logo" />
                        </span>
                    </div>		
                </div>
            </div>
            )}
      </div>
      );
};
export default Login;