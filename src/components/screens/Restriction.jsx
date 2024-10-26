import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Restriction.css';
import scrollReveal from 'scrollreveal';
import MainNav from '../includes/MainNav';

export default function Restriction() {
    const location = useLocation();

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
        <Helmet>
            <title>pureLink | Restrictions</title>
        </Helmet>
        
        <section className="age height" id="age">
            <div className="age-content slide-left">
                <h2>Age And <span>Previous Donations</span></h2>
                <p>
                    Blood donation is a generous act that can save lives. However, to ensure the safety of both donors and recipients, certain eligibility criteria must be met. One of these criteria is age. Individuals typically need to be between 18 and 60 years old to donate blood. The minimum age might vary in some states and blood banks
                </p>
                <br/>
                <p>Another important criterion is the interval between successive blood donations. This interval can vary but is typically around 56 days for whole blood donations. This waiting period helps ensure that donors have enough time to replenish their blood supply before donating again</p>
                <br/>
                <br/>
                <NavLink to='../signup' className="btn slide-right">Donate Blood</NavLink>
            </div>

            <div className="profession-container">
                <div className="profession-box">
                    <div className="profession">
                        <h3>Save Life</h3>
                    </div>
                    <div className="profession">
                        <h3>Give Blood</h3>
                    </div>
                    <div className="profession">
                        <h3>Be a life-saver</h3>
                    </div>
                    <div className="profession">
                        <h3>Every drop counts</h3>
                    </div>

                    <div className="circle"></div>
                </div>

                <div className="overlay"></div>
            </div>

            <div className="age-img">
                <img className='slide-down' src={require("./../assets/main-page-images/restrictions/doctor-removebg-preview.png")} alt="" />
            </div>
        </section>

        <section className="Weight" id="weight">
            <div className="Weight-img slide-left">
                <img src={require("./../assets/main-page-images/restrictions/R-removebg-preview.png")} alt="" />
            </div>

            <div className="Weight-content">
                <h2 className="heading slide-down">Weight And <span>Health</span></h2>
                <p className="slide-left">
                    Weight is an important factor in determining eligibility for blood donation. You should weigh at least 50 kg to be eligible. This requirement ensures that the donation process is safe for donors and that they can donate a sufficient amount of blood.
                </p>
                <p className="slide-left">In addition to meeting the weight requirement, donors should be in good general health. This means not suffering from any acute or chronic medical conditions, infections, or diseases at the time of donation. A healthy donor is more likely to make a successful donation and recover quickly afterwards
                </p>
                <NavLink to='../signup' className="btn slide-right">Donate Blood</NavLink>
            </div>
        </section>

        <section id="infections">
            <section className="Weight">
        
                <div className="Weight-content">
                    <h2 className="heading slide-down"> <span>Infections</span> and Vaccinations</h2>
                <p className="slide-left">Ensuring the safety of blood recipients is our top priority. Individuals with blood-borne infections, such as HIV, hepatitis B or C, are generally not allowed to donate blood. This is to prevent the transmission of these infections to the blood recipient</p>
                    <p className="slide-left">Vaccinations are an important part of maintaining public health. However, depending on the vaccine, there might be a waiting period before donating blood. For example, you may need to wait for a specific duration after receiving certain vaccines, such as COVID-19 vaccines. This is to ensure that your immune system has fully responded to the vaccine and that it is safe for you to donate blood.</p>
                    <NavLink to='../signup' className="btn slide-right">Donate Blood</NavLink>
                </div>
                <div className="Weight-img">
                    <img src={require("./../assets/main-page-images/restrictions/vaccination.png")} alt="" />
                </div>
            </section>
        </section>

        <section id="pregnancy">
            <section className="Weight">
                <div className="Weight-content">
                    <h2 className="heading slide-down">Pregnancy and <span>Breastfeeding</span></h2>
                    <p className="slide-left">In many countries, individuals who are pregnant or currently breastfeeding are often restricted from donating blood. This precautionary measure is implemented to ensure the well-being of both the donor and the potential recipient. Pregnancy and breastfeeding can lead to changes in a woman's blood composition, such as variations in iron levels and certain antibodies, which may affect the quality of donated blood. Additionally, the process of blood donation itself can cause temporary changes in blood volume and iron levels, potentially impacting the health of pregnant or breastfeeding individuals.</p>
                    <p className="slide-left">To safeguard the health of donors and recipients alike, these restrictions are typically in place until an individual has completed their pregnancy and breastfeeding period, and their blood parameters have returned to a stable and safe state. It's essential for potential blood donors to adhere to these guidelines to maintain the safety and integrity of the blood donation process.</p>
                    <NavLink to='../signup' className="btn slide-right">Donate Blood</NavLink>
                </div>
                <div className="Weight-img">
                    <img src={require("./../assets/main-page-images/restrictions/pregnancy.png")} alt="" />
                </div>
            </section>
        </section>

        <section id="medications">
            <section className="Weight">
                <div className="Weight-content">
                    <h2 className="heading slide-down"><span>Medic</span>ations</h2>
                    <p className="slide-left">Certain medications may restrict individuals from donating blood due to potential adverse effects on the recipient or interference with the blood donation process. These restrictions aim to ensure the safety of both the donor and the recipient. Medications that may lead to temporary deferral include certain antibiotics, blood thinners, and immunosuppressive drugs. </p>
                    <p className="slide-left"> Donors are typically advised to disclose any medications they are taking during the pre-donation screening process. It's essential for individuals on medication to consult with healthcare professionals or blood donation centers to determine eligibility and potential deferral periods. Adhering to these guidelines helps maintain the integrity of the donated blood and ensures the well-being of both donors and recipients.</p>
                    <NavLink to='../signup' className="btn slide-right">Donate Blood</NavLink>
                </div>
                <div className="Weight-img">
                    <img src={require("./../assets/main-page-images/restrictions/medicine.png")} alt="" />
                </div>
            </section>
        </section>

        <section id="hemoglobin">
            <section className="Weight">
                <div className="Weight-content">
                    <h2 className="heading slide-down">Hemoglobin <span>Level</span></h2>
                    <p className="slide-left">Hemoglobin is a crucial component in our blood responsible for transporting oxygen from the lungs to the rest of the body. When considering blood donation, hemoglobin levels play a vital role in determining eligibility. Typically, individuals must meet a minimum hemoglobin threshold to ensure their well-being and the effectiveness of the donated blood. This restriction is in place to prevent donors from experiencing fatigue or other health complications due to lower-than-ideal hemoglobin levels.</p>
                    <p className="slide-left">Adequate hemoglobin levels also ensure that the donated blood carries sufficient oxygen to meet the needs of the recipient. Donors with low hemoglobin levels might be temporarily deferred from donating until their levels improve, safeguarding both the donor's health and the quality of the donated blood.</p>
                    <NavLink to='../signup' className="btn slide-right">Donate Blood</NavLink>
                </div>
                <div className="Weight-img">
                    <img src={require("./../assets/main-page-images/restrictions/hemoglobin-pic.png")} alt="" />
                </div>
            </section>
        </section>
        
        <div className="social" id='footer'>
            <footer>
                <section className="wrapper">
                    <section className="top">
                        <div className="item large">
                            <h1><a href=""><img src={require("./../assets/main-page-images/logo_official.png")} alt=""/></a></h1>
                            <h3 className='slide-left'>Donate Blood To Be A Hero</h3>
                            <ul className='slide-down'>
                                <li><NavLink to='../want-blood' className="button">Want Blood</NavLink></li>
                                <li><NavLink to='../signup' className="button">Donate Blood</NavLink></li>
                            </ul>
                            </div>
                        <div className="item slide-right">
                            <h3>On This Page</h3>
                            <ul>
                                <li><NavLink to='../' className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
                                <li><NavLink to='../about' className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
                                <li><NavLink to='../restrictions' className={({isActive}) => isActive ? "active" : ""}>Restrictions</NavLink></li>
                                <li><NavLink to='../terms&conditions' className={({isActive}) => isActive ? "active" : ""}>Terms&Condition</NavLink></li>
                            </ul>
                        </div>
                        <div className="item slide-right">
                            <h3>About Us</h3>
                            <ul>
                                <li><NavLink to='../about'>Our Mission</NavLink></li>
                                <li><NavLink to='../about'>How we work</NavLink></li>
                                <li><NavLink to='../about'>Aim</NavLink></li>
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
                                <li><a href=""><img src={require("../assets/images/dash-profile/instagram.png")} alt="Instagram"/></a></li>
                                <li><a href=""><img src={require("../assets/images/dash-profile/whatsapp.png")} alt="Whatsapp"/></a></li>
                                <li><a href=""><img src={require("../assets/images/dash-profile/telegram.png")} alt="telegram"/></a></li>
                                <li><a href=""><img src={require("../assets/images/dash-profile/discord.png")} alt="discord"/></a></li>
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
  )}
