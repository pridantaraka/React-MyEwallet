import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import authphon from '../assets/image/authphon.png'
import authsuc from '../assets/image/success.png'

function Pinsuccess() {
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
                    <div class="auth-ewallet d-flex flex-column align-items-center mb-3 d-md-none">
                        <span className='auth-res auth-alltext'>MyEwallet</span>
                    </div>
                    <div class="d-flex justify-content-center justify-content-md-start">
                        <img src={authsuc} alt="logosuccess"/>
                    </div>
                    <div>
                        <h1 class="auth-h1">Your PIN Was Successfully Created</h1>
                        <div class="pt-5">
                        <p class="auth-ptext">Your PIN was successfully created and you 
                            can now access all the features in MyEwallet. Login to your 
                            new account and start exploring!</p>    
                        </div>
                    </div>
                    <div class="d-grid">
                        <button class="btn btn-primary p-2 auth-btn" onclick=""><a class="nav-link" href="../homepage.html">Login Now</a></button>
                    </div>
                </section>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Pinsuccess