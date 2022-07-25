import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col, Button} from 'react-bootstrap'
import { Mail } from "react-feather";

import authphon from '../assets/image/authphon.png'

function Forgetpwd() {
    return(
        <>
        <Container className='mw-100 min-vh-100'>
            <Row>
                <Col md ={7} className='auth-r-bg'>
                    <section className="auth-pad-cov auth-cov d-md-block d-none">
                        <div className="auth-ewallet">
                            <span>MyEwallet</span>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <div>
                                <img src={authphon} alt="phoneimg"/>
                            </div>
                            <div>
                                <h1 className=" auth-hcover">App that Covering Banking Needs.</h1>
                                <p className="auth-pcover">MyEwallet is an application that focussing in banking needs for all users
                                    in the world. Always updated and always following world trends.
                                    5000+ users registered in MyEwallet everyday with worldwide
                                    users coverage.</p>
                            </div>
                        </div>
                    </section>
                </Col>
                <Col md ={5}>
                    <section className="auth-pad d-flex flex-column gap-5">
                        <div>
                        <div className="auth-ewallet d-flex flex-column align-items-center mb-3 d-md-none">
                            <span className='auth-res auth-alltext'>MyEwallet</span>
                        </div>
                        <h1 className="auth-h1">Did You Forgot Your Password?
                            Don`t Worry, You Can Reset Your
                            Password In a Minutes.
                        </h1>
                        <div className="pt-5">
                        <p className="auth-ptext">To reset your password,
                            you must type your e-mail and we will send a link
                                to your email and you will be directed
                                to the reset password screens.
                        </p>    
                        </div>
                        </div>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text auth-icon-wr">
                                <Mail/>
                            </span>
                            <input type="email" className="form-control auth-input" placeholder="Enter your e-mail"/>
                        </div>
                        <div className="d-grid">
                        <Link to="/createnewpwd" className="auth-btn"><Button className='w-100'>Confirm</Button></Link>
                        </div>
                    </section>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Forgetpwd