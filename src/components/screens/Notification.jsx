import React, { useState,useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

export default function Notification() {
  const [requests, setRequests] = useState([
  ]);
  useEffect(() => {
    axios.get('https://api.purelink.in/want')
        .then(response => {
            const filteredRequests = response.data.filter(req =>
                req.blood_group == localStorage.getItem('bloodGroup') &&
                req.district == localStorage.getItem('districtId')
            );
            const Reversal = filteredRequests.reverse();
            setRequests(Reversal);
        })
        .catch(error => {
            console.error('Error fetching wanters data:', error);
        });
}, []);
  const showDetails = (want) => {
        alert(`Phone No: ${want.phone_no}\nHospital: ${want.hospital}\nUnits Needed: ${want.no_of_units_here}\nBlood Type: ${want.blood_group}\nType of donation : ${want.type}`);
    };
  return (
    <div>
        <Helmet>
            <title>PureLink | Notification</title>
        </Helmet>

        <div className="noti">
            <h1 className="top">
                <img src={require("./../assets/images/dash-board/bell-logo.svg").default} alt="bell" />
                <span className='color'>Notifi</span>cation
            </h1>
            {requests.map((req) => (
                <div className="content" onClick={() => showDetails(req)}>
                    <p>{req.name} requested {req.blood} blood at <span>{req.hospital}</span></p>

                    <ul>
                    <li><button onClick={() => showDetails(req)}> Ready!</button></li>
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}
