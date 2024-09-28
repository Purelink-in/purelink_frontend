import React from 'react'
import './../css/include.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header>
        <h1 className="left">
            <img src={require('./../assets/static/images/home/logo/full-logo.svg').default} alt={require('./../assets/static/images/home/logo/full-logo.svg').default} />
        </h1>
        <nav>
            <ul>
                <li>
                    <NavLink to='/' className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
                </li>
                <li>
                    <NavLink to='/restrictions' className={({isActive}) => isActive ? "active" : ""}>Restrictions</NavLink>
                </li>
            </ul>
        </nav>
        <div className="auth">
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
      </header>
    </div>
  )
}
