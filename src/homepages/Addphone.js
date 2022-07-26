import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col, Nav} from 'react-bootstrap'
import { Bell, Grid, User, Plus, ArrowUp, LogOut } from "react-feather";

import RobertChandler from '../assets/image/users/RobertChandler.png'

function Addphone() {
    return(
        <>
        <Container className='mw-100 min-vh-100 bg-homepg'>
        <Row>
            <header className="bg-white h-box h-boxsh mw-100">
                    <Nav className="d-flex flex-row justify-content-between">
                            <div className="h-zwallet align-self-center ps-5 d-md-block d-none">
                                <span>MyEwallet</span>
                            </div>
                            <div className="d-flex flex-row p-4 pe-md-5">
                                <div className="align-self-center px-2">
                                <img src={RobertChandler} alt="img-profile"/>
                                </div>
                                <div className="d-flex flex-column align-self-center px-2">
                                    <p className="h-user mb-0">Robert Chandler</p>
                                    <p className="h-phone mb-0">+62 8139 3877 7946</p>
                                </div>
                                    <div className="sec-menu-p d-flex align-self-center">
                                        <Bell />
                                    </div>
                            </div>
                    </Nav>
                </header>
                <main>
                    <Container>
                        <Row>
                            <Col md={12} className="d-flex flex-row justify-content-center gap-2 mx-0 px-0 mt-4 mb-4 w-100">
                            <Col md={3}>
                            <section className="bg-white main-box p-md-5 d-md-block d-none h-100">
                                <div className="d-flex flex-column h-100 justify-content-between">
                                <div className="d-flex flex-column justify-content-end gap-5">
                                <Link to='/homepage' className="nav-link ms-3 my-1">
                                        <div className="d-inline-flex flex-row sec-menu-p">
                                            <div className="align-self-center px-2">
                                                <i data-feather="grid"></i>
                                                <Grid />
                                            </div>
                                            <div><p className="mb-0">Dashboard</p></div>
                                        </div>
                                    </Link>
                                    <Link to='/Searchpage' className="nav-link ms-3 my-1">
                                            <div className="d-inline-flex flex-row sec-menu-p">
                                                <div className="align-self-center px-2">
                                                    <ArrowUp />
                                                </div>
                                                <div><p className="mb-0">Transfer</p></div>
                                            </div>
                                        </Link>
                                    <Link to='/Topup' className="nav-link ms-3 my-1">
                                        <div className="d-inline-flex flex-row sec-menu-p">
                                            <div className="align-self-center px-2">
                                                <Plus />
                                            </div>
                                            <div><p className="mb-0">TopUp</p></div>
                                        </div>
                                    </Link>
                                    <Link to='/profilepage' className="nav-link ms-3 my-1">
                                        <div className="d-inline-flex flex-row sec-menu-p">
                                            <div className="align-self-center px-2">
                                                <User />
                                            </div>
                                            <div>Profile</div>
                                        </div>
                                    </Link>
                                </div>
                                <Link to='/Home' className="nav-link ms-3 my-1">
                                    <div className="d-flex">
                                        <div className="d-inline-flex sec-menu-p">
                                            <div className="align-self-center px-2">
                                                <LogOut />
                                            </div>
                                            <div><p className="mb-0">Logout</p></div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            </section>
                            </Col>
                            <Col md={9}>
                            <section class="bg-white main-box p-5 h-100">
                                <div class="d-flex flex-column gap-3 justify-content-center">
                                    <h3 class="trans-his py-2">Add Phone Number</h3>
                                    <p class="p-confirm">Add at least one phone number for the transfer<br/>
                                        ID so you can start transfering your money<br/>
                                        to another user.</p>
                                    <div class="d-inline-flex flex-column justify-content-center w-md-50 align-self-center py-5 gap-5 align-content-center">
                                        <div class="input-group flex-nowrap">
                                            <span class="input-group-text reset-icon-wrp">
                                                <i data-feather="phone"></i>
                                                <p class="mb-0 ps-2">+62</p>
                                            </span>
                                            <input type="tel" class="form-control reset-input w-md-50" placeholder="Enter your phone number"/>
                                        </div>
                                        <div class="align-self-center">
                                            <Link to='/managephone' nav-link ms-3 my-1><button class="reset-btn-chnge">Add Phone Number</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            </Col>
                            </Col>
                        </Row>
                    </Container>
                </main>
                <footer className='f-bg-pg'>
                <div className="d-flex flex-row justify-content-between p-3">
                    <p className="ft-p mb-0">2020 Zwallet. All right reserved.</p>
                    <div className="d-flex flex-md-row flex-column gap-4">
                        <div>
                            <p className="ft-p mb-0">+62 5637 8882 9901</p>
                        </div>
                        <div>
                            <p className="ft-p mb-0">contact@zwallet.com</p>
                        </div>
                    </div>
                </div>
            </footer>
            </Row>
        </Container>
        </>
    )
}


export default Addphone