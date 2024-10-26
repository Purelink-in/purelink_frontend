import React, { useEffect,useState,useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './../screens/Dashboard.css';
import { UserContext } from '../../App';
import { BASE_URL } from '../axiosConfig';
import axios from 'axios';


export default function Profile() {   
    const {userData,updateUserData} = useContext(UserContext)
    const [name,setName] = useState('')
    const [bloodGrp,setBloodGrp] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [district,setDistrict] = useState('')
    const [address,setAddress] = useState('')

    useEffect(() => {

    axios.get(`${BASE_URL}/requests/sidebar/`,{headers:{Authorization : `Bearer ${userData?.access}`}}).then((res) => {
        console.log(res.data)
        if (res.data.status_code === 6000) {
          setName(res.data.name)
          setBloodGrp(res.data.blood_group)
          setEmail(res.data.email)
          setPhone(res.data.phone)
          setDistrict(res.data.district)
          setAddress(res.data.address)
        } else {
            console.log(res.data.message)
        }
        }).catch((err) => console.log(err))

        const circle = document.querySelector('.mb-circle');
        const mbCircle = document.querySelector('.mb-top-circle');
        const cancel = document.querySelector('.right');
        const profile = document.querySelector('.profile');
        const over = document.querySelector('.over');
    
          circle.addEventListener('click', () => {
            profile.classList.add('active');
            over.classList.add('active');
          });
          mbCircle.addEventListener('click', () => {
            profile.classList.add('active');
            over.classList.add('active');
          });
          cancel.addEventListener('click', () => {
            profile.classList.remove('active');
            over.classList.remove('active');
          });
          over.addEventListener('click', () => {
            profile.classList.remove('active');
            over.classList.remove('active');
          });
    
        // Cleanup the event listeners when the component unmounts
        return () => {
            circle.removeEventListener('click', () => {
              profile.classList.add('active');
              over.classList.add('active');
            });
            mbCircle.removeEventListener('click', () => {
                profile.classList.add('active');
                over.classList.add('active');
              });
    
            cancel.removeEventListener('click', () => {
              profile.classList.remove('active');
              over.classList.remove('active');
            });
            over.removeEventListener('click', () => {
                profile.classList.remove('active');
                over.classList.remove('active');
            });
        };
      }, [userData]);

    return (
    <>
        <div className="over"></div>
        <div className="mb-top-header">
            <ul>
            <li><h1><img src={require("./../assets/main-page-images/hero/pureLink.svg").default} alt="images" /></h1></li>
            <li><div className="mb-top-circle">K</div></li>
            </ul>
        </div>
        <div className="mb-circle">K</div>
        <div className='profile'>
            <div className="info">
                <div className="left">
                    <img src={require("./../assets/images/dash-profile/info.png")} alt="image" />
                    <h4>Your Info</h4>
                </div>
                <div className="right">
                    <img src={require("./../assets/images/dash-profile/cancel-btn.svg").default} alt="cancel" />
                </div>
            </div>
            <div className="user">
                <div className="circle"></div>
                <h1>{name}</h1>
                <span>{phone}</span>
                <span>{email}</span>
                <span>{bloodGrp}</span>
                <span>{address}</span>
                <span>{district}</span>
            </div>
            <div className="social-links">
                <ul>
                    <li><a href="#"><img src={require('./../assets/images/dash-profile/instagram.png')} alt="links" /></a></li>
                    <li><a href="#"><img src={require('./../assets/images/dash-profile/whatsapp.png')} alt="links" /></a></li>
                    <li><a href="#"><img src={require('./../assets/images/dash-profile/telegram.png')} alt="links" /></a></li>
                    <li><a href="#"><img src={require('./../assets/images/dash-profile/discord.png')} alt="links" /></a></li>
                </ul>
            </div>
        </div>
    </>
    )
}