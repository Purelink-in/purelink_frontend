import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Form.css';
import { Helmet } from 'react-helmet';
import 'sweetalert2/dist/sweetalert2.min.css';
import { NavLink } from 'react-router-dom';
const Signup = () => {
    const ShowAlert2 = () => {
        Swal.fire({
            title:"Signed up successfully",
        }
        )
    }
    const [formData, setFormData] = useState({
        name: '',
        blood_group: '',
        phone_no: '',
        password: '',
        age: '',
        address: '',
        has_tattoo: '',
        district:'',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Ensure the district value is a number
        const district = parseInt(formData.district, 10);
        // Create a new object with the updated district value
        const updatedFormData = { ...formData, district };
        try {
            console.log(formData); 
            const response = await axios.post('http://localhost:8000/donors/', formData);
            console.log(response.data);
            ShowAlert2();
            
        } catch (error) {
            console.error('Error signing up:', error);
        }
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
                        <img src={require("./../assets/main-page-images/forms/circle.png")} alt="image" />
                        <h1><span>Requested</span> <br /> Users</h1>
                    </div>
                    <div className="right">
                        <img src={require("./../assets/main-page-images/forms/right-side-arrows.png")} alt="" />
                        <div>
                            <form onSubmit={handleSubmit} id="want_blood" className='sign-up'>
                                <div className="form-field-main">
                                    <div className="form-field">
                                        <label className="name">
                                            Name:
                                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
                                        </label>
                                        <label className="phone">
                                            Phone Number:
                                            <input type="number" name="phone_no" id="phone" value={formData.phone_no} onChange={handleChange} required />
                                        </label>
                                        <label className="blood">
                                            Blood Group:
                                            <select name="blood_group" id="blood" value={formData.blood_group} onChange={handleChange} required>
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
                                            <input type="number" name="age" id="age" min={18} max={65} value={formData.age} onChange={handleChange} required />
                                        </label>
                                    </div>
                                    <div className="form-field">
                                        <label className="pass">
                                            Password:
                                            <input type="password" name="password" id="pass" value={formData.password} onChange={handleChange} required />
                                        </label>
                                        <label className="address">
                                            Address:
                                            <input type="text" name="address" id="addres" value={formData.address} onChange={handleChange} required/>
                                        </label>
                                        <div className="selectors">
                                            <label className="tattoo">
                                                Has Tattoo:
                                                <select name="has_tattoo" id="tattoo" value={formData.has_tattoo} onChange={handleChange} required>
                                                    <option value="">Select</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                            </label>
                                            <label className="district">
                                                District:
                                                <select name="district" id="district" value={formData.district} onChange={handleChange} required>
                                                    <option value="1">Kollam</option>
                                                    <option value="2">Ernakulam</option>
                                                    <option value="3">Kozhikode</option>
                                                    <option value="4">Thiruvananthapuram</option>
                                                    <option value="5">Alappuzha</option>
                                                    <option value="6">Pathanamthitta</option>
                                                    <option value="7">Kottayam</option>
                                                    <option value="8">Idukki</option>
                                                    <option value="9">Thrissur</option>
                                                    <option value="10">Palakkad</option>
                                                    <option value="11">Malappuram</option>
                                                    <option value="12">Wayanad</option>
                                                    <option value="13">Kannur</option>
                                                    <option value="14">Kasargod</option>
                                                </select>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <button type="submit" className="button">Sign Up</button>
                                    <NavLink to='../login'>Already Registered</NavLink>
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