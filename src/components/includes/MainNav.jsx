import React, { useEffect } from 'react';
import './../screens/Main.css';
import { NavLink, Outlet } from 'react-router-dom';
import scrollReveal from 'scrollreveal';
import {useGlobalState,GlobalStateProvider} from '../GlobalContext'


export default function MainNav() {
    const {loggedIn} = useGlobalState();

  const userData = localStorage.getItem('userData');
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile');

    const handleHamburgerClick = () => {
      mobileNav.classList.toggle('active');
      hamburger.classList.toggle('active');
    };

    hamburger.addEventListener('click', handleHamburgerClick);

    const navLinks = document.querySelectorAll('.mobile a');
    const handleNavLinkClick = () => {
      mobileNav.classList.remove('active');
      hamburger.classList.remove('active');
    };

    navLinks.forEach((link) => {
      link.addEventListener('click', handleNavLinkClick);
      
    });
    
    
    return () => {
        hamburger.removeEventListener('click', handleHamburgerClick);
        navLinks.forEach((link) => {
          link.removeEventListener('click', handleNavLinkClick);
        });
    };
  }, []);

  useEffect(() => {
    var scrollRevealInstance = scrollReveal({
        reset: true,
        distance: '50%',
        duration: 2500,
        delay: 100,
        opacity: 0,
    });

    scrollRevealInstance.reveal('.slide-up', { origin: 'bottom' });
    scrollRevealInstance.reveal('.slide-down', { origin: 'top' });
    scrollRevealInstance.reveal('.slide-left', { origin: 'left' });
    scrollRevealInstance.reveal('.slide-right', { origin: 'right' });
}, []);

  return (
    <div>
      <header>
            <div className="res-full-bg">
                <div className="left">
                    <div className="content">
                        <h1 className="left">
                            <NavLink to='/'>
                                <img src={require("./../assets/main-page-images/hero/pureLink.svg").default} alt="imag" />
                            </NavLink>
                        </h1>  {/*header > .left > .content > h1.left*/}
                        <nav className="right map">
                            <ul>
                                <li><NavLink to='/' className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
                                <li><NavLink to='/about' className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
                                <li><NavLink to='/restrictions' className={({isActive}) => isActive ? "active" : ""}>Restrictions</NavLink></li>
                                {loggedIn ? (
                                  <>
                                    <li><NavLink id="bold" to='/dashboard/dash' className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink></li>
                                  </>
                                ) : (
                                  <>
                                    <li><NavLink id="bold" to='/login' className={({ isActive }) => isActive ? "active" : ""}>Log in</NavLink></li>
                                    <li><NavLink id="bold" to='/signup' className={({ isActive }) => isActive ? "active" : ""}>Sign up</NavLink></li>
                                  </>
                                )}
                            </ul>
                            <span className="hamburger">
                                <img src={require('./../assets/main-page-images/hero/hamburger.svg').default} alt="image" />
                                <img src={require('./../assets/main-page-images/hero/close.svg').default} alt="image" />
                            </span>
                        </nav>  {/*header > .left > .content > .nav.right*/}
                    </div>  {/*header > .left > .content*/}
                </div> {/*header > .left*/}
            </div>
        </header>
        <nav className="mobile">
            <ul>
                <li><NavLink to='/' className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to='/about' className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
                <li><NavLink to='/restrictions' className={({isActive}) => isActive ? "active" : ""}>Restrictions</NavLink></li>
                {/* <li>Support <span><img src={require("./../assets/main-page-images/hero/content-down-arrow.svg").default} alt="image" /></span></li> */}
                {loggedIn ? (
                  <>
                    <li><NavLink id="bold" to='/dashboard/dash' className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink></li>
                  </>
                ) : (
                  <>
                    <li><NavLink id="bold" to='/login' className={({ isActive }) => isActive ? "active" : ""}>Log in</NavLink></li>
                    <li><NavLink id="bold" to='/signup' className={({ isActive }) => isActive ? "active" : ""}>Sign up</NavLink></li>
                  </>
                )}
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
