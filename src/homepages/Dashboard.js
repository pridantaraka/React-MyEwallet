import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import { Plus, ArrowUp } from "react-feather";
import Header from '../component/Header';
import SideMenu from '../component/SideMenu';
import Footer from '../component/Footer';
import DropdownMenu from '../component/DropdownMenu';
import { useSelector, useDispatch } from "react-redux";

import graficin from '../assets/image/in2.png'
import graficout from '../assets/image/out2.png'
import grafic from '../assets/image/graphic.png'
import SamuelSuhi from '../assets/image/users/SamuelSuhi.png'
import { getHistory } from '../redux/asyncActions/history';
import { getProfile } from '../redux/asyncActions/profile';
import {ListHistory} from '../component/HistoryList'

function Dashboard() {
    const history = useSelector((state) => state.history.data);
    const profile = useSelector((state) => state.profile.data);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
 
    React.useEffect (() => {
        dispatch(getProfile(token));
        dispatch(getHistory(token));
      }, []);
    return(
        <>
        <Container className='mw-100 min-vh-100 bg-homepg'>
        <Row>
        <Header />
            <main>
            <Container classNameName='mw-100 min-vh-100'>
                <Row>
                    <Col md={12} className="d-flex flex-row justify-content-center gap-2 mx-0 px-0 mt-4 mb-4 w-100">
                    <Col md={3}>
                        <SideMenu />
                    </Col>
                    <Col md={9}>
                        <DropdownMenu />
                    <section className="main-box d-flex flex-column gap-2 p-0">
                        <div className="col-12 main-box sec-bg1 d-flex flex-column ">
                            <div className="d-flex justify-content-md-between flex-md-row flex-column align-items-center">
                                <div className="d-flex flex-column p-4">
                                    <p className="sec-m">Balance</p>
                                    <h2 className="text-white sec-h2">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
                                    .format(parseInt(profile.balance?profile.balance:"0"))}</h2>
                                    <p className="sec-p">{profile.phonenumber?profile.phonenumber:"Phone Number"}</p>
                                </div>
                                <div className="d-flex flex-column justify-content-center p-4 gap-2">
                                    <Link to='/searchpage'><button className="btn-box"><ArrowUp />Transfer</button></Link>
                                    <Link to='/topup'><button className="btn-box"><Plus />Top Up</button></Link>
                                </div>
                            </div>
                        </div>
                        <Col md={12}>
                        <div className="main-box d-flex flex-md-row flex-column gap-1 p-0 ">
                            <Col md={8}>
                            <div className="bg-white main-box h-100 box-dashboard">
                                <div className="d-flex justify-content-between p-4">
                                    <div><img src={graficin} alt="graficimg"/></div>
                                    <div><img src={graficout} alt="graficimg"/></div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <img src={grafic} alt="graficimg"/>
                                </div>
                            </div>
                            </Col>
                            <Col md={4}>
                            <div className="bg-white main-box h-100 box-dashboard">
                                <div className="p-3 row d-flex justify-content-md-between">
                                    <div className="d-flex justify-content-between">
                                        <p className="p-history">Transaction History</p>
                                        <Link to='/historypage' className="nav-link ms-3 my-1 sec-p-menu">See all</Link>
                                    </div>
                                    <div className="p-2">
                                        {/* map data dinamis */}
                                        {history.map((o) => {
                                            return(
                                            <React.Fragment key={o.id_transaction}>
                                            
                                                <ListHistory picture={SamuelSuhi}  name={o.recipient_fullname} type={o.name} amount={o.amount} sander_id={o.sander_id} recipient_id={o.recipient_id}/>
                                            </React.Fragment>
                                            )
                                        })}
                                        {/* map data dinamis */}
                                    </div>
                                </div>
                            </div>
                            </Col>
                        </div>
                        </Col>
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

export default Dashboard