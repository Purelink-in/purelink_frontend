import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './../css/form.css'
import { NavLink , Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { BASE_URL } from '../axiosConfig';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet';

const Login = () => {
    const {userData,updateUserData,loading} = useContext(UserContext)

    const navigate = useNavigate();

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${BASE_URL}/auth/token/`,{
            username: username,
            password:  password,
            
        })
        .then((res) => {
            console.log(res.data);
            setUsername('');
            setPassword('');
            const data = res.data;
            localStorage.setItem('user_data', JSON.stringify(data));

            Swal.fire({
                title: "Login successful",
                text:  "Proceed to dashboard",
                icon: "success",
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/dashboard/dash');
                    updateUserData({ type: "LOGIN" , payload: data});
                }
              })
        })
        .catch((err) => {
            console.log(err.response);
            Swal.fire({
                title: `Error ${err.response.status} : ${err.response.data.detail}`,
                text:  `Error ${err.response.status} : ${err.response.statusText}`,
                icon: "error"
              });
        })
    }


    return (
      <div className='bodyoflogin'>
        <Helmet>
                <title>PureLink | Login</title>
        </Helmet>

        {userData && !loading ? (
          <div>
            <Navigate to="/dashboard/dash"/>
          </div>
          ) : (
            <section id="login">
                <section className="left">
                    <h1 className="top"><img src={require('./../assets/static/images/logo/full-logo.svg').default} alt={require('./../assets/static/images/logo/full-logo.svg').default} /></h1>
                    <div className="wrapper">
                        <div className="container">
                            <h1>Welcome to PureLink</h1>
                            <p>Please enter your details</p>
                            <form action="">
                                <label htmlFor="email">Email</label>
                                <input className='input' type="email" name="Email" id="email" placeholder='Enter your email address' />
                                <label htmlFor="password">Password</label>
                                <input className='input' type="password" name="Password" id="password" placeholder='Enter your password' />
                                <div className="flex">
                                    <div className="left">
                                        <input type="checkbox" id='remember' />
                                        <label htmlFor="remember">Remember for 30 days</label>
                                    </div>
                                    <div className="right">
                                        <NavLink>Forgot Password</NavLink>
                                    </div>
                                </div>
                                <button type='submit'>Signin</button>
                            </form>
                            <h5>Don’t have an account? <NavLink to='/register'>Register</NavLink></h5>
                        </div>
                    </div>
                </section>
                <section className="right">
                    <img src={require('./../assets/static/images/auth/login-image.svg').default} alt={require('./../assets/static/images/auth/login-image.svg').default} />
                </section>
            </section>
            )}
      </div>
      );
};
export default Login;