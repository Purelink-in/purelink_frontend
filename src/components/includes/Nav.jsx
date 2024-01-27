import React, { useEffect , useState} from 'react';
import { NavLink } from 'react-router-dom';
import './../screens/Dashboard.css';
import { useGlobalState } from '../GlobalContext';
export default function Nav() {
  
    
  const {loggedIn, setLoggedIn, setError } = useGlobalState(); 
  useEffect(() => {
    const link = document.querySelector('.hover');
    const aside = document.querySelector('.aside');
    const circle = document.querySelector('.circle');

      link.addEventListener('mouseover', () => {
        aside.classList.add('active');
      });
      link.addEventListener('mouseout', () => {
        aside.classList.remove('active');
      });

    // Cleanup the event listeners when the component unmounts
    return () => {
        link.removeEventListener('mouseover', () => {
          aside.classList.add('active');
        });

        link.removeEventListener('mouseout', () => {
          aside.classList.remove('active');
        });
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('token');
    localStorage.removeItem('district');
    localStorage.removeItem('bloodGroup');
    localStorage.removeItem('phoneNo');
    localStorage.removeItem('name');
    setLoggedIn(false); // Assuming setLoggedIn is defined in the context
    setError(null); // Assuming setError is defined in the context
  };

  return (
    <>
      <div className='aside mb-active'>
        <h1 className='img'>
          <img src={require("./../assets/main-page-images/hero/pureLink.svg").default} alt="images" />
        </h1>
        <div className="logos hover">
          <nav>
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ? "active" : ""} to='../../dashboard/dash'>
                      <img src={require("./../assets/images/dhash-nav/dash-logo.png")} alt="" />
                      <p>Dashboard</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "active" : ""} to='../dashboard/notification'>
                      <img src={require("./../assets/images/dhash-nav/notification.png")} alt="" />
                      <p>Notification</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "active" : ""} to='../../want-blood'>
                      <img src={require("./../assets/images/dhash-nav/blood.png")} alt="" />
                      <p>Want Blood</p> 
                    </NavLink>
                </li>
            </ul>
          </nav>
          <NavLink to='../../' onClick={handleLogout} className="log-out">
            <img src={require("./../assets/images/dhash-nav/log-out.svg").default} alt="" />
            <p>Log Out</p>
          </NavLink>
        </div>
      </div>


      <div className="mb-bottom-aside">
        <nav>
          <ul>
            <li>
              <NavLink className={({isActive}) => isActive ? "active" : ""} to='../dashboard/notification'>
                <img src={require("./../assets/images/dhash-nav/notification.png")} alt="" />
                <p>Notification</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? "active" : ""} to='../../want-blood'>
                <img src={require("./../assets/images/dhash-nav/blood.png")} alt="" />
                <p>Want Blood</p> 
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? "active" : ""} to='../../dashboard/dash'>
                <img src={require("./../assets/images/dhash-nav/dash-logo.png")} className='dash' alt="" />
                <img src={require("./../assets/images/dhash-nav/mobile-dash-circile.svg").default} className='circle' alt="" />
                <p className='dash'><span className='color'>Dash</span>board</p>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleLogout} className="log-out mobilelog" to=''>
                <img src={require("./../assets/images/dhash-nav/log-out.svg").default} alt="" />
                <p>Log Out</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
