import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col, Nav} from 'react-bootstrap'
import { Bell, Grid, User, Plus, ArrowUp, LogOut, ArrowRight } from "react-feather";

import RobertChandler from '../assets/image/users/RobertChandler.png'

function Profilepage() {
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
                                    <Link to='/searchpage' className="nav-link ms-3 my-1">
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
                            <section class="bg-white main-box p-5">
                                <div class="d-flex flex-column gap-3">
                                    <div class="d-inline-flex flex-column justify-content-center p-4 align-content-center">
                                        <div class="d-flex align-self-center">
                                        <img src={RobertChandler} alt="profileimg"/>
                                    </div>
                                    <div class="d-inline-flex flex-column align-self-center px-2">
                                        <Link to='/personalinfo' className='nav-link ms-3 my-1 text-hover p-confirm'>
                                            <p class="p-user ms-0 ps-0 mb-0 p-2">Edit</p>
                                        </Link>
                                    </div>
                                    <div class="h4 align-self-center ">Robert Chandler</div>
                                    <p class="p-user align-self-center">+62 813-9387-7946</p>
                                    </div>
                                    <Link to='/personalinfo' className='nav-link ms-3 my-1 text-hover p-confirm d-flex justify-content-center'>
                                    <div class="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-self-center w-50">
                                        <div class="d-inline-flex flex-column align-self-center">
                                            <p class="p-confirm mb-0">Personal Information</p>
                                        </div>
                                        <div class="align-self-center">
                                            <div class="align-self-center px-2 p-confirm">
                                                <ArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                    <Link to='/changepwd' className='nav-link ms-3 my-1 text-hover p-confirm d-flex justify-content-center'>
                                    <div class="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-self-center w-50">
                                        <div class="d-inline-flex flex-column align-self-center">
                                            <p class="p-confirm mb-0">Change Password</p>
                                        </div>
                                        <div class="align-self-center">
                                            <div class="align-self-center px-2 p-confirm">
                                                <ArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                    <Link to='/changepin' className='nav-link ms-3 my-1 text-hover p-confirm d-flex justify-content-center'>
                                    <div class="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-self-center w-50">
                                        <div class="d-inline-flex flex-column align-self-center">
                                            <p class="p-confirm mb-0">Change Pin</p>
                                        </div>
                                        <div class="align-self-center">
                                            <div class="align-self-center px-2 p-confirm">
                                                <ArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                    <Link to='/home' className='nav-link ms-3 my-1 text-hover p-confirm d-flex justify-content-center'>
                                    <div class="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-self-center w-50">
                                        <div class="d-inline-flex flex-column align-self-center">
                                            <p class="p-confirm mb-0">Logout</p>
                                        </div>
                                        <div class="align-self-center">
                                            <div class="align-self-center px-2 p-confirm">
                                                <ArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
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


export default Profilepage