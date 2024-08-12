import React from 'react'
import { Helmet } from 'react-helmet';
import axios from 'axios';

export default function HospitalRequest() {
  return (
    <div>
      <Helmet>
            <title>PureLink | Hospital Notification</title>
        </Helmet>

        <div className="noti">
            <h1 className="top">
                <img src={require("./../assets/images/dhash-nav/hospital-requests.png")} alt="icon" />
                <span className='color'>Hospital </span> Requests
            </h1>
                <div className="content">
                    <p>Adil requested O+ blood at <span>Kannur Hospital</span></p>

                    <ul>
                    <li><button> Ready!</button></li>
                    </ul>
                </div>
        </div>
    </div>
  )
}
