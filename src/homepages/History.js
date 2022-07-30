import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Header from '../component/Header';
import SideMenu from '../component/SideMenu';
import Footer from '../component/Footer';
import DropdownMenu from '../component/DropdownMenu';

import SamuelSuhi from '../assets/image/users/SamuelSuhi.png'
import Nlogo from '../assets/image/Nlogo.png'
import JessicaMera from '../assets/image/users/JessicaMera.png'
import Alogo from '../assets/image/Alogo.png'

function History() {
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
                        <section class=" bg-white box-side main-box p-5">
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
            <Footer />
        </Row>
    </Container>
    </>
    )
}

export default History