import React, { useEffect } from 'react';
import './../screens/Main.css';
import { NavLink, Outlet } from 'react-router-dom';
import scrollReveal from 'scrollreveal';


export default function MainNav() {

  const userData = localStorage.getItem('userData');
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile');

    const handleHamburgerClick = () => {
      mobileNav.classList.toggle('active');
    };

    hamburger.addEventListener('click', handleHamburgerClick);

    return () => {
      hamburger.removeEventListener('click', handleHamburgerClick);
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
                        <nav className="right">
                            <ul>
                                <li><NavLink to='/' className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
                                <li><NavLink to='/about' className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
                                <li><NavLink to='/restrictions' className={({isActive}) => isActive ? "active" : ""}>Restrictions</NavLink></li>
                                <li>Support <span><img src={require("./../assets/main-page-images/hero/content-down-arrow.svg").default} alt="image" /></span></li>
                                <li><NavLink to='/dashboard/dash' className={({isActive}) => isActive ? "active" : ""}>Get started</NavLink></li>
                            </ul>
                        </nav>  {/*header > .left > .content > .nav.right*/}
                    </div>  {/*header > .left > .content*/}
                </div> {/*header > .left*/}
                <div className="right">
                    <NavLink to='/dashboard/dash' className="user">
                        <img src={require("./../assets/main-page-images/hero/user.svg").default} alt="image" />
                    </NavLink>
                    <span className="hamburger">
                        <img src={require('./../assets/main-page-images/hero/hamburger.svg').default} alt="image" />
                    </span>
                </div> {/*header > .right*/}
            </div>
        </header>
        <nav className="mobile">
            <ul>
                <li><NavLink to='/' className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to='/about' className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
                <li><NavLink to='/restrictions' className={({isActive}) => isActive ? "active" : ""}>Restrictions</NavLink></li>
                <li>Support <span><img src={require("./../assets/main-page-images/hero/content-down-arrow.svg").default} alt="image" /></span></li>
                <li><NavLink to='/dashboard/dash' className={({isActive}) => isActive ? "active" : ""}>Get started</NavLink></li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
