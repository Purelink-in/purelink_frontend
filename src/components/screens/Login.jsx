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
            const response = await axios.post('http://localhost:8000/login/', { phone_no: phoneNo, password });
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
      localStorage.removeItem('district');
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
            <section id="form">
              <div className="top">
                <h1><span>Log</span> In</h1>
              </div>
              <section className="wrapper log-in">
                <div className="right">
                  <form onSubmit={handleLogin}>
                    <div className="form">
                      <div className="form-field log-in">
                        <input type="text" placeholder="Enter phone number" name="tel" onChange={(e) => setPhoneNo(e.target.value)}  id="tel" value={phoneNo}  required />
                        <input type="password" placeholder="Password" name="Password" onChange={(e) => setPassword(e.target.value)}  value={password}  id="password" required />
                      </div>
                    </div>
                    <div className="bottom">
                      <button type='submit' className="button"><NavLink to='/dashboard/dash'>LogIn</NavLink></button>
                      <NavLink to='../sign-up'>Create new account</NavLink>
                    </div>
                  </form>
                </div>
              </section>
            </section>
            )}
      </div>
      );
};
export default Login;