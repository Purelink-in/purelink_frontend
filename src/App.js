import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';
import { BASE_URL } from './components/axiosConfig';
import styled from "styled-components";
import Nav from './components/includes/Nav';
import Dashboard from './components/screens/Dashboard';
import Profile from './components/includes/Profile';
import Notification from './components/screens/Notification';
import Main from './components/screens/Main';
import WantBloodMain from './components/screens/WantBloodMain';
import MainNav from './components/includes/MainNav';
import About from './components/screens/About';
import Signup from './components/screens/Signup';
import Login from './components/screens/Login';
import Restriction from './components/screens/Restriction';
import HashLoader from "react-spinners/HashLoader";
import NotFound from './components/screens/NotFound';
import Terms from './components/screens/Terms';
import HospitalRequest from './components/screens/HospitalRequest';
import PrivateRoutes from './components/screens/PrivateRoutes';

export const UserContext = React.createContext();

function App() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userDataInfo = JSON.parse(localStorage.getItem('user_data'));
        if (userDataInfo) {
            const refresh = userDataInfo.refresh;
            axios.post(`${BASE_URL}/auth/token/refresh/`, { refresh: refresh })
                .then((res) => {
                    console.log(res.data);
                    const updatedUserData = { ...userData, access: res.data.access };
                    setUserData(updatedUserData);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        setLoading(false);
    }, []);

    const updateUserData = (action) => {
        switch (action.type) {
            case "LOGOUT":
                setUserData(null);
                localStorage.clear();
                console.log("LOGOUT");
                //window.location.href = "";
                break;
            case "LOGIN":
                console.log("Type LOGIN");
                setUserData(action.payload);
                break;
            default:
                break;
        }
    };

    return (
        <>
            {loading ? (
                <HashLoader
                    id='randomHash'
                    color={'#5E3FE3'}
                    loading={loading}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    size={90}
                />
            ) : (
                <UserContext.Provider value={{ userData, updateUserData, loading}}>
                    <Router>
                        <Routes>
                            <Route path="/" element={<MainNav />}>
                                <Route index element={<Main />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/restrictions" element={<Restriction />} />
                                <Route path="/want-blood" element={<WantBloodMain />} />
                                <Route path="signup" element={<Signup />} />
                            </Route>
                            <Route path="/login" element={<Login />} />
                            <Route path="/terms&conditions" element={<Terms />} />
                            <Route
                                path='/dashboard/*'
                                element={
                                    <PrivateRoutes element={() => (
                                        <Container>
                                            <Nav />
                                            <Profile />
                                            <RouteContainer>
                                                <Routes>
                                                    <Route path='dash' element={<Dashboard />} />
                                                    <Route path='notification' element={<Notification />} />
                                                    <Route path='hospital-notification' element={<HospitalRequest />} />
                                                </Routes>
                                            </RouteContainer>
                                        </Container>
                                    )} />
                                }
                            />
                        </Routes>
                    </Router>
                </UserContext.Provider>
            )}
        </>
    );
}

export default App;

const Container = styled.div`
  display: flex;
`;

const RouteContainer = styled.div`
  padding: 55px 30px 0px;
  width: 75%;
  padding-left: 10%;

  @media (max-width: 980px) {
    width: 98%;
    padding: 120px 30px 0px;
  }
  @media (max-width: 480px) {
    width: 98%;
    padding: 120px 0px 0px;
  }
`;
