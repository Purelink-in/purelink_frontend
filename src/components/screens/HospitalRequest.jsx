import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { UserContext } from '../../App';
import { BASE_URL } from '../axiosConfig';
import Swal from 'sweetalert2';

export default function HospitalRequest() {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const { userData } = useContext(UserContext);

    useEffect(() => {
        if (userData?.access) {
            axios.get(`${BASE_URL}/requests/list_requests/`, {
                headers: {
                    Authorization: `Bearer ${userData?.access}`,
                },
            })
            .then((response) => {
                console.log(response.data.hospital_requests);
                setRequests(response.data.hospital_requests);
            })
            .catch((error) => {
                console.error("There was an error fetching the requests!", error);
            })
            .finally(() => {
                setLoading(false);
            });
        }
    }, [userData]);

    const handleAccept = (id) => {
        axios.post(`${BASE_URL}/requests/accept_request/`, 
        {
            'request_id': id,
            'join' : 'true',
        },
        {
            headers: {
                'Authorization': `Bearer ${userData.access}`,
            }
        }).then((res) => {
            console.log(res.data);
            if (res.data.status_code === 6000) {
                Swal.fire({
                    "title" : "Accepted",
                    "text" : res.data.message,
                    "icon" : "success",
                })
            } else {
                Swal.fire({
                    "title" : "Failed",
                    "text" : res.data.message,
                    "icon" : "error",
                })
            }
        }).catch((err) => {
            console.error(err);
        });
    }
    

    if (loading) {
        return <p>Loading requests...</p>;
    }

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
                {requests.length === 0 ? (
                    <p>No hospital requests found.</p>
                ) : (
                    requests.map((request, index) => (
                        <div className="content" key={index}>
                            <p>Id:<span> {request.id}</span></p>
                            <p>Hospital Avenue:<span> {request.hospital_name}</span></p>
                            <p>Wanted count:<span> {request.wanted_count}</span></p>
                            <p>Blood Group:<span> {request.blood_group}</span></p>
                            <p>Type of donation:<span> {request.type_of_donation}</span></p>
                            <p>Date and Time:<span> {new Date(request.datetime).toLocaleString()}</span></p>
                            <ul>
                                <li><button onClick={() => handleAccept(request.id)}> Accept!</button></li>
                            </ul>
                        </div>
                    ))

                )}
            </div>
        </div>
    );
}
