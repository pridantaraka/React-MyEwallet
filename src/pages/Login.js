import React from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom';
import {Container, Row, Col, Button, Alert} from 'react-bootstrap'
import { Mail, Lock } from "react-feather";

import SideAuth from '../component/SideAuth';

function Login() {
    const location = useLocation();
    const navigate = useNavigate();

    const onLogin = () => {
        localStorage.setItem("auth", "randomToken");
        navigate("/profile");
    };


    return(
        <>
            <Container className='mw-100 min-vh-100'>
                <Row>
                    <Col md={7} className="auth-r-bg">
                        <SideAuth />
                    </Col>
                    <Col md={5}>
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
                                <Mail />
                            </span>
                            <input type="email" className="form-control auth-input" placeholder="Enter your e-mail"/>
                            </div>
                            <div className="input-group flex-nowrap">
                            <span className="input-group-text auth-icon-wr">
                                <i data-feather="lock"></i>
                                <Lock />
                            </span>
                            <input type="password" className="form-control auth-input" placeholder="Enter your password"/>
                            <span className="input-group-text auth-icon-wr">
                            </span>
                            </div>
                            <div className="text-end">
                            <Link to="/forgetpwd">Forgot Password?</Link>
                            </div>
                            <div className="d-grid">
                            {location.state?.errorMsg && (
                            <Alert variant="danger">{location.state.errorMsg}</Alert>
                            )}
                            <Button className='w-100 auth-btn' onClick={onLogin}>Login</Button>
                            </div>
                            <div className="text-center">
                            <span>Don`t have an account? Let`s <Link to="/signup">SignUp</Link></span>
                            </div>
                    </section>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login