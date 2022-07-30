import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col, Form} from 'react-bootstrap'
import { useDispatch } from "react-redux";

import {
    customValue
  } from "../redux/reducers/CounterPhone";

import SideMenu from '../component/SideMenu'
import Header from '../component/Header'
import Footer from '../component/Footer'


function AddPhone() {
    const dispatch = useDispatch();

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
                            <section className="bg-white box-side main-box p-5 h-100">
                                <div className="d-flex flex-column gap-3 justify-content-center">
                                    <h3 className="trans-his py-2">Add Phone Number</h3>
                                    <p className="p-confirm">Add at least one phone number for the transfer<br/>
                                        ID so you can start transfering your money<br/>
                                        to another user.</p>
                                    <div className="d-inline-flex flex-column justify-content-center w-md-50 align-self-center py-5 gap-5 align-content-center">
                                        <div className="input-group flex-nowrap">
                                            <span className="input-group-text reset-icon-wrp">
                                                <i data-feather="phone"></i>
                                                <p className="mb-0 ps-2">+62</p>
                                            </span>
                                            {/* <input type="tel" className="form-control reset-input w-md-50" placeholder="Enter your phone number"/> */}
                                            <Form>
                                                <Form.Control
                                                type="tel"
                                                className=''
                                                onChange={(e) => {
                                                dispatch(customValue(e.target.value));
                                                }}
                                                />
                                            </Form>
                                        </div>
                                        <div className="align-self-center">
                                            <Link to='/managephone' nav-link ms-3 my-1><button className="reset-btn-chnge">Add Phone Number</button></Link>
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


export default AddPhone