import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import styled from "styled-components";
import Nav from './components/includes/Nav';
import Dashboard from './components/screens/Dashboard';
import Profile from './components/includes/Profile';
import Notification from './components/screens/Notification';
import History from './components/screens/History';
import Main from './components/screens/Main';
import WantBloodMain from './components/screens/WantBloodMain';
import MainNav from './components/includes/MainNav';
import About from './components/screens/About';
import Signup from './components/screens/Signup';
import Login from './components/screens/Login';
import Restriction from './components/screens/Restriction';
import { GlobalStateProvider } from './components/GlobalContext';

function App() {
  return (
    <GlobalStateProvider>
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
      <Container>
        <Routes>
          <Route path='dashboard/dash' element={<Nav/>} />
          <Route path='dashboard/notification' element={<Nav/>} />
        </Routes>
        <RouteContainer>
          <Routes>
            <Route path='dashboard/dash' element={<Dashboard/>} />
            <Route path='dashboard/notification' element={<Notification/>} />
          </Routes>
        </RouteContainer>
        <Routes>
          <Route path='dashboard/dash' element={<Profile />} />
          <Route path='dashboard/notification' element={<Profile/>} />
        </Routes>
      </Container>
    </Router>
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
`