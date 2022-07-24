import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import authphon from '../assets/image/authphon.png'

function CreateNewpwd() {
    return(
        <>
        <Container className='mw-100 min-vh-100'>
            <Row>
                <Col md ={7} className='auth-r-bg'>
                    <section class="auth-pad-cov auth-cov d-md-block d-none">
                        <div class="auth-ewallet">
                            <span>MyEwallet</span>
                        </div>
                        <div class="d-flex flex-column align-items-center">
                            <div>
                                <img src={authphon} alt="phoneimg"/>
                            </div>
                            <div>
                                <h1 class=" auth-hcover">App that Covering Banking Needs.</h1>
                                <p class="auth-pcover">MyEwallet is an application that focussing in banking needs for all users
                                    in the world. Always updated and always following world trends.
                                    5000+ users registered in MyEwallet everyday with worldwide
                                    users coverage.</p>
                            </div>
                        </div>
                    </section>
                </Col>
                <Col md ={5}>
                <section class="auth-pad d-flex flex-column gap-5">
                        <div>
                            <div class="auth-ewallet d-flex flex-column align-items-center mb-3 d-md-none">
                                <span className='auth-res auth-alltext'>MyEwallet</span>
                            </div>
                            <h1 class="auth-h1">Did You Forgot Your Password?
                                Don`t Worry, You Can Reset Your
                                Password In a Minutes.</h1>
                            <div class="pt-5">
                            <p class="auth-ptext">To reset your password,
                                you must type your e-mail and we will send a link
                                to your email and you will be directed
                                to the reset password screens.</p>    
                            </div>
                        </div>
                        <div class="input-group flex-nowrap">
                        <span class="input-group-text auth-icon-wr">
                            <i data-feather="lock"></i>
                        </span>
                        <input type="password" class="form-control auth-input" placeholder="Create new password"/>
                        <span class="input-group-text auth-icon-wr">
                            <i data-feather="eye-off"></i>
                        </span>
                        </div>
                        <div class="input-group flex-nowrap">
                        <span class="input-group-text auth-icon-wr">
                            <i data-feather="lock"></i>
                        </span>
                        <input type="password" class="form-control auth-input" placeholder="Create new password"/>
                        <span class="input-group-text auth-icon-wr">
                        <i data-feather="eye-off"></i>
                        </span>
                        </div>
                        <div class="d-grid">
                        <button class="btn btn-primary p-2 auth-btn" onclick=""><a class="nav-link" href="login.html">Confirm</a></button>
                    </div>
                </section>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default CreateNewpwd