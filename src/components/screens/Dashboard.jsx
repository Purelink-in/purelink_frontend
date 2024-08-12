import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
import './Dashboard.css';
import {Navigate} from 'react-router-dom';
import { useGlobalState } from '../GlobalContext';

export default function Dashboard() {
    const { loggedIn } = useGlobalState();
    const [requests, setRequests] = useState([
       
    ]);
    const [lastNotification,setLastNotification] = useState([]);

    const RemainingRequests = requests.slice(0,3);

    useEffect(() => {
        axios.get('https://vercel-api.purelink.in/want')
            .then(response => {
                const filteredRequests = response.data.filter(req =>
                    req.blood_group == localStorage.getItem('bloodGroup') &&
                    req.district == localStorage.getItem('districtId')
                );
                const Reversal = filteredRequests.reverse();
                setRequests(Reversal);
                console.log(filteredRequests);

            })
            .catch(error => {
                console.error('Error fetching wanters data:', error);
            });
    }, []);
    const showDetails = (want) => {
        alert(`Phone No: ${want.phone_no}\nHospital: ${want.hospital}\nUnits Needed: ${want.no_of_units_here}\nBlood Type: ${want.blood_group}\nType of donation : ${want.type}`);
    };

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get('https://vercel-api.purelink.in/want');
                 const filtering = response.data.filter(req =>
                    req.blood_group == localStorage.getItem('bloodGroup') &&
                    req.district == localStorage.getItem('districtId')
                );
            
                const reversed = filtering.reverse();
                const latestNotification = reversed[0,1];
                
                
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };

        fetchNotifications();

        const intervalId = setInterval(fetchNotifications, 6000000000000000000);

        return () => clearInterval(intervalId);
    }, [lastNotification]);

    const sendPushNotification = (notification) => {
        if ('serviceWorker' in navigator && 'PushManager' in window) {
            navigator.serviceWorker.ready.then(registration => {
                registration.showNotification('New Notification', {
                    body: `New notification: ${notification.message}`,
                    icon: '',
                });
            });
        }
    };
    
    
  return (
     loggedIn ? (
        <div className='container-two'>
        <Helmet>
            <title>PureLink | Dashboard</title>
        </Helmet>

        <h1 className='top'><span className='color'>Dash</span>board</h1>
        <div className="counts">
                <ul>
                    <li>
                        <h1>200+</h1>
                        <h4 className='now'>Patients<br />Received</h4>
                    </li>
                    <li>
                        <h1>500+</h1>
                        <h4>Donors</h4>
                    </li>
                    <li>
                        <h1>300+</h1>
                        <h4>Localities<br />Covered</h4>
                    </li>
                </ul>
        </div>
        <div className="noti">
                <h1 className="top">
                    <img src={require("./../assets/images/dash-board/bell-logo.svg").default} alt="bell" />
                    <span className='color'>Notifi</span>cation
                </h1>
                {RemainingRequests.map((req, index) => (
                    <div className="content" key={index} onClick={() => showDetails(req)}>
                        <p>{req.name} requested {req.blood} blood at <span>{req.hospital}</span></p>
                        <ul>
                        <li><button onClick={() => showDetails(req)}>Ready!</button></li>
                        </ul>
                    </div>
                ))}
        </div>
    </div>
     )  
                : (
                    <Navigate to="../../login"/>
                )
            
  )
}
