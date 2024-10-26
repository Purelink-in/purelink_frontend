import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
import './Dashboard.css';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { BASE_URL } from '../axiosConfig';
import Swal from 'sweetalert2';

export default function Dashboard() {
    const { userData } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (userData?.access) {
            axios.get(`${BASE_URL}/requests/home/`, {
                headers: {
                    Authorization: `Bearer ${userData?.access}`,
                }})
                .then((response) => {
                    console.log(response.data);
                    setData(response.data);
                })
                .catch(error => {
                    console.error('Error fetching wanters data:', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [userData]);

    const showDetails = (want) => {
        Swal.fire({
            "icon" : "info",
            "html" : `  <b>Phone No: ${want.phone_no}</b> </br>
                        <b>Hospital: ${want.hospital}</b>     </br>   
                        <b>Units Needed: ${want.no_of_units_here}</b>   </br>     
                        <b>Blood Type: ${want.blood_group}<b>     </br>    
                        <b>Type of donation : ${want.type_of_donation} </b>`,
            "title" : "Want Details",
        })
    };

    if (loading) {
        return <div>Loading...</div>; // Display a loading message while data is being fetched
    }

    return (
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
                {data.requests.map((req, index) => (
                    <div className="content" key={index} onClick={() => showDetails(req)}>
                        <p>{req.name} requested {req.blood} blood at <span>{req.hospital}</span></p>
                        <ul>
                            <li><button onClick={() => showDetails(req)}>Ready!</button></li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
