import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col, Button} from 'react-bootstrap'

import SideAuth from '../component/SideAuth';

function CreatePin() {
    return(
        <>
            <Container className='mw-100 min-vh-100'>
                <Row>
                    <Col md ={7} className='auth-r-bg'>
                        <SideAuth />
                    </Col>
                    <Col md ={5}>
                    <section className="auth-pad d-flex flex-column gap-5">
                        <div>
                            <div className="auth-ewallet d-flex flex-column align-items-center mb-3 d-md-none">
                                <span className='auth-res auth-alltext'>MyEwallet</span>
                            </div>
                            <h1 className="auth-h1">Secure Your Account, Your Wallet,
                                and Your Data With 6 Digits PIN
                                That You Created Yourself.</h1>
                            <div className="pt-5">
                            <p className="auth-ptext">Create 6 digits pin to secure all your money and your data in Zwallet app.
                                Keep it secret and don`t tell anyone about your MyEwallet account password and the PIN.</p>    
                            </div>
                        </div>
                        <div className="d-flex flex-row gap-md-5 mw-100">
                            <div className="d-flex flex-row gap-md-4 mw-100">
                                <div className="auth-pin">
                                    <input maxlength="1" type="text" className="w-100"/>
                                </div>
                                <div className="auth-pin">
                                    <input maxlength="1" type="text" className="w-100"/>
                                </div>
                                <div className="auth-pin">
                                    <input maxlength="1" type="text" className="w-100"/>
                                </div>
                                <div className="auth-pin">
                                    <input maxlength="1" type="text" className="w-100"/>
                                </div>
                                <div className="auth-pin">
                                    <input maxlength="1" type="text" className="w-100"/>
                                </div>
                                <div className="auth-pin">
                                    <input maxlength="1" type="text" className="w-100"/>
                                </div>
                            </div>
                        </div>
                        <div className="d-grid">
                        <Link to="/pinsuccess" className="auth-btn"><Button className='w-100'>Confirm</Button></Link>
                        </div>
                    </section>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default CreatePin