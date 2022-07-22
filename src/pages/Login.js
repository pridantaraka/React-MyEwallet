import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'

import authphon from '../assets/image/authphon.png'

function Login() {
    return(
        <Container>
            <Row>
            <body className="auth-alltext">
                <div className="row min-vh-100 mw-100">
                   <Col md={7} className="auth-r-bg">
                        <div className="d-flex flex-column auth-pad-cov auth-cov d-md-inline d-none">
                            <div className="auth-ewallet">
                                <span>Ewallet</span>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <div>
                                    <img src={authphon} alt="phoneimg"/>
                                </div>
                                <div>
                                    <h1 className=" auth-hcover">App that Covering Banking Needs.</h1>
                                    <p className="auth-pcover">Zwallet is an application that focussing in banking needs for all users
                                        in the world. Always updated and always following world trends.
                                        5000+ users registered in Zwallet everyday with worldwide
                                        users coverage.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={5} sm={12}>
                    <div className="auth-pad d-flex flex-column gap-5">
                        <div>
                            <h1 className="auth-h1">Start Accessing Banking Needs
                                With All Devices and All Platforms
                                With 30.000+ Users</h1>
                            <div className="pt-5">
                            <p className="auth-ptext">Transfering money is eassier than ever, 
                            you can access Zwallet wherever you are. Desktop, laptop, 
                            mobile phone? we cover all of that for you!</p>    
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
                    </div>
                    </Col>
                </div>
                <script>feather.replace()</script>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>
            </body>
            </Row>
        </Container>
    )
}

export default Login