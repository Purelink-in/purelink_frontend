import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { UserContext } from '../../App';
import { BASE_URL } from '../axiosConfig';
import Swal from 'sweetalert2';

export default function Notification() {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const { userData } = useContext(UserContext);

    useEffect(() => {
        if (userData?.access) {
            axios.get(`${BASE_URL}/requests/list_requests/`, {
                headers: {
                    Authorization: `Bearer ${userData?.access}`,
                },
            })
            .then((response) => {
                console.log(response.data.requests);
                setRequests(response.data.requests);
            })
            .catch((error) => {
                console.error("There was an error fetching the requests!", error);
            })
            .finally(() => {
                setLoading(false); // Set loading to false once data is fetched
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
                    <div key={req.id} className="content" onClick={() => showDetails(req)}>
                        <p>{req.name} requested {req.blood} blood at <span>{req.hospital}</span></p>
                        <ul>
                            <li><button onClick={() => showDetails(req)}> Ready!</button></li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
