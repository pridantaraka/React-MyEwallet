import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Container, Row, Col, Nav, Button} from 'react-bootstrap'
import { Bell, Grid, User, Plus, ArrowUp, LogOut } from "react-feather";

import RobertChandler from '../assets/image/users/RobertChandler.png'
import SamuelSuhi from '../assets/image/users/SamuelSuhi.png'


function Confirmpage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                            {/* Dropdown */}
                                <DropdownButton title="Dropdown button" className="mw-100 d-md-none bg-white my-2 main-box d-flex justify-content-center">
                                <Link to='/homepage'><Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item></Link>
                                <Link to='/transfer'><Dropdown.Item href="#/action-2">Transfer</Dropdown.Item></Link>
                                <Link to='/topup'><Dropdown.Item href="#/action-3">TopUp</Dropdown.Item></Link>                              
                                <Link to='/profilepage'><Dropdown.Item href="#/action-3">Profile</Dropdown.Item></Link>                                
                                <Link to='/home'><Dropdown.Item href="#/action-3">LogOut</Dropdown.Item></Link>                               
                                </DropdownButton>
                            {/* Dropdown */}
                            {/* Pop up */}
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title className='ps-2'>Enter PIN to Transfer</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <p class="p-confirm px-3">Enter your 6 digits PIN for confirmation to<br/>
                                 continue transferring money.</p>
                                 <div class="d-inline-flex flex-column justify-content-center w-100 align-self-center p-5 gap-3 align-content-center">
                                    <div class="d-flex flex-row gap-md-5">
                                        <div class="d-flex flex-row gap-md-4">
                                            <div class="change-pin">
                                                <input maxlength="1" type="text" class="w-100"/>
                                            </div>
                                            <div class="change-pin">
                                                <input maxlength="1" type="text" class="w-100"/>
                                            </div>
                                            <div class="change-pin">
                                                <input maxlength="1" type="text" class="w-100"/>
                                            </div>
                                            <div class="change-pin">
                                                <input maxlength="1" type="text" class="w-100"/>
                                            </div>
                                            <div class="change-pin">
                                                <input maxlength="1" type="text" class="w-100"/>
                                            </div>
                                            <div class="change-pin">
                                                <input maxlength="1" type="text" class="w-100"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                                </Modal.Footer>
                            </Modal>
                            {/* Pop Up */}
                            <section class="bg-white main-box p-5">
                                <div class="col-12 d-flex flex-column gap-3">
                                    <h3 class="trans-his py-3">Transfer To</h3>
                                    <div class="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
                                        <div class="d-flex flex-row align-self-center">
                                        <img src={SamuelSuhi} alt="userimg"/>
                                        <div class="d-inline-flex flex-column align-self-center px-2">
                                            <p class="p-user mb-0">Samuel Suhi</p>
                                            <p class="p-info mb-0">+62 813-8492-9994</p>
                                        </div>
                                        </div>
                                    </div>
                                    <h3 class="trans-his py-4">Details</h3>
                                    <div class="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div class="d-inline-flex flex-column align-self-center px-2">
                                            <p class="p-confirm mb -0">Amount</p>
                                            <p class="h3-confirm mb-0">Rp100.000</p>
                                        </div>
                                    </div>
                                    <div class="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div class="d-inline-flex flex-column align-self-center px-2">
                                            <p class="p-confirm mb -0">Balance Left</p>
                                            <p class="h3-confirm mb-0">Rp20.000</p>
                                        </div>
                                    </div>
                                    <div class="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div class="d-inline-flex flex-column align-self-center px-2">
                                            <p class="p-confirm mb -0">Date & Time</p>
                                            <p class="h3-confirm mb-0">May 11, 2020 - 12.20</p>
                                        </div>
                                    </div>
                                    <div class="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div class="d-inline-flex flex-column align-self-center px-2">
                                            <p class="p-confirm mb -0">Notes</p>
                                            <p class="h3-confirm mb-0">For buying some socks</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <Button class="btn-confirm p-3 px-5 mt-3" onClick={handleShow}>Continue</Button>
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


export default Confirmpage