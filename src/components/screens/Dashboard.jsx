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
    const [updated , setUpdated] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/want')
            .then(response => {
                const filteredRequests = response.data.filter(req =>
                    req.blood_group == localStorage.getItem('bloodGroup') &&
                    req.district == localStorage.getItem('districtId')
                );
                setRequests(filteredRequests.reverse());
                setUpdated(requests.slice(0,3))
            })
            .catch(error => {
                console.error('Error fetching wanters data:', error);
            });
    }, []);
    const showDetails = (want) => {
        alert(`Phone No: ${want.phone_no}\nHospital: ${want.hospital}\nUnits Needed: ${want.no_of_units_here}\nBlood Type: ${want.blood_group}`);
    };

  return (
     loggedIn ? (
        <div className='container'>
        <Helmet>
            <title>PureLink | Dashboard</title>
        </Helmet>

        <h1 className='top'><span className='color'>Dash</span>board</h1>
        <div className="counts">
                <ul>
                    <li>
                        <h1>200+</h1>
                        <h4>Patients<br />Received</h4>
                    </li>
                    <li>
                        <h1>500+</h1>
                        <h4>Donors</h4>
                    </li>
                    <li>
                        <h1>300+</h1>
                        <h4>Panchayats<br />Covered</h4>
                    </li>
                </ul>
        </div>
        <div className="noti">
                <h1 className="top">
                    <img src={require("./../assets/images/dash-board/bell-logo.svg").default} alt="bell" />
                    <span className='color'>Notifi</span>cation
                </h1>
                {requests.map((req, index) => (
                    <div className="content" key={index} onClick={() => showDetails(req)}>
                        <p>{req.name} requested {req.blood} blood at <span>{req.hospital}</span></p>
                        <ul>
                            <li><button>Ready!</button></li>
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