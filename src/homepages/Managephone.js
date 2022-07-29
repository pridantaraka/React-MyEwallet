import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import { Trash } from "react-feather";
import { useSelector } from "react-redux";

import Header from '../component/Header';
import SideMenu from '../component/SideMenu';
import Footer from '../component/Footer';

function ManagePhone() {
    const addnumber = useSelector((state) => state.add.value);

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
                            <section class="bg-white box-side main-box p-5">
                                <div class="d-flex flex-column gap-3">
                                    <h3 class="trans-his py-2">Manage Phone Number</h3>
                                    <p class="p-confirm">You can only delete the phone number and then
                                        you must add another phone number.</p>
                                    <div class="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div class="d-inline-flex flex-column align-self-center px-2">
                                            <p class="p-confirm mb-1">Primary</p>
                                            <p class="h3-confirm mb-0">+62 {addnumber}</p>
                                        </div>
                                        <div class="align-self-center">
                                            <Link to='/personalinfo' class="nav-link ms-3 my-1 text-hover p-confirm">
                                                <div class="align-self-center px-2">
                                                    <Trash />
                                                </div>
                                            </Link>
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


export default ManagePhone