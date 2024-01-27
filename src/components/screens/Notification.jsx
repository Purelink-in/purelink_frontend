import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Notification() {
  const [requests, setRequests] = useState([
    {
        name: "Adil",
        blood: "B+",
        hospital: "Holy Cross Kollam",
    },
    {
        name: "Azvan",
        blood: "B+",
        hospital: "Mims Calicut",
    },
    {
        name: "Jeevan",
        blood: "B+",
        hospital: "Dhanalakshmi Kannur",
    },
  ]);
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
                <div className="content">
                    <p>{req.name} requested {req.blood} blood at <span>{req.hospital}</span></p>
                    <ul>
                        <li><button>Ready!</button></li>
                        <li><span className='time'>3m Ago</span></li>
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}
