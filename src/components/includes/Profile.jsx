import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './../screens/Dashboard.css';

export default function Profile() {
    useEffect(() => {
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
      }, []);
const name_of_user = localStorage.getItem('name')  
const number = localStorage.getItem('phoneNo')
const blood_group = localStorage.getItem('bloodGroup')
const district = localStorage.getItem('districtId');
let district_name;
if (district == "1") {
 district_name = "Kollam";
} else if (district == "2") {
 district_name = "Ernakulam";
} else if (district == "3") {
  district_name = "Kozhikode";
} else if (district == "4") {
  district_name = "Thiruvananthapuram";
} else if (district == "5") {
  district_name = "Alappuzha";
} else if (district == "6") {
  district_name = "Pathanamthitta";
} else if (district == "7") {
  district_name = "Kottayam";
} else if (district == "8") {
  district_name = "Idukki";
} else if (district == "9") {
  district_name = "Thrissur";
} else if (district == "10") {
  district_name = "Palakkad";
} else if (district == "11") {
  district_name = "Malappuram";
} else if (district == "12") {
  district_name = "Wayanad";
} else if (district == "13") {
  district_name = "Kannur";
} else if (district == "14") {
  district_name = "Kasargod";
}
    return (
    <>
        <div className="over"></div>
        <div className="mb-top-header">
            <ul>
            <li><h1><img src={require("./../assets/main-page-images/hero/pureLink.svg").default} alt="images" /></h1></li>
            <li><div className="mb-top-circle">{name_of_user.charAt(0)}</div></li>
            </ul>
        </div>
        <div className="mb-circle">{name_of_user.charAt(0)}</div>
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
                <h1>{name_of_user}</h1>
                <span>{number}</span>
                <span>{blood_group}</span>
                <span>{district_name}</span>
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