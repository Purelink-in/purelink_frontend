import React from 'react';
import './NotFound.css';
import './Main.css';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <section id="main-found">
        <section className="wrapper">
            <div className="top-found">
            </div>
            <div className="content-found">
                <h1>Error 404</h1>
                <p>The page you are attempting to access is invalid.<br/> To return to the main page, please click the button below.</p>
                <NavLink to='/'>Go to Home</NavLink>
            </div>
        </section>
    </section>
  )
}