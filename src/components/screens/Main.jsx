import React, { useContext, useEffect, useRef } from 'react';
import './Main.css';
import { Navigate, Routes, Route, NavLink, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import scrollReveal from 'scrollreveal';
import { UserContext } from '../../App';


const Main = () => {
    const videoRef = useRef(null);
    const {userData,loading} = useContext(UserContext)

    useEffect(() => {
        const video = videoRef.current;

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (video.paused) {
                        video.play().catch((error) => {
                            console.error('Failed to play the video:', error);
                        });
                    }
                } else {
                    video.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        var scrollRevealInstance = scrollReveal({
            reset: false,
            distance: '50%',
            duration: 1500,
            delay: 0,
            opacity: 0,
        });

        scrollRevealInstance.reveal('.slide-up', { origin: 'bottom' });
        scrollRevealInstance.reveal('.slide-down', { origin: 'top' });
        scrollRevealInstance.reveal('.slide-left', { origin: 'left' });
        scrollRevealInstance.reveal('.slide-right', { origin: 'right' });
        scrollRevealInstance.reveal('.card', { delay: 100, easing: 'ease-out', interval: 100, scale: 1.5, distance: '0', duration: 500 });
        scrollRevealInstance.reveal('.video', { delay: 0, easing: 'ease-out', scale: 0.8 });
    }, []);

    if (loading) {
        return <h1>Loading</h1>
    }

    return (
    !userData ? (
        <div>
            <Helmet>
                <title>pureLink</title>
            </Helmet>

            {/*---------------------- #hero--------------------------------*/}
            <section id="hero">
                <section className="wrapper">
                    <div className="left slide-left">
                        <img src={require("./../assets/main-page-images/hero/hero-bg.png")} alt="" />
                    </div>
                    <div className="right">
                        <h1 className='light slide-right'>ONE <br /> CLICK,</h1>
                        <h1 className='slide-up'><span className="shapes"><img src={require('./../assets/main-page-images/hero/hero-shape.svg').default} alt="" /></span>SAVE</h1>
                        <h1 className='bg slide-up'>LIVE<span>HOOD.</span></h1>
                        <ul className='slide-down'>
                            <li><NavLink to='want-blood' className="button">Want Blood</NavLink></li>
                            <li><NavLink to='signup' className="button">Donate Blood</NavLink></li>
                        </ul>
                    </div>
                </section>
            </section>


            {/*---------------------- #what is pureLink--------------------------------*/}
            <section id="service">
                <section className="wrapper">
                    <section className="panel">
                        <div className='left'>
                            <div className='title slide-down'>Way to <span className='bold-italic'>pure<span>Link</span></span> Hospital <br/> <span>Pannel now</span></div>
                            <button className='slide-left'>Click Here</button>
                            <div className='right-arrow slide-up'>
                                <img className='slide-right' src={require("./../assets/main-page-images/panel/right-arrow.svg").default} />
                            </div>
                        </div>
                        <div className='right'>
                            <img className='slide-right' src={require("./../assets/main-page-images/panel/laptop.svg").default} alt="laptop" />
                        </div>
                    </section>

                    {/*---------------------- #video--------------------------------*/}
                    <section id="videoContainer" onClick={() => videoRef.current.play()} className='video'>
                        <video id='video' ref={videoRef} src={(require('./../assets/main-page-images/bg-video/blood.mp4'))} loop muted />
                    </section>

                    <section className="top">
                        <div className="arrow">
                            <a href="#footer"><img className='slide-left' src={require("./../assets/main-page-images/what-is-purelink/arrow.png")} alt="arrow" /></a>
                            <h6 className='slide-up'>What is pureLink?</h6>
                            <h3 className='slide-down'><span>Life-Saving </span>Platform <br /> for Human <span>Blood Loss.</span></h3>
                        </div>
                    </section>
                    <section className="content">
                        <section className="wrapper">
                            <div className="left">
                                <h1 className='slide-up'><span>Request blood</span> to become a hero in your <span>community</span></h1>
                                <h3 className='slide-down'>Help save lives by donating blood to those in need.</h3>
                                <NavLink to='signup' className="button slide-left">Signup</NavLink>
                                <div className="arrow slide-right">
                                    <NavLink to='signup'><img src={require("./../assets/main-page-images/what-is-purelink/right-bend-arrow.svg").default} alt="arrow" /></NavLink>
                                </div>
                            </div>
                            <div className="right slide-right">
                                <img src={require("./../assets/main-page-images/what-is-purelink/signup-phone.svg").default} alt="image" />
                            </div>
                        </section>
                    </section>

                    <section className="banner slide-down">
                        <img src={require("./../assets/main-page-images/what-is-purelink/banner.svg").default} alt="image" />
                    </section>

                    <section className="dashboard content">
                        <section className="wrapper">
                            <div className="left">
                                <h1 className='slide-up'><span>Signup</span> easily through <i>pure<span>Link</span></i></h1>
                                <div className="require slide-down">
                                    <img src={require("./../assets/main-page-images/what-is-purelink/tick.svg").default} alt="tick" />
                                    <p>No Sign-Up Required</p>
                                </div>
                                <h3 className='slide-up'>Request blood through our platform without signing in.</h3>
                                <NavLink to='want-blood' className="button slide-right">Request Blood</NavLink>
                                <div className="arrow blood slide-left">
                                    <NavLink to='want-blood'><img src={require("./../assets/main-page-images/what-is-purelink/blood.svg").default} alt="blood" /></NavLink>
                                </div>
                            </div>
                            <div className="right slide-left">
                                <img src={require("./../assets/main-page-images/what-is-purelink/request-phone.svg").default} alt="image" />
                            </div>
                        </section>
                    </section>
                </section>
            </section>
            <hr className="main-line" />

            <section id="restrictions">
                <h1 className="top slide-up"><span>Restrictions</span> You Must <span>Follow</span></h1>
                <section className="wrapper">
                    <div className="item">
                        <div className="cards">
                            <div className="card">
                                <div className="caption">
                                    <h1>Age And <br /> Previous <br /> Donations</h1>
                                    <hr className="line" />
                                    <img src={require("./../assets/main-page-images/restrictions/age.svg").default} alt="image" />
                                </div>
                                <div className="content">
                                    <p>Individuals typically need to be between 18 and 60 years old to donate blood. The minimum age might vary in some states and blood banks.<a href='./restrictions#age'>more...</a></p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="caption">
                                    <h1>Weight <br /> And <br /> Health</h1>
                                    <hr className="line" />
                                    <img src={require("./../assets/main-page-images/restrictions/weight.png")} alt="image" />
                                </div>
                                <div className="content">
                                    <p>You should weigh at least 50 kg to be eligible for blood donation...Donors should be in good general health and not suffering from any acute.<a href='./restrictions#weight'>more...</a></p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="caption">
                                    <h1>Infections <br /> And <br /> Vaccinations</h1>
                                    <hr className="line" />
                                    <img src={require("./../assets/main-page-images/restrictions/vaccin.svg").default} alt="image" />
                                </div>
                                <div className="content">
                                    <p>Individuals with HIV, hepatitis B or C, or other blood-borne infections are generally not allowed to donate blood...Depending on the vaccine <a href='/restrictions#infections'>more...</a></p>
                                </div>
                            </div>
                            <div className="card hm-640">
                                <div className="caption">
                                    <h1>Pregnancy <br /> And <br /> Breastfeeding</h1>
                                    <hr className="line" />
                                    <img src={require("./../assets/main-page-images/restrictions/pregnant.svg").default} alt="image" />
                                </div>
                                <div className="content">
                                    <p>Pregnant and breastfeeding women are usually not eligible for blood donation.<a href='/restrictions#pregnancy'>more...</a></p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="caption">
                                    <h1>Travel History <br />And High-Risk Behaviors</h1>
                                    <hr className="line" />
                                    <img src={require("./../assets/main-page-images/restrictions/travel.png")} alt="image" />
                                </div>
                                <div className="content">
                                    <p>Recent travel to certain malaria-endemic areas may disqualify a donor for a specific period...Individuals engaged in high-risk behaviors such as intravenous drug use.<a href='/restrictions#infections'>more...</a></p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="caption">
                                    <h1 style={{ marginTop: '30px' }}>Tattoos <br /> And  Piercings</h1>
                                    <hr className="line" />
                                    <img src={require("./../assets/main-page-images/restrictions/ear-piercing.png")} alt="image" />
                                </div>
                                <div className="content">
                                    <p>There may be a deferral period after getting a tattoo, piercing, or other invasive procedures due to the risk of infection.<a href='/restrictions#infections'>more...</a></p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="caption">
                                    <h1 className="mt">Medications</h1>
                                    <hr className="line" />
                                    <img src={require("./../assets/main-page-images/restrictions/medicine.svg").default} alt="image" />
                                </div>
                                <div className="content">
                                    <p>Some medications may affect eligibility, so it's essential to disclose any prescription or over-the-counter medications you are taking to the blood bank staff.<a href='/restrictions#medications'>more...</a></p>
                                </div>
                            </div>
                            <div className="card ov-y-h">
                                <div className="caption">
                                    <h1 className="mt">Hemoglobin Levels</h1>
                                    <hr className="line" />
                                    <img src={require("./../assets/main-page-images/restrictions/hemoglobin.png")} alt="image" />
                                </div>
                                <div className="content">
                                    <p>Your hemoglobin level should meet the specified criteria, usually around 12.5 to 13.5 grams per deciliter (g/dL) for men and 12.0 to 12.5 g/dL for women.<a href='/restrictions#hemoglobin'>more...</a></p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="caption">
                                    <h1 className="mt">Click to Know more</h1>
                                    <hr className="line" />
                                </div>
                                <div className="content">
                                    <p>If you want to know more about the things which are restricted.<a href='/restrictions#age'>Click me..</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <hr className="line" />

        {/* # process */}

        <section id="process">
                <section id="top" className='slide-down'>
                    <h3>
                        Blood <span>Donation Platform Process</span>
                    </h3>
                    <h4>Helping You Find The Right Donors Effortlessly</h4>
                </section>
                <section id="info">
                    <div class="end">
                        <div class="box slide-left mr">
                            <div class="left">
                                <img src={require("./../assets/main-page-images/process/Component 66.svg" ).default} alt="icon" />
                                <h4>Request Blood Easily</h4>
                            </div>
                            <div class="right">
                                <p>People can request blood without signing in</p>
                            </div>
                        </div>
                        <div class="box slide-right">
                            <div class="left">
                                <img src={require("./../assets/main-page-images/process/Component 69.svg").default} alt="icon" />
                                <h4>Local Donor Alerts</h4>
                            </div>
                            <div class="right">
                                <p>Reqeusts go only to registered Donors in the same district</p>
                            </div>
                        </div>
                    </div>
                    <div class="mid">
                        <div class="box slide-up mr">
                            <div class="left">
                                <img src={require("./../assets/main-page-images/process/Component 70.svg").default} alt="icon" />
                                <h4>Register as a Donor</h4>
                            </div>
                            <div class="right">
                                <p>Donors should register or sign in to donate their blood</p>
                            </div>
                        </div>
                        <div class="box slide-down">
                            <div class="left">
                                <img src={require("./../assets/main-page-images/process/Component 71.svg").default} alt="icon" />
                                <h4>Chat Support System</h4>
                            </div>
                            <div class="right">
                                <p>Get real-time support through our chat feature</p>
                            </div>
                        </div>
                    </div>
                    <div class="end">
                        <div class="box slide-left mr">
                            <div class="left">
                                <img src={require("./../assets/main-page-images/process/Component 66.svg").default} alt="icon" />
                                <h4>Immediate Notfications</h4>
                            </div>
                            <div class="right">
                                <p>PRegistered donors get instant notifications about requests</p>
                            </div>
                        </div>
                        <div class="box slide-right">
                            <div class="left">
                                <img src={require("./../assets/main-page-images/process/Component 69.svg").default} alt="icon" />
                                <h4>Community Impact</h4>
                            </div>
                            <div class="right">
                                <p>Make a significant impact by helping those in need within your community</p>
                            </div>
                        </div>
                    </div>
                    <div class="mid">
                        <div class="box slide-up mr">
                            <div class="left">
                                <img src={require("./../assets/main-page-images/process/Component 70.svg").default} alt="icon" />
                                <h4>Easy to use</h4>
                            </div>
                            <div class="right">
                                <p>Our user friendly platform ensures a smooth experience for all</p>
                            </div>
                        </div>
                        <div class="box slide-down">
                            <div class="left">
                                <img src={require("./../assets/main-page-images/process/Component 71.svg").default} alt="icon" />
                                <h4>Secure and Confidential</h4>
                            </div>
                            <div class="right">
                                <p>All reqeusts and dontations are handled securely and confidentially</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section id="donate">
                <img className='slide-up' src={require("./../assets/main-page-images/process/Component 49.svg").default} alt="image" />
                <h3 className='slide-down'>Go to the <i>pure<span>Link</span></i> Donor's Dashboard <br /><span>Save Lives</span></h3>
                <div class="button-btn">
                    <NavLink to='signup' className='slide-up'>Signup</NavLink>
                </div>
            </section>

            <div className="social" id='footer'>
                <footer>
                    <section className="wrapper">
                        <section className="top">
                            <div className="item large">
                                <h1><a href=""><img src={require("./../assets/main-page-images/logo_official.png")} alt="" /></a></h1>
                                <h3 className='slide-left'>Donate Blood To Be A Hero</h3>
                                <ul className='slide-down'>
                                    <li><NavLink to='want-blood' className="button">Want Blood</NavLink></li>
                                    <li><NavLink to='signup' className="button">Donate Blood</NavLink></li>
                                </ul>
                            </div>
                            <div className="item slide-right">
                                <h3>On This Page</h3>
                                <ul>
                                    <li><NavLink to='/' className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                                    <li><NavLink to='/about' className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
                                    <li><NavLink to='/restrictions' className={({ isActive }) => isActive ? "active" : ""}>Restrictions</NavLink></li>
                                    <li><NavLink to='/terms&conditions' className={({ isActive }) => isActive ? "active" : ""}>Terms&Condition</NavLink></li>
                                </ul>
                            </div>
                            <div className="item slide-right">
                                <h3>About Us</h3>
                                <ul>
                                    <li><NavLink to='/about'>Our Mission</NavLink></li>
                                    <li><NavLink to='/about'>How we work</NavLink></li>
                                    <li><NavLink to='/about'>Aim</NavLink></li>
                                </ul>
                            </div>
                        </section>
                        {/* <!-- (footer > .wrapper > .top) --> */}
                        <section className="bottom">
                            <p className="left slide-left">
                                Copyrights &copy; 2024-2025 purelink.in. All Rights Reserved
                            </p>
                            <div className="social slide-right">
                                <ul>
                                    <li><a href=""><img src={require("../assets/images/dash-profile/instagram.png")} alt="Instagram" /></a></li>
                                    <li><a href=""><img src={require("../assets/images/dash-profile/whatsapp.png")} alt="Whatsapp" /></a></li>
                                    <li><a href=""><img src={require("../assets/images/dash-profile/telegram.png")} alt="telegram" /></a></li>
                                    <li><a href=""><img src={require("../assets/images/dash-profile/discord.png")} alt="discord" /></a></li>
                                </ul>
                            </div>
                        </section>
                        {/* <!-- (footer > .wrapper > .bottom) --> */}
                    </section>
                    {/* <!-- (footer > .wrapper) --> */}
                </footer>
                {/* <!-- (footer) --> */}
            </div>
        </div>
    ) : (
        <Navigate to='dashboard/dash' />
    )
)
}
export default Main;