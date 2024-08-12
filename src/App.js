import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
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
import { GlobalStateProvider ,useGlobalState} from './components/GlobalContext';
import HashLoader from "react-spinners/HashLoader";
import NotFound from './components/screens/NotFound';
import Terms from './components/screens/Terms';
import HospitalRequest from './components/screens/HospitalRequest';

function App() {
    const {loggedIn} = useState(false);
    const [loading, setloading] = useState(false)

    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 2000)
    }, [])

  return (
    <GlobalStateProvider>
        {/* {
            loading ? 
            <HashLoader
                id='randomHash'
                color={'#5E3FE3'}
                loading={loading}
                aria-label="Loading Spinner"
                data-testid="loader"
                size={90}
            />

            : */}

            <Router>
                <Routes>
                    <Route path="/" element={<MainNav/>}>
                        <Route index element={<Main />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/restrictions" element={<Restriction />} />
                        <Route path="/want-blood" element={<WantBloodMain />} />
                        <Route path="signup" element={<Signup />} />
                    </Route>
                </Routes>

                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Routes>
                    <Route path="/terms&conditions" element={<Terms />} />
                </Routes>
                <Routes>
                    <Route
                    path='/dashboard/*'
                    element={
                        <Container>
                            <Routes>
                                <Route path='dash' element={<Nav />} />
                                <Route path='notification' element={<Nav />} />
                                <Route path='hospital-notification' element={<Nav />} />
                            </Routes>
                            <RouteContainer>
                                <Routes>
                                <Route path='dash' element={<Dashboard />} />
                                <Route path='notification' element={<Notification />} />
                                <Route path='hospital-notification' element={<HospitalRequest />} />
                                </Routes>
                            </RouteContainer>
                            <Routes>
                                <Route path='dash' element={<Profile />} />
                                <Route path='notification' element={<Profile />} />
                                <Route path='hospital-notification' element={<Profile />} />
                            </Routes>
                        </Container>
                    }
                    />
                </Routes>
            </Router>
        {/* } */}
    
    </GlobalStateProvider>
  );
}

export default App;
const Container = styled.div`
  display: flex;
`
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
`