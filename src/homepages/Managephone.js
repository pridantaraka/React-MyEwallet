import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import { Trash } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import DropdownMenu from '../component/DropdownMenu';
import { getProfile } from "../redux/asyncActions/profile";

import Header from '../component/Header';
import SideMenu from '../component/SideMenu';
import Footer from '../component/Footer';

function ManagePhone() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const profile = useSelector((state) => state.profile.data);

    
    React.useEffect(() => {
        dispatch(getProfile(token));
      }, [token]);

    // const addnumber = useSelector((state) => state.add.value);

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
                                    <h3 className="trans-his py-2">Manage Phone Number</h3>
                                    <p className="p-confirm">You can only delete the phone number and then
                                        you must add another phone number.</p>
                                    <div className="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div className="d-inline-flex flex-column align-self-center px-2">
                                            <p className="p-confirm mb-1">Primary</p>
                                            <p className="h3-confirm mb-0">+62 {profile?.phonenumber}</p>
                                        </div>
                                        <div className="align-self-center">
                                            <Link to='/personalinfo' className="nav-link ms-3 my-1 text-hover p-confirm">
                                                <div className="align-self-center px-2">
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