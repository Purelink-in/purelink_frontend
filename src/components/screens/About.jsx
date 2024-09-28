import React, { useEffect, useState } from 'react';
import './About.css';
import { NavLink, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import scrollReveal from 'scrollreveal';

export default function About() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('introduction'); // Set the default active link

    const handleLinkClick = (linkId) => {
        setActiveLink(linkId);
    };

    useEffect(() => {
        var scrollRevealInstance = scrollReveal({
            reset: false,
            distance: '50%',
            duration: 1500,
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
        {/* {location.pathname === '/about' && <MainNavFixed />} */}

      <section id="container">
            <section className="content-container">
                <section className="wrapper">
                    <div className="top">
                        <h1 className='slide-left'><span>Get started</span> with Pure<span>Link</span></h1>
                    </div>
                    <h3 className='slide-right'>PureLink is a blood service platform. Donate or Receive blood—through online—in minutes.</h3>
                    <ul className="below slide-up">
                        <li><NavLink to='../want-blood' className="button">Want Blood</NavLink></li>
                        <li><NavLink to='../signup' className="button">Donate Blood</NavLink></li>
                    </ul>
                    <div className="item value slide-left" id="introduction">
                        <h1>Introduction</h1>
                        <h4>Welcome to our PureLink platform!</h4>
                        <p>At PureLink, we are dedicated to facilitating the crucial connection between generous blood donors and individuals in need of life-saving transfusions. Our mission is to create a seamless and efficient process that ensures a stable and readily available blood supply for those facing medical challenges.</p>
                        <br/><br/>
                        <h4 style={{marginBottom: '0'}}>For Donors:</h4>
                        <p className="pl">Join us in making a difference by becoming a blood donor. Your contribution can be a lifeline for patients in emergency situations, those undergoing surgeries, cancer treatments, or managing chronic illnesses. Donating blood is a simple yet profound way to give back to your community and potentially save lives.</p>
                        <br/><br/>
                        <h4 style={{marginBottom: '0'}}>For Receivers:</h4>
                        <p className="pl">If you or your loved ones are in need of blood transfusions, we understand the urgency and importance of timely access to safe and compatible blood. Our platform connects you with a network of reliable donors, ensuring that you receive the support you need during challenging times. Rest assured, we prioritize the well-being of both donors and recipients, adhering to the highest standards of safety and quality.</p>
                        <br/><br/>
                        <h4 style={{marginBottom: '0'}}>Why Choose PureLink?</h4>
                        <ul className="pl">
                            <li><b>Efficiency:</b> We strive to make the donation and receiving process as smooth as possible, leveraging technology for seamless coordination.</li>
                            <li><b>Safety:</b> Your well-being is our top priority. We adhere to strict safety protocols to guarantee the quality and purity of the donated blood.</li>
                            <li><b>Community Impact:</b> By participating in our services, you become part of a compassionate community dedicated to making a positive impact on lives.</li>
                        </ul>
                        <div className="box-container slide-down">
                            <span className="box">
                                <h1 className="img">
                                    <img src={require("./../assets/main-page-images/about/save-life.svg").default} alt="image" />
                                </h1>
                                <div>
                                    <p>Join us in this life-saving journey. Together, we can build a healther and more resilient community. Donate blood,save lives!</p>
                                    <br/>
                                    <a href="#" className="button">Join Now</a>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div className="item slide-left" id="our_missions">
                        <h1>Our Mission</h1>
                        <br/>
                        <p>
                            Our mission at Pure Link is to create a seamless and efficient platform
                            that connects blood donors with those in critical need. We strive to bridge
                            the gap between donors and recipients, ensuring timely and life-saving
                            blood donations while leveraging technology for a healthier, more connected
                            community.
                        </p>
                    </div>

                    <div className="item slide-left value" id="our_values">
                        <h1>Our values</h1>
                        <br/>
                        <ul>
                            <li className={({isActive}) => isActive ? "active" : ""}>
                                <b>Compassion:</b> We believe in the power of empathy and
                                kindness, fostering a culture where every life matters, and every donation counts.
                            </li>
                            <li>
                                <b>Reliability:</b>We uphold the highest standards of
                                trustworthiness and accountability, ensuring that donors
                                and recipients can depend on us in times of need.
                            </li>
                            <li>
                                <b>Innovation:</b>Embracing innovation, we constantly evolve
                                our platform to streamline the blood donation process
                                , making it more accessible and efficient.
                            </li>
                            <li>
                                <b>Community:</b> We foster a sense of unity and solidarity
                                within our community, rallying together to save lives and
                                make a meaningful impact on society.
                            </li>
                        </ul>
                    </div>

                    <div className="item slide-left" id="how_we_work">
                        <h1>How We Work</h1>
                        <br/>
                        <p>
                            User-Friendly Platform: Our user-friendly interface simplifies the process
                            of both donating and requesting blood, ensuring a seamless experience for all users.
                           <br /><br/>
                            Advanced Matching Algorithms: Leveraging cutting-edge technology, our platform
                            employs advanced algorithms to swiftly match donors with recipients based on
                            location and blood type, ensuring timely assistance.
                            <br />
                            Privacy and Security: We prioritize the confidentiality and security of all
                            user data, implementing robust measures to safeguard personal information.
                        </p>
                    </div>

                    <div className="item slide-left" id="aim">
                        <h1>Pure Link's Aim</h1>
                        <br/>
                        <p>
                            Our aim is to revolutionize the blood donation landscape
                            by harnessing technology to make the process more accessible,
                            efficient, and responsive to the needs of both donors and recipients.
                            We strive to create a world where no one suffers due to the unavailability
                            of blood when they need it the most.
                        </p>
                    </div>

                    <div className="item slide-left value" id="get_involved">
                        <h1>Get Involved</h1>
                        <p>
                            <h4>You can make a difference! Here's how you can get involved with Pure Link:</h4>
                            <ul>
                                <li><b>Spread Awareness:</b> Help us raise awareness about the
                                 importance of blood donation and encourage others to join our cause.</li>
                                <li><b>Volunteer:</b> Consider volunteering your time and skills to support our
                                     mission in various capacities.</li>                         
                                <li><b>Partner with Us:</b> Hospitals, organizations, and institutions can
                                    collaborate with us to enhance the impact of our blood donation platform.</li>
                            </ul>
                        </p>
                        <br/><br/>
                    </div>

                </section>
            </section>

            <section className="side-bar"> 
                <section className="wrapper">
                    <div className="top">
                        <h1>On this page</h1>
                        <hr className="line" />
                    </div>
                    <ul>
                        <li className={activeLink === 'introduction' ? 'active' : ''}>
                            <span className="bar active"><img src={require("./../assets/main-page-images/about/about-side-bar.png")} alt="image" /></span>
                            <a href="#introduction" className="link" onClick={() => handleLinkClick('introduction')}>Introduction</a>
                        </li>
                        <li className={activeLink === 'our_missions' ? 'active' : ''}>
                            <span className="bar"><img src={require("./../assets/main-page-images/about/about-side-bar.png")} alt="image" /></span>
                            <a href="#our_missions" className="link" onClick={() => handleLinkClick('our_missions')}>Our Missions</a>
                        </li>
                        <li className={activeLink === 'our_values' ? 'active' : ''}>
                            <span className="bar"><img src={require("./../assets/main-page-images/about/about-side-bar.png")} alt="image" /></span>
                            <a href="#our_values" className="link" onClick={() => handleLinkClick('our_values')}>Our Values</a>
                        </li>
                        <li className={activeLink === 'how_we_work' ? 'active' : ''}>
                            <span className="bar"><img src={require("./../assets/main-page-images/about/about-side-bar.png")} alt="image" /></span>
                            <a href="#how_we_work" className="link" onClick={() => handleLinkClick('how_we_work')}>How We Work</a>
                        </li>
                        <li className={activeLink === 'aim' ? 'active' : ''}>
                            <span className="bar"><img src={require("./../assets/main-page-images/about/about-side-bar.png")} alt="image" /></span>
                            <a href="#aim" className="link" onClick={() => handleLinkClick('aim')}>Aim</a>
                        </li>
                        <li className={activeLink === 'our_team' ? 'active' : ''}>
                            <span className="bar"><img src={require("./../assets/main-page-images/about/about-side-bar.png")} alt="image" /></span>
                            <a href="#our_team" className="link" onClick={() => handleLinkClick('our_team')}>Our Team</a>
                        </li>
                        <li className={activeLink === 'get_involved' ? 'active' : ''}>
                            <span className="bar"><img src={require("./../assets/main-page-images/about/about-side-bar.png")} alt="image" /></span>
                            <a href="#get_involved" className="link" onClick={() => handleLinkClick('get_involved')}>Get Involved</a>
                        </li>
                        <li className={activeLink === 'contact_us' ? 'active' : ''}>
                            <span className="bar"><img src={require("./../assets/main-page-images/about/about-side-bar.png")} alt="image" /></span>
                            <a href="#contact_us" className="link" onClick={() => handleLinkClick('contact_us')}>Contact Us</a>
                        </li>
                    </ul>
                </section>
            </section>
        </section>
        

    </div>
  )}

// function MainNavFixed() {
//     return (
//       <header style={{ display: 'block', position: 'fixed', width: '100%', top: 0, padding: '0 0',  zIndex: 2 }}>
//         <MainNav />
//       </header>
//     );
//   }