import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';
import Header from '../component/Header';
import SideMenu from '../component/SideMenu';
import Footer from '../component/Footer';
import ModalPopup from '../component/ModalPopup';
import DropdownMenu from '../component/DropdownMenu';
import {  useSelector } from 'react-redux';

import SamuelSuhi from '../assets/image/users/SamuelSuhi.png'

function Confirmation() {
    const getTransfer = useSelector(state => state.transfer.dataTransfer);
    const recipient = useSelector(state => state.user.dataRecipient);
    const getbalance = useSelector(state => state.profile.data);

    const [modalShow, setModalShow] = React.useState(false);
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
                            <section class="bg-white box-side main-box p-5">
                                <div class="col-12 d-flex flex-column gap-3">
                                    <h3 class="trans-his py-3">Transfer To</h3>
                                    <div class="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
                                        <div class="d-flex flex-row align-self-center">
                                        <img src={SamuelSuhi} alt="userimg"/>
                                        <div class="d-inline-flex flex-column align-self-center px-2">
                                            <p class="p-user mb-0">{recipient.fullname}</p>
                                            <p class="p-info mb-0">{recipient.phonenumber}</p>
                                        </div>
                                        </div>
                                    </div>
                                    <h3 class="trans-his py-4">Details</h3>
                                    <div class="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div class="d-inline-flex flex-column align-self-center px-2">
                                            <p class="p-confirm mb -0">Amount</p>
                                            <p class="h3-confirm mb-0">Rp{getTransfer.amount}</p>
                                        </div>
                                    </div>
                                    <div class="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div class="d-inline-flex flex-column align-self-center px-2">
                                            <p class="p-confirm mb -0">Balance Left</p>
                                            <p class="h3-confirm mb-0">Rp{getbalance.balance?getbalance.balance:'0.00'}</p>
                                        </div>
                                    </div>
                                    <div class="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div class="d-inline-flex flex-column align-self-center px-2">
                                            <p class="p-confirm mb -0">Date & Time</p>
                                            <p class="h3-confirm mb-0">{getTransfer.date}, {getTransfer.time}</p>
                                        </div>
                                    </div>
                                    <div class="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div class="d-inline-flex flex-column align-self-center px-2">
                                            <p class="p-confirm mb -0">Notes</p>
                                            <p class="h3-confirm mb-0">{getTransfer.note || 'No Notes'}</p>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                    <Button className='btn-box' onClick={() => setModalShow(true)}>
                                    Continue
                                    </Button>
                                    <ModalPopup
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
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


export default Confirmation