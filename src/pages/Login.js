import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'

import authphon from '../assets/image/authphon.png'

function Login() {
    return(
        <>
            <Container className='mw-100 min-vh-100'>
                <Row className=''>
                    <Col md={7} className="auth-r-bg">
                    <section class="d-flex flex-column auth-pad-cov auth-cov d-md-block d-none">
                        <div class="auth-ewallet">
                            <span>MyEwallet</span>
                        </div>
                        <div class="d-flex flex-column align-items-center">
                        <div>
                            <img src={authphon} alt="phoneimg"/>
                        </div>
                        <div>
                            <h1 class="auth-hcover">App that Covering Banking Needs.</h1>
                            <p class="auth-pcover">Zwallet is an application that focussing in banking needs for all users
                                in the world. Always updated and always following world trends.
                                5000+ users registered in Zwallet everyday with worldwide
                                users coverage.</p>
                        </div>
                        </div>
                    </section>
                    </Col>
                    <Col md={5} className="">
                    <section class="auth-pad d-flex flex-column gap-5"> 
                        <div>
                            <h1 class="auth-h1">Start Accessing Banking Needs
                                With All Devices and All Platforms
                                With 30.000+ Users</h1>
                            <div class="pt-5">
                            <p class="auth-ptext">Transfering money is eassier than ever, you can access
                                Zwallet wherever you are. Desktop, laptop, mobile
                                phone? we cover all of that for you!</p>    
                            </div>
                        </div>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text auth-icon-wr">
                                <i data-feather="mail"></i>
                            </span>
                            <input type="email" class="form-control auth-input" placeholder="Enter your e-mail"/>
                            </div>
                            <div class="input-group flex-nowrap">
                            <span class="input-group-text auth-icon-wr">
                                <i data-feather="lock"></i>
                            </span>
                            <input type="password" class="form-control auth-input" placeholder="Enter your password"/>
                            <span class="input-group-text auth-icon-wr">
                                <i data-feather="eye-off"></i>
                            </span>
                            </div>
                            <div class="text-end">
                            <a href="resetpwd.html">Forgot Password?</a>
                            </div>
                            <div class="d-grid">
                            <Button class="btn btn-primary auth-btn"><a class="nav-link" href="homepage.html">Login</a></Button>
                            </div>
                            <div class="text-center">
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