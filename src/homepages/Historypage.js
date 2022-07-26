import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col, Nav} from 'react-bootstrap'
import { Bell, Grid, User, Plus, ArrowUp, LogOut } from "react-feather";

import RobertChandler from '../assets/image/users/RobertChandler.png'
import SamuelSuhi from '../assets/image/users/SamuelSuhi.png'
import Nlogo from '../assets/image/Nlogo.png'
import JessicaMera from '../assets/image/users/JessicaMera.png'
import Alogo from '../assets/image/Alogo.png'

function Historypage() {
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
                        <section class=" bg-white main-box p-5">
                            <div class="d-flex flex-column">
                                <h3 class="trans-his">Transaction History</h3>
                                <p class="pt-5 pb-3 history-p">This Week.</p>
                                <div class="d-inline-flex flex-row justify-content-between pb-3">
                                    <div class="d-flex flex-row align-self-center">
                                    <img src={SamuelSuhi} alt="userimg"/>
                                    <div class="d-inline-flex flex-column align-self-center px-2">
                                        <p class="p-user mb -0">Samuel Suhi</p>
                                        <p class="p-info mb-0">Transfer</p>
                                    </div>
                                    </div>
                                    <div class="d-flex align-self-end">
                                        <p class="p-gr">+Rp50.000</p>
                                    </div>
                                </div>
                                <div class="d-inline-flex flex-row justify-content-between pb-3">
                                    <div class="d-flex flex-row align-self-center">
                                    <img src={Nlogo} alt="userimg"/>
                                    <div class="d-inline-flex flex-column align-self-center px-2">
                                        <p class="p-user mb-0">Netflix</p>
                                        <p class="p-info mb-0">Subscription</p>
                                    </div>
                                    </div>
                                    <div class="d-flex align-self-end">
                                        <p class="p-red">-Rp149.000</p>
                                    </div>
                                </div>
                                <p class="pt-5 pb-3 history-p">This Month</p>
                                <div class="d-inline-flex flex-row justify-content-between pb-3">
                                    <div class="d-flex flex-row align-self-center">
                                    <img src={JessicaMera} alt="userimg"/>
                                    <div class="d-inline-flex flex-column align-self-center px-2">
                                        <p class="p-user mb-0">Christine Mar...</p>
                                        <p class="p-info mb-0">Transfer</p>
                                    </div>
                                    </div>
                                    <div class="d-flex align-self-end">
                                        <p class="p-gr">+Rp150.000</p>
                                    </div>
                                </div>
                                <div class="d-inline-flex flex-row justify-content-between pb-3">
                                    <div class="d-flex flex-row align-self-center">
                                    <img src={Alogo} alt="userimg"/>
                                    <div class="d-inline-flex flex-column align-self-center px-2">
                                        <p class="p-user mb-0">Adobe Inc.</p>
                                        <p class="p-info mb-0">Subscription</p>
                                    </div>
                                    </div>
                                    <div class="d-flex align-self-end">
                                        <p class="p-red">-Rp149.000</p>
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

export default Historypage