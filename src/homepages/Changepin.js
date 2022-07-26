import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import SideMenu from '../component/SideMenu'
import Header from '../component/Header'
import Footer from '../component/Footer'

function ChangePin() {
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
                            <section class="bg-white box-side main-box p-5 mw-100">
                                <div class="d-flex flex-column gap-3">
                                    <h3 class="trans-his py-2">Change PIN</h3>
                                    <p class="p-confirm">Type your new 6 digits security PIN to use in<br/> MyEwallet.</p>
                                    <div class="d-inline-flex flex-column justify-content-center w-50 align-self-center py-5 gap-5 ">
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
                                        <div class="align-self-center">
                                            <button class="reset-btn-chnge">Change Password</button>
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


export default ChangePin