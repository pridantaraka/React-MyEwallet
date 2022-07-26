import React from 'react'
// import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import { Lock } from "react-feather";
import Header from '../component/Header';
import SideMenu from '../component/SideMenu';
import Footer from '../component/Footer';

// import RobertChandler from '../assets/image/users/RobertChandler.png'

function StatusSuccess() {
    return(
        <>
        <Container className='mw-100 min-vh-100 bg-homepg'>
        <Row>
            <Header />
                <main>
                    <Container>
                        <Row>
                            <Col md={12} className="d-flex flex-row justify-content-center gap-2 mx-0 px-0 mt-4 mb-4 w-100">
                            <Col md={3}>
                                <SideMenu />
                            </Col>
                            <Col md={9}>
                            <section class="bg-white box-side main-box p-5 mw-100">
                                <div class="d-flex flex-column gap-3">
                                    <h3 class="trans-his py-2">Change Password</h3>
                                    <p class="p-confirm">You must enter your current password and then<br/>
                                        type your new password twice.</p>
                                    <div class="d-inline-flex flex-column justify-content-center w-md-50 align-self-center py-5 gap-5 align-content-center">
                                        <div class="input-group flex-nowrap w-100">
                                            <span class="input-group-text reset-icon-wrp">
                                                <Lock />
                                            </span>
                                            <input type="password" class="form-control reset-input" placeholder="Current password"/>
                                            <span class="input-group-text reset-icon-wrp">
                                            <i data-feather="eye-off"></i>
                                            </span>
                                        </div>
                                        <div class="input-group flex-nowrap ">
                                            <span class="input-group-text reset-icon-wrp">
                                                <Lock />
                                            </span>
                                            <input type="password" class="form-control reset-input" placeholder="New password"/>
                                            <span class="input-group-text reset-icon-wrp">
                                            <i data-feather="eye-off"></i>
                                            </span>
                                        </div>
                                        <div class="input-group flex-nowrap ">
                                            <span class="input-group-text reset-icon-wrp">
                                                <Lock />
                                            </span>
                                            <input type="password" class="form-control reset-input" placeholder="Repeat new password"/>
                                            <span class="input-group-text reset-icon-wrp">
                                            <i data-feather="eye-off"></i>
                                            </span>
                                        </div>
                                        <div class="align-self-center">
                                            <button class="reset-btn-chnge">Change Password</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            </Col>
                            </Col>
                        </Row>
                    </Container>
                </main>
                <Footer />
            </Row>
        </Container>
        </>
    )
}


export default StatusSuccess