import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'

import authphon from '../assets/image/authphon.png'

function Login() {
    return(
        <>
            <Container className='mw-100 min-vh-100'>
                <Row>
                    <Col md={7} className="auth-r-bg">
                    <section className="auth-pad-cov auth-cov d-md-block d-none">
                        <div className="auth-ewallet">
                            <span>MyEwallet</span>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                        <div>
                            <img src={authphon} alt="phoneimg"/>
                        </div>
                        <div>
                            <h1 className="auth-hcover">App that Covering Banking Needs.</h1>
                            <p className="auth-pcover">MyEwallet is an application that focussing in banking needs for all users
                                in the world. Always updated and always following world trends.
                                5000+ users registered in MyEwallet everyday with worldwide
                                users coverage.</p>
                        </div>
                        </div>
                    </section>
                    </Col>
                    <Col md={5} className="">
                    <section className="auth-pad d-flex flex-column gap-5"> 
                        <div>
                            <div class="auth-ewallet d-flex flex-column align-items-center mb-3 d-md-none">
                                <span className='auth-res auth-alltext'>MyEwallet</span>
                            </div>
                            <h1 className="auth-h1">Start Accessing Banking Needs
                                With All Devices and All Platforms
                                With 30.000+ Users</h1>
                            <div className="pt-5">
                            <p className="auth-ptext">Transfering money is eassier than ever, you can access
                            MyEwallet wherever you are. Desktop, laptop, mobile
                                phone? we cover all of that for you!</p>    
                            </div>
                        </div>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text auth-icon-wr">
                                <i data-feather="mail"></i>
                            </span>
                            <input type="email" className="form-control auth-input" placeholder="Enter your e-mail"/>
                            </div>
                            <div className="input-group flex-nowrap">
                            <span className="input-group-text auth-icon-wr">
                                <i data-feather="lock"></i>
                            </span>
                            <input type="password" className="form-control auth-input" placeholder="Enter your password"/>
                            <span className="input-group-text auth-icon-wr">
                                <i data-feather="eye-off"></i>
                            </span>
                            </div>
                            <div className="text-end">
                            <a href="resetpwd.html">Forgot Password?</a>
                            </div>
                            <div className="d-grid">
                            <Button className="btn btn-primary auth-btn"><a className="nav-link" href="homepage.html">Login</a></Button>
                            </div>
                            <div className="text-center">
                            <span>Don`t have an account? Let`s <a href="signUp.html">Sign Up</a></span>
                            </div>
                    </section>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login