import React, { useContext, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Form.css';
import { Helmet } from 'react-helmet';
import 'sweetalert2/dist/sweetalert2.min.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../axiosConfig';
import { UserContext } from '../../App';

const Signup = () => {
    const {userData,updateUserData} = useContext(UserContext);

    const [formData, setFormData] = useState({
        name: '',
        blood_group: '',
        phone_no: '',
        email: '',
        password: '',
        age: '',
        address: '',
        has_tattoo: '',
        district: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        axios.post(`${BASE_URL}/auth/signup/`, formData)
            .then((res) => {
                console.log(res.data);
    
                if (res.data.status_code === 6000) {
                    Swal.fire({
                        icon: 'success',
                        text: res.data.message,
                        title: 'Success!',
                    }).then(() => {
                        Swal.fire({
                            title: `Enter OTP sent to ${formData.email}`,
                            input: 'number',
                            inputPlaceholder: 'Enter OTP',
                            showCancelButton: false,
                            confirmButtonText: 'Submit',
                            preConfirm: (OTP) => {
                                if (!OTP) {
                                    Swal.showValidationMessage('OTP is required');
                                    return false;  
                                }
                                return OTP;
                            }
                        }).then((result) => {
                            if (result.isConfirmed && result.value) {
                                const OTP = result.value;
                                console.log('OTP entered:', OTP);
    
                                axios.post(`${BASE_URL}/auth/create_account/${OTP}/`, formData)
                                    .then((otpRes) => {
                                        console.log(otpRes.data);
    
                                        if (otpRes.data.status_code === 6000) {
                                            Swal.fire({
                                                icon: 'success',
                                                text: otpRes.data.message,
                                                title: 'Success!',
                                            }).then(() => {
                                                localStorage.setItem('user_data', JSON.stringify(otpRes.data.login_data));
                                                updateUserData({ type: "LOGIN" , payload: otpRes.data.login_data });
                                                navigate('../dashboard/dash');
                                            });
                                        } else {
                                            Swal.fire({
                                                icon: 'error',
                                                text: otpRes.data.message,
                                                title: 'Error!',
                                            });
                                        }
                                    })
                                    .catch((err) => {
                                        console.error("There was an error creating the account!", err);
                                        Swal.fire({
                                            icon: 'error',
                                            text: err.response?.data || 'An error occurred',
                                            title: 'Error!',
                                        });
                                    });
                            }
                        });
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        text: res.data.message,
                        title: 'Error!',
                    });
                }
            })
            .catch((err) => {
                console.error("There was an error signing up!", err);
                Swal.fire({
                    icon: 'error',
                    text: err.response?.data || 'An error occurred',
                    title: 'Error!',
                });
            });
    };
    
    return (
        <div>
            <Helmet>
                <title>pureLink | SignUp</title>
            </Helmet>

            <section id="form">
                <div className="top">
                    <h1><span>Sign</span> Up</h1>
                </div>
                <section className="wrapper sign-up">
                    <div className="left">
                        <img src={require("./../assets/main-page-images/forms/circle.png")} alt="Donors" />
                        <h2 className="donors">125+</h2>
                        <h1><span>Donors</span></h1>
                    </div>
                    <div className="right">
                        <img src={require("./../assets/main-page-images/forms/right-side-arrows.png")} alt="" />
                        <div>
                            <form onSubmit={handleSubmit} id="want_blood" className="sign-up">
                                <div className="form-field-main">
                                    <div className="form-field">
                                        <label className="name">
                                            Name:
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </label>
                                        <label className="phone">
                                            Phone Number:
                                            <input
                                                type="number"
                                                name="phone_no"
                                                id="phone"
                                                value={formData.phone_no}
                                                onChange={(e) => {
                                                    if (e.target.value.length <= 10) {
                                                        handleChange(e);
                                                    }
                                                }}
                                                required
                                                onInvalid={(e) => e.target.setCustomValidity('Invalid Phone Number')}
                                            />
                                        </label>
                                        <label className="email">
                                            Email:
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </label>
                                        <label className="blood">
                                            Blood Group:
                                            <select
                                                name="blood_group"
                                                id="blood"
                                                value={formData.blood_group}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Blood Group</option>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                            </select>
                                        </label>
                                        <label className="age2 age-label">
                                            Age:
                                            <input
                                                type="number"
                                                name="age"
                                                id="age"
                                                min={18}
                                                max={60}
                                                value={formData.age}
                                                onChange={(e) => {
                                                    if (e.target.value.length <= 2) {
                                                        handleChange(e);
                                                    }
                                                }}
                                                required
                                            />
                                        </label>
                                    </div>
                                    <div className="form-field">
                                        <label className="pass">
                                            Password:
                                            <input
                                                type="password"
                                                name="password"
                                                id="pass"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                            />
                                        </label>
                                        <label className="address">
                                            Address:
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                required
                                            />
                                        </label>
                                        <div className="selectors">
                                            <label className="tattoo">
                                                Has Tattoo:
                                                <select
                                                    name="has_tattoo"
                                                    id="tattoo"
                                                    value={formData.has_tattoo}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="">Select</option>
                                                    <option value="True">Yes</option>
                                                    <option value="False">No</option>
                                                </select>
                                            </label>
                                            <label className="district">
                                                District:
                                                <select
                                                    name="district"
                                                    id="district"
                                                    value={formData.district}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option defaultChecked>Select District</option>
                                                    <option value="Kollam">Kollam</option>
                                                    <option value="Ernakulam">Ernakulam</option>
                                                    <option value="Kozhikode">Kozhikode</option>
                                                    <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                                                    <option value="Alappuzha">Alappuzha</option>
                                                    <option value="Pathanamthitta">Pathanamthitta</option>
                                                    <option value="Kottayam">Kottayam</option>
                                                    <option value="Idukki">Idukki</option>
                                                    <option value="Thrissur">Thrissur</option>
                                                    <option value="Palakkad">Palakkad</option>
                                                    <option value="Malappuram">Malappuram</option>
                                                    <option value="Wayanad">Wayanad</option>
                                                    <option value="Kannur">Kannur</option>
                                                    <option value="Kasargod">Kasargod</option>
                                                </select>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <button type="submit" className="button">Sign Up</button>
                                    <NavLink to="../login">Already Registered</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Signup;
