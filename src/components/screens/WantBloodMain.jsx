import React,{useState,useEffect, useContext} from 'react';
import './../css/form.css';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Swal from 'sweetalert2';
import { BASE_URL } from '../axiosConfig';
import { UserContext } from '../../App';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function WantBloodMain() {
    const {userData} = useContext(UserContext);

    const [formData, setFormData] = useState({
        name: '',
        blood_group: '',
        phone_no: '',
        age: '',
        hospital : '',
        district:'',
        no_of_units_here : '',
        type_of_donation : '',
    });
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${BASE_URL}/requests/recieve/`,formData,{headers : {
        'Authorization': `Bearer ${userData?.access}`,
  
    }}).then((res) => {
        console.log(res.data);
        if (res.data.status_code === 6000) {
            Swal.fire({
                "icon" : "success",
                "text" : res.data.message,
                "title" : "Success!",
            })
        } else {
            Swal.fire({
                "icon" : "error",
                "text" : res.data.message,
                "title" : "Failed!",
            })
        }
    })
};


  return (
    <>
    <Helmet>
      <title>pureLink | Want-Blood</title>
    </Helmet>
      <section id="form">
            <div className="top">
                <h1><span>Want</span> Blood</h1>
            </div>
        <section className="wrapper">
            <div className="left">
                <img src={require("./../assets/main-page-images/forms/circle.png")} alt="image" />
                <h2 className='donors'>125+</h2>
                <h1><span>Donors</span></h1>
            </div>
            <div className="right">
                <img src={require("./../assets/main-page-images/forms/left-side-arrows.png")} alt="" />
                <form className="form2" onSubmit={handleSubmit}>
                  <div className="doubleflex">
                  <div className="form-field">
                    <input type="text" placeholder="Enter your Name" value={formData.name} name="name"  id="name" required  onChange={handleChange}/>
                    <select name="blood_group" value={formData.blood_group} id="group" required onChange={handleChange}>
                    <option value="" disabled defaultValue>
                     Blood Group
                    </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>

                    <input type="number" placeholder="Enter phone number" name="phone_no" value={formData.phone_no} id="tel" required onChange={(e) => {
                    if (e.target.value.length <= 10) {
                      handleChange(e);
                    }
                    }}/>

                    <input type="text" placeholder="Enter hospital name" value={formData.hospital} name="hospital" id="hos" required onChange={handleChange}/>

                  </div>
                  <div className="form-field">
                    <input type="number" placeholder="Enter your Age"  name="age" id="age" required value={formData.age} onChange={(e) => {
                      if (e.target.value.length <= 2) {
                        handleChange(e);
                      }                  
                    }} min={18} max={60}/>
                    <select
                    name="no_of_units_here"
                    id="unit"
                    value={formData.no_of_units_here}
                    required
                    onChange={handleChange}
                    >
                    <option disabled value="">
                      No. of Units
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                   <option value="8">8</option>
                  </select>

                    <select name="district" value={formData.district}  id="unit" required onChange={handleChange}>
                        <option defaultChecked>Select District</option>
                        <option value="Kollam">Kollam</option>
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
                    <select name="type_of_donation" value={formData.type_of_donation} id="io" required onChange={handleChange}>
                    <option defaultValue>Request Type</option>
                    <option value="blood">Blood</option>
                    <option value="platelets">Platelets</option>
                    </select>
                  </div>
                  </div>
                  <div className="bottom">
                  <button type="submit">Submit</button>
                  <NavLink to='../signup'>Register</NavLink>
                </div>
                </form>
            </div>
        </section>
    </section>
    </>
  )
}