import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col, Button} from 'react-bootstrap'
import { Mail, Lock, User } from "react-feather";

import SideAuth from '../component/SideAuth';

function Signup() {
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
                        <div class="auth-ewallet d-flex flex-column align-items-center mb-3 d-md-none">
                            <span className='auth-res auth-alltext'>MyEwallet</span>
                        </div>
                        <h1 className="auth-h1">Start Accessing Banking Needs
                            With All Devices and All Platforms
                            With 30.000+ Users</h1>
                        <div className="pt-5">
                        <p className="auth-ptext">Transfering money is eassier than ever, you can access 
                        MyEwallet wherever you are. Desktop, laptop, mobile phone? 
                        we cover all of that for you!</p>    
                        </div>
                    </div>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text auth-icon-wr">
                            <User />
                        </span>
                        <input type="email" className="form-control auth-input" placeholder="Enter your username"/>
                    </div>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text auth-icon-wr">
                            <Mail />
                        </span>
                        <input type="email" className="form-control auth-input" placeholder="Enter your e-mail"/>
                    </div>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text auth-icon-wr">
                            <Lock />
                        </span>
                        <input type="password" className="form-control auth-input" placeholder="Enter your password"/>
                        <span className="input-group-text auth-icon-wr">
                        </span>
                    </div>
                    <div className="d-grid">
                    <Link to="/createpin" className="auth-btn "><Button className='w-100'>Sign Up</Button></Link>
                    </div>
                    <div className="text-center">
                        <span>Already have an account? Let`s <Link to="/login">Login</Link></span>
                    </div>
                </section>
                </Col>
            </Row>
        </Container>
    </>
    )
}

export default Signup