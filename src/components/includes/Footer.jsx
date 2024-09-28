import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="top">
        <div className="item">
                <h1>On This Page</h1>
                <a href="/home" target='_blank'>Home</a>
                <a href="/about" target='_blank'>About</a>
                <a href="/restrictions" target='_blank'>Restrictions</a>
                <a href="/terms" target='_blank'>Terms & Conditions</a>
            </div>
            <div className="item">
                <h1>About Us</h1>
                <a href="/about/#our_mission" target='_blank'>Our Mission</a>
                <a href="/about/#how_we_work" target='_blank'>How We Work</a>
                <a href="/about/#aim" target='_blank'>Aim</a>
            </div>
            <div className="social-links">
                <h1>Follow Us</h1>
                    <div className="links">
                        <a href="#" target='_blank'><img src={require('./../assets/static/images/home/social-icons/instagram.svg').default} alt={require('./../assets/static/images/home/social-icons/instagram.svg').default} /></a>
                        <a href="#" target='_blank'><img src={require('./../assets/static/images/home/social-icons/linkedin.svg').default} alt={require('./../assets/static/images/home/social-icons/linkedin.svg').default} /></a>
                        <a href="#" target='_blank'><img src={require('./../assets/static/images/home/social-icons/facebook.svg').default} alt={require('./../assets/static/images/home/social-icons/facebook.svg').default} /></a>
                    </div>
            </div>
        </div>

        <hr/>

        <div className="bottom">
            <p>&copy; Copyrights 2024-2025 <a href="https://purelink.in">purelink.in</a>. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}
