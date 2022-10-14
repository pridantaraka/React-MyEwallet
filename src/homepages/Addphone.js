import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import DropdownMenu from '../component/DropdownMenu';
import SideMenu from '../component/SideMenu'
import Header from '../component/Header'
import Footer from '../component/Footer'
import EditProfile from '../component/EditProfile';
import { Formik } from 'formik';
import { EditSchema } from '../component/schemaValidation';

function AddPhone() {
    const dispatch = useDispatch();

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
                                <div className="d-flex flex-column justify-content-center">
                                    <h3 className="trans-his py-2">Add Phone Number</h3>
                                    <p className="p-confirm">Add at least one phone number for the transfer<br/>
                                        ID so you can start transfering your money<br/>
                                        to another user.</p>
                                    <div className="d-inline-flex flex-column justify-content-center align-self-center py-5 align-content-center">
                                        <Formik
                                        onSubmit={console.log('values')}
                                        validationSchema={EditSchema}
                                        initialValues={{fullname: '', phonenumber: ''}}>
                                            {(props) => <EditProfile {...props}/>}
                                        </Formik>
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


export default AddPhone