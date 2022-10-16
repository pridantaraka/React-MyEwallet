import React from 'react'
// import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import { Lock } from "react-feather";
import DropdownMenu from '../component/DropdownMenu';
import Header from '../component/Header';
import SideMenu from '../component/SideMenu';
import Footer from '../component/Footer';


function ChangePwd() {
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
                            <DropdownMenu />
                            <section className="bg-white main-box box-side p-5 mw-100">
                                <div className="d-flex flex-column gap-3">
                                    <h3 className="trans-his py-2">Change Password</h3>
                                    <p className="p-confirm">You must enter your current password and then<br/>
                                        type your new password twice.</p>
                                    <div className="d-inline-flex flex-column justify-content-center w-md-50 align-self-center py-5 gap-5 align-content-center">
                                        <div className="input-group flex-nowrap w-100">
                                            <span className="input-group-text reset-icon-wrp">
                                                <Lock />
                                            </span>
                                            <input type="password" className="form-control reset-input" placeholder="Current password"/>
                                            <span className="input-group-text reset-icon-wrp">
                                            <i data-feather="eye-off"></i>
                                            </span>
                                        </div>
                                        <div className="input-group flex-nowrap ">
                                            <span className="input-group-text reset-icon-wrp">
                                                <Lock />
                                            </span>
                                            <input type="password" className="form-control reset-input" placeholder="New password"/>
                                            <span className="input-group-text reset-icon-wrp">
                                            <i data-feather="eye-off"></i>
                                            </span>
                                        </div>
                                        <div className="input-group flex-nowrap ">
                                            <span className="input-group-text reset-icon-wrp">
                                                <Lock />
                                            </span>
                                            <input type="password" className="form-control reset-input" placeholder="Repeat new password"/>
                                            <span className="input-group-text reset-icon-wrp">
                                            <i data-feather="eye-off"></i>
                                            </span>
                                        </div>
                                        <div className="align-self-center">
                                            <button className="reset-btn-chnge">Change Password</button>
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


export default ChangePwd