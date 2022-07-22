import React from 'react'
// import {Navbar, Container, Row, Col, Button} from 'react-bootstrap'
// import {Link} from 'react-router-dom'
import phlogo from '../assets/image/phlogo.png'
import lock from '../assets/image/lock.png'
import download from '../assets/image/download.png'
import sponsorlogo1 from '../assets/image/sponsorlogo1.png'
import phone7 from '../assets/image/phone7.png'
import AlexHansinburg from '../assets/image/users/Alex Hansinburg.png'


function Home() {
  return (
    <>
        <body>
            <header>
                <nav>
                    <div className="nav-head">
                        <div className="mrg mrgtop">
                            <span className="ewallet">MyEwallet</span>
                        </div>
                        <div className="mrg mrgtop">
                            <button className="btn-nav"><a className="nav-link" href="login.html">Login</a></button>
                            <button className="btn-nav"><a className="nav-link" href="signUp.html">Sign Up</a></button>
                        </div>
                    </div>
                </nav>
                <div className="head-flex">
                    <div className="head-centered">
                        <div>
                            <h1 className="head-h1">Awesome App For <br/> Saving Time.</h1>
                        </div>
                        <p className="head-p p1">We bring you a mobile app for banking problems that <br/>
                            oftenly wasting much of your times.</p>
                            <div>
                                <button className="head-btn-try"><a className="nav-link" href="signUp.html">Try Free</a></button>
                            </div>
                    </div>
                </div>
            </header>
            <section>
                <div className="mrg">
                    <div>
                        <h1 className="sec1-h1"><span className="last-h1">Why</span> Choose MyEwallet?</h1>
                    </div>
                    <div>
                        <p className="sec1-p">We have some great features from the application and it`s totally free<br/>
                         to use by all users around the world.</p>
                    </div>
                    <div className="sec1-flex">
                        <div className="sec1-pad">
                            <span className="sec1-box-logo">
                                <img src= {phlogo} alt="logo"/>
                            </span>
                            <h3 className="sec1-box-h3">24/7 Support</h3>
                            <p className="sec1-box-p">We have 24/7 contact support so you can contact 
                                us whenever you want and we will respond it.</p>
                        </div>
                        <div className="sec1-box">
                            <span className="sec1-box-logo">
                                <img src={lock} alt="logo"/>
                            </span>
                            <h3 className="sec1-box-h3">Data Privacy</h3>
                            <p className="sec1-box-p">We make sure your data is safe in our database and 
                                we will encrypt any data you submitted to us.</p>
                        </div>
                        <div className="sec1-pad">
                            <span className="sec1-box-logo">
                                <img src={download} alt="logo"/>
                            </span>
                            <h3 className="sec1-box-h3">Easy Download</h3>
                            <p className="sec1-box-p">Zwallet is 100% totally free to use it`s now available on 
                                Google Play Store and App Store.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-bg">
                <div>
                    <div className="marg-spon">
                        <img src={sponsorlogo1} alt="sponsorlogo1"/>
                    </div>
                </div>
            </section>
            <section>
                <div className="mrg newsec-flex">
                    <div className="border-m">
                        <h1>Rp. 390.736.500</h1>
                    </div>
                    <div>
                        <h1 className="newsec-h1"><span className="last-h1">Money</span> has Been Transfered.</h1>
                        <p className="p1 newsec-p">That amount of money has been transfered from all users. We still<br/>
                            counting and going strong!</p>
                    </div>
                </div>
            </section>
            <section className="sec-bg">
                <div className="sec3-flex">
                    <div className="sec3-img">
                        <img src={phone7} alt="phoneimg"/>
                    </div>
                    <div className="sec3-h1">
                        <h1>All The <span className="last-h1">Great</span>
                            Zwallet Features.</h1>
                            <div className="sec3-box">
                                <h3 className="sec3-h3"><span className="last-h1">1. </span> Small Fee</h3>
                                <p className="p1">We only charge 5% of every success transaction done in Zwallet app.</p>
                            </div>
                            <div className="sec3-box">
                                <h3 className="sec3-h3"><span className="last-h1">2. </span> Data Secured</h3>
                                <p className="p1">All your data is secured properly in our system and it`s encrypted.</p>
                            </div>
                            <div className="sec3-box">
                                <h3 className="sec3-h3"><span className="last-h1">3. </span> User Friendly</h3>
                                <p className="p1">Zwallet come up with modern and sleek design and not complicated.</p>
                            </div>
                    </div>
                </div>
            </section>
            <section className="mrg">
                <div>
                    <div>
                        <h1 className="sec1-h1">What Users are <span className="last-h1">Saying.</span></h1>
                        <p className="p1 sec1-p">We have some great features from the application and it`s totally free<br/>
                        to use by all users around the world.</p>
                    </div>
                    <div>
                        <div className="sec1-flex">
                            <div className="sec4-box">
                                <span className="sec1-box-logo">
                                    <img src={AlexHansinburg} alt="profile"/>
                                </span>
                                <h3 className="sec1-box-h3">Alex Hansinburg</h3>
                                <p className="sec1-box-p">Designer</p>
                                <p className="sec1-box-p">“This is the most outstanding app that I`ve ever try in my live,
                                    this app is such an amazing masterpiece and it`s suitable for you who is bussy with their
                                    bussiness and must transfer money to another person aut there. Just try this app and see the power!”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-bg">
                <div className="mrg">
                    <div>
                        <h1 className="p-color footer-h1">Zwallet</h1>
                        <p className="p1 p-color">Simplify financial needs and saving <br/>
                            much time in banking needs with <br/>
                            one single app.</p>
                    </div>
                    <div></div>
                    <div className="footer-flex">
                        <p className="footer-p">2020 Ewallet. All right reserved.</p>
                        <div className="ft-flex">
                            <p className="footer-p">+62 5637 8882 9901</p>
                            <p className="footer-p">contact@zwallet.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        </body>        
    </>
  )
}

export default Home