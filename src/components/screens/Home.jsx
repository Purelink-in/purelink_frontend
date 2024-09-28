import React, { useEffect, useRef } from 'react'
import './../css/home.css'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet';

export default function Home() {
    const videoRef = useRef(null);

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

  return (
    <div>
        <Helmet>
                <title>PureLink</title>
        </Helmet>

      <section id="hero">
        <section className="wrapper">
            <div className='top'>
                <h1>Blood donation</h1>
                <h1>the ultimate act of kindness</h1>
                <p>Blood donation is a simple act that can save up to three lives and make a profound difference in someone's journey towards recovery</p>
                <div className="button">
                    <NavLink to='request'>Request Blood</NavLink>
                    <NavLink to='donate'>Donate Blood</NavLink>
                </div>
            </div> {/* #hero .wrapper .top */}
            <div className="bottom">
                <img src={require('./../assets/static/images/home/hero/card-1.svg').default} alt={require('./../assets/static/images/home/hero/card-1.svg').default} />
                <img src={require('./../assets/static/images/home/hero/card-2.svg').default} alt={require('./../assets/static/images/home/hero/card-2.svg').default} />
                <img src={require('./../assets/static/images/home/hero/card-3.svg').default} alt={require('./../assets/static/images/home/hero/card-3.svg').default} />
                <img src={require('./../assets/static/images/home/hero/card-4.svg').default} alt={require('./../assets/static/images/home/hero/card-4.svg').default} />
                <img src={require('./../assets/static/images/home/hero/card-5.svg').default} alt={require('./../assets/static/images/home/hero/card-5.svg').default} />
            </div> {/* #hero .wrapper .bottom */}
        </section> {/* #hero .wrapper */}
      </section> {/* #hero */}

      <section id="restrictions">
        <section className="wrapper">
            <h1 className='top'>Restrictions You Must Follow</h1>
            <div className="items mb">
                <div className="item">
                    <img src={require('./../assets/static/images/home/restrictions/icon-1.svg').default} alt={require('./../assets/static/images/home/restrictions/icon-1.svg').default} />
                    <h1>Age And Previous Donations</h1>
                    <p>Individuals typically need to be between 18 and 60 years old to donate blood. The minimum age might vary in some states and blood banks.</p>
                </div>
                <div className="item">
                    <img src={require('./../assets/static/images/home/restrictions/icon-2.svg').default} alt={require('./../assets/static/images/home/restrictions/icon-2.svg').default} />
                    <h1>Weight and Health</h1>
                    <p>You should weigh at least 50 kg to be eligible for blood donation...Donors should be in good general health and not suffering from any acute.</p>
                </div>
                <div className="item">
                    <img src={require('./../assets/static/images/home/restrictions/icon-3.svg').default} alt={require('./../assets/static/images/home/restrictions/icon-1.svg').default} />
                    <h1>Medications</h1>
                    <p>Individuals with HIV, hepatitis B or C, or other blood-borne infections are generally not allowed to donate blood...Depending on the vaccine.</p>
                </div>
            </div>{/* #restrictions .wrapper .items */}
            <div className="items">
                <div className="item">
                    <img src={require('./../assets/static/images/home/restrictions/icon-4.svg').default} alt={require('./../assets/static/images/home/restrictions/icon-1.svg').default} />
                    <h1>Pregnancy and Breastfeeding</h1>
                    <p>Pregnant and breastfeeding women are generally not eligible for blood donation due to several important reasons related to their health and the health of their baby.</p>
                </div>
                <div className="item">
                    <img src={require('./../assets/static/images/home/restrictions/icon-5.svg').default} alt={require('./../assets/static/images/home/restrictions/icon-1.svg').default} />
                    <h1>Hemoglobin Level</h1>
                    <p>Some medications may affect eligibility, so it's essential to disclose any prescription or over-the-counter medications you are taking to the blood bank staff.</p>
                </div>
                <div className="item">
                    <img src={require('./../assets/static/images/home/restrictions/icon-6.svg').default} alt={require('./../assets/static/images/home/restrictions/icon-1.svg').default} />
                    <h1>Infections and Vaccinations</h1>
                    <p>Your hemoglobin level should meet the specified criteria, usually around 12.5 to 13.5 grams per deciliter (g/dL) for men and 12.0 to 12.5 g/dL for women.</p>
                </div>
            </div> {/* #restrictions .wrapper .items */}
        </section> {/* #restrictions .wrapper */}
      </section> {/* #restrictions */}

      <section id="video" onClick={() => videoRef.current.play()}>
        <section className="wrapper">
            <div className="top">
                <div className="left">
                    <video ref={videoRef} src={(require('./../assets/static/images/home/video/video.mp4'))} loop muted />
                </div>
                <div className="right">
                    <h1>Life Saving Platform <br /> for Human <span>Blood</span> Loss</h1>
                    <p>"Every drop of blood donated is a gift of life, a beacon of hope in the darkest hours. When you donate blood, you're not just giving a physical gift; you're offering the gift of life itself.</p>
                </div>
            </div> {/* #video .wrapper .top */}
            <div className="bottom">
                <ul>
                    <li><span className="count">200+</span><span className="content">Patients Received</span></li>
                    <li><span className="count">500+</span><span className="content">Blood Donors</span></li>
                    <li><span className="count">300+</span><span className="content">Localities Covered</span></li>
                </ul>
            </div>  {/* #video .wrapper .bottom */}
        </section> {/* #video .wrapper */}
      </section> {/* #video */}

      <section id="process">
        <section className="wrapper">
            <h1 className="top">Blood donation platform process</h1>
            <h4>We rise by lifting others.</h4>
            <ul>
                <li>
                    <div className="card">
                        <div className="content">
                            <h1>Register as a Donor</h1>
                            <img src={require('./../assets/static/images/home/process/register.svg').default} alt={require('./../assets/static/images/home/process/register.svg').default} />
                        </div>
                    </div>
                    <div className="card middle mb">
                        <div className="content">
                            <img className='logo' src={require('./../assets/static/images/home/logo/logo.svg').default} alt={require('./../assets/static/images/home/logo/logo.svg').default} />
                            <h1>Secure and Confidental</h1>
                            <p>Reputable blood donation organizations use secure systems for managing donor information.Donor information should be stored confidentially and only accessible to authorized personnel.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <h1>Immediate Notification</h1>
                            <img src={require('./../assets/static/images/home/process/notification.svg').default} alt={require('./../assets/static/images/home/process/notification.svg').default} />
                        </div>
                    </div>
                </li>

                <li className='middle'>
                    <div className="card">
                        <div className="content">
                            <h1>Request Blood Easily</h1>
                            <p>People can request without signing in through Purelink.</p>
                            <NavLink to='request'>Request Blood</NavLink>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <h1>Local Donar Alert</h1>
                            <p>Requests go only to registered Donors in the same district.</p>
                            <img src={require('./../assets/static/images/home/process/alert.svg').default} alt={require('./../assets/static/images/home/process/alert.svg').default} />
                        </div>
                    </div>
                </li>

                <li>
                    <div className="card">
                        <div className="content">
                            <h1>Community Impact</h1>
                            <img src={require('./../assets/static/images/home/process/impact.svg').default} alt={require('./../assets/static/images/home/process/impact.svg').default} />
                        </div>
                    </div>
                    <div className="card middle mb">
                        <div className="content">
                            <h1>Chat support system</h1>
                            <img src={require('./../assets/static/images/home/process/support.svg').default} alt={require('./../assets/static/images/home/process/support.svg').default} />
                            <p>Get real-time support through our chat feature.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <h1>Easy to use</h1>
                            <p>Our user friendly platform ensures a smooth experience for all.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section> {/* #process .wrapper */}
      </section> {/* #process */}

      <section id="pannelWay">
        <section className="wrapper">
            <div className="left">
                <h1>Way to Pure<span>Link</span> <br /> Hospital Pannel</h1>
                <p>A hospital panel in a blood donation area becomes an indispensable tool in managing the blood donation process, ensuring safety, clarity, and a positive experience for everyone involved.</p>
                <NavLink to='https://hospital-purelink.in'>Click Here</NavLink>
            </div> {/* #pannelWay .wrapper .left */}
            <div className="right">
                <img src={require('./../assets/static/images/home/doctors/doctors.svg').default} alt={require('./../assets/static/images/home/doctors/doctors.svg').default} />
            </div> {/* #pannelWay .wrapper .right */}
        </section> {/* #pannelWay .wrapper */}
      </section> {/* #pannelWay */}

      <section id="last">
        <section className="wrapper">
            <img src={require('./../assets/static/images/home/logo/logo.svg').default} alt={require('./../assets/static/images/home/logo/logo.svg').default} />
            <h1>A moment of salvation.</h1>
            <h2>"Sometimes the smallest things can save a life."</h2>
            <div className="button">
                <NavLink to='request'>Request Blood</NavLink>
                <NavLink to='donate'>Donate Blood</NavLink>
            </div>
        </section>
      </section>

    </div>
  )
}
