import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Form.css'
import { NavLink , Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { BASE_URL } from '../axiosConfig';
import Swal from 'sweetalert2'

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
        {userData && !loading ? (
          <div>
            <Navigate to="/dashboard/dash"/>
          </div>
          ) : (
            <div className="login-container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={handleSubmit}>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="text" className="login__input" placeholder="Email"  onChange={(e) => {setUsername(e.target.value);}} value={username} required/>
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