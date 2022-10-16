import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import Header from '../component/Header';
import SideMenu from '../component/SideMenu';
import Footer from '../component/Footer';
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../redux/asyncActions/profile";
import ModalPopup from '../component/ModalPopup';
import DropdownMenu from '../component/DropdownMenu';

function Personalinfo() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const profile = useSelector((state) => state.profile.data);

    React.useEffect(() => {
        dispatch(getProfile(token));
      }, []);
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
                            <section className="bg-white box-side main-box p-5">
                                <div className="d-flex flex-column gap-3">
                                    <h3 className="trans-his py-2">Personal Information</h3>
                                    <p className="p-confirm">We got your personal information from the sign 
                                        up proccess. If you want to make changes on 
                                        your information, contact our support.</p>
                                    <div className="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div className="d-inline-flex flex-column align-self-center px-2">
                                            <p className="p-confirm mb-1">Full Name</p>
                                            <p className="h3-confirm mb-0">{profile?.fullname}</p>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div className="d-inline-flex flex-column align-self-center px-2">
                                            <p className="p-confirm mb-1">Username</p>
                                            <p className="h3-confirm mb-0">{profile?.username}</p>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div className="d-inline-flex flex-column align-self-center px-2">
                                            <p className="p-confirm mb-1">Verified E-mail</p>
                                            <p className="h3-confirm mb-0">{profile?.email}</p>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div className="d-inline-flex flex-column align-self-center px-2">
                                            <p className="p-confirm mb-1">Phone Number</p>
                                            <p className="h3-confirm mb-0">{profile?.phonenumber}</p>
                                        </div>
                                        <div className="align-self-center me-3">
                                            <Link to='/addphone' className="nav-link ms-3 my-1 sec-p-menu">Manage</Link>
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


export default Personalinfo