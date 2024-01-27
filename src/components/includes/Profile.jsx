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
    return (
    <>
        <div className="over"></div>
        <div className="mb-top-header">
            <ul>
            <li><h1><img src={require("./../assets/main-page-images/hero/pureLink.svg").default} alt="images" /></h1></li>
            <li><div className="mb-top-circle"></div></li>
            </ul>
        </div>
        <div className="mb-circle"></div>
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
                <a href="#" className="button">View Profile</a>
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