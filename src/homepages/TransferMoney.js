import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col, Button} from 'react-bootstrap'
import { Edit} from "react-feather";
import SideMenu from '../component/SideMenu'
import Header from '../component/Header'
import Footer from '../component/Footer'

import SamuelSuhi from '../assets/image/users/SamuelSuhi.png'


function TransferMoney() {


    return(
        <>
        <Container className='mw-100 min-vh-100 bg-homepg'>
            <Row>
                <Header />
                <main>
                    <Container>
                        <Row>
                            <Col md ={12} className="d-flex flex-row justify-content-center gap-2 mx-0 px-0 mt-4 mb-4 w-100">
                            <Col md={3}>
                                <SideMenu />
                            </Col>
                            <Col md={9}>
                            <section className="bg-white box-side main-box p-5 mw-100">
                            <div className='d-flex flex-column gap-3'>
                                <div>
                                    <h3 className="trans-his py-2">Transfer Money</h3>
                                </div>
                                <div className="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center w-100">
                                    <div className="d-flex flex-row align-self-center">
                                    <img src={SamuelSuhi} alt="profileimg" className='fluid'/>
                                        <div className="d-inline-flex flex-column align-self-center px-2">
                                            <p className="p-user mb-0">Samuel Suhi</p>
                                            <p className="p-info mb-0">+62 813-8492-9994</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="p-info mb-0 py-3">Type the amount you want to transfer and then<br/>
                                    press continue to the next steps.</p>
                                </div>
                                <div className='d-flex align-items-center flex-column gap-3 mt-5'>
                                    <div className='input-money'>
                                        <input type='text' className='' placeholder="0.00"></input>
                                    </div>
                                    <div>
                                        <p className="p-info mb-0 py-3">Rp.120.000 Aveliable</p>
                                    </div>
                                    <div className='input-notes icon-input'>
                                        <Edit size={18} /><input type='number' placeholder="Add some notes"></input>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-end mt-4'>
                                    <Link to='/confirmation' className='nav-link'><Button className='btn-box'>Submit</Button></Link>
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

export default TransferMoney