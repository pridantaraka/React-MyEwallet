import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import { Download, Share2 } from "react-feather";
import Header from '../component/Header';
import SideMenu from '../component/SideMenu';
import Footer from '../component/Footer';
import DropdownMenu from '../component/DropdownMenu';
import { useSelector } from 'react-redux';


import SamuelSuhi from '../assets/image/users/SamuelSuhi.png'
import Succsesslogo from '../assets/image/success.png'

function StatusSuccess() {
    const getTransfer = useSelector(state => state.transfer.dataTransfer);
    const recipient = useSelector(state => state.user.dataRecipient);
    const getbalance = useSelector(state => state.profile.data);


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
                            <section className="bg-white box-side main-box p-5">
                                <div className="col-12 d-flex flex-column gap-3">
                                    <div className='align-self-center'>
                                        <img src={Succsesslogo} alt='' className='fuild'/>
                                    </div>
                                    <div className='align-self-center my-3'>
                                        <p className="h3-confirm mb-0">Transfer Success</p>
                                    </div>
                                    <div className="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div className="d-inline-flex flex-column align-self-center px-2">
                                            <p className="p-confirm mb -0">Amount</p>
                                            <p className="h3-confirm mb-0">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
                                            .format(parseInt(getTransfer.amount))}</p>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div className="d-inline-flex flex-column align-self-center px-2">
                                            <p className="p-confirm mb -0">Balance Left</p>
                                            <p className="h3-confirm mb-0">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
                                            .format(parseInt(getbalance.balance?getbalance.balance:'0.00'))}</p>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div className="d-inline-flex flex-column align-self-center px-2">
                                            <p className="p-confirm mb -0">Date & Time</p>
                                            <p className="h3-confirm mb-0">{getTransfer.date}, {getTransfer.time}</p>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div className="d-inline-flex flex-column align-self-center px-2">
                                            <p className="p-confirm mb -0">Notes</p>
                                            <p className="h3-confirm mb-0">{getTransfer.note || 'No Notes'}</p>
                                        </div>
                                    </div>
                                    <h3 className="trans-his py-3">Transfer To</h3>
                                    <div className="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
                                        <div className="d-flex flex-row align-self-center">
                                        <img src={SamuelSuhi} alt="userimg"/>
                                        <div className="d-inline-flex flex-column align-self-center px-2">
                                            <p className="p-user mb-0">{recipient.fullname}</p>
                                            <p className="p-info mb-0">{recipient.phonenumber}</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end flex-row gap-3">
                                        <div>
                                            <button className='btn-status'><Share2 /></button>
                                        </div>
                                        <div>
                                            <button className='btn-status w-100 px-5'><Download />Download PDF</button>
                                        </div>
                                        <div>
                                            <Link to='/dashboard'><button className='btn-status w-100 px-5'>Back to Home</button></Link>
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


export default StatusSuccess