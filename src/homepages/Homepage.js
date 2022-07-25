import React from 'react'
import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Container, Row, Col, Nav} from 'react-bootstrap'
import { Bell, Grid, User, Plus, ArrowUp, LogOut } from "react-feather";

import RobertChandler from '../assets/image/users/RobertChandler.png'
import graficin from '../assets/image/in2.png'
import graficout from '../assets/image/out2.png'
import grafic from '../assets/image/graphic.png'
import SamuelSuhi from '../assets/image/users/SamuelSuhi.png'

function Users({picture, name, transaction, type}){
    return(
    <div className="d-flex flex-row justify-content-around pb-3">
        <div className="align-self-center">
        <img className="img-fluid rounded" src={SamuelSuhi} alt="profileimg"/>
        </div>
        <div className="d-flex flex-column align-self-center">
            <p className="p-user mb-0">{name}</p>
             <p className="p-info mb-0">{type}</p>
         </div>
         <div className="d-flex align-self-center">
             <p className="p-gr mb-0">Rp.{transaction}</p>
         </div>
     </div>
    )
}

function Homepage() {
    const [data] = React.useState({
        success: true,
        massage: 'List User',
        results: [
            {
                "id_transaction": 34,
                "time_transaction": "2022-07-11T15:32:09.773Z",
                "recipient_id": 33,
                "sander_id": 45,
                "name": "jojo",
                "notes": "hellow",
                "amount": "10000",
                "type_id": 1
            },
            {
                "id_transaction": 35,
                "time_transaction": "2022-10-31T17:00:00.000Z",
                "recipient_id": 33,
                "sander_id": 45,
                "name": "lilo",
                "notes": "hellow",
                "amount": "10000",
                "type_id": 1
            },
            {
                "id_transaction": 36,
                "time_transaction": "2022-10-31T17:00:00.000Z",
                "recipient_id": 33,
                "sander_id": 45,
                "name": "nona",
                "notes": "hellow",
                "amount": "1000",
                "type_id": 1
            },
            {
                "id_transaction": 46,
                "time_transaction": "2022-10-31T17:00:00.000Z",
                "recipient_id": 45,
                "sander_id": 46,
                "name": "milo",
                "notes": "hello",
                "amount": "50000",
                "type_id": 1
            }
        ]
    })
    return(
        <>
        <Container className='mw-100 min-vh-100 bg-homepg'>
        <Row>
            <header className="bg-white h-box h-boxsh w-100">
                <Nav className="d-flex flex-row justify-content-between">
                        <div className="h-zwallet align-self-center ps-5 d-md-block d-none">
                            <span>MyEwallet</span>
                        </div>
                        <div className="d-flex flex-row p-4 pe-md-5">
                            <div className="align-self-center px-2">
                            <img src={RobertChandler} alt="img-profile"/>
                            </div>
                            <div className="d-flex flex-column align-self-center px-2">
                                <p className="h-user mb-0">Robert Chandler</p>
                                <p className="h-phone mb-0">+62 8139 3877 7946</p>
                            </div>
                                <div className="sec-menu-p d-flex align-self-center">
                                    <Bell />
                                </div>
                        </div>
                </Nav>
            </header>
             <main>
                <Container classNameName='mw-100 min-vh-100'>
                    <Row>
                        <Col md={12} className="d-flex flex-row justify-content-md-center gap-2 mx-0 px-0 mt-4 mb-4 w-100">
                        <Col md={3}>
                        <section className="bg-white main-box p-md-5 d-md-block d-none h-100">
                            <div className="d-flex flex-column h-100 justify-content-between">
                            <div className="d-flex flex-column justify-content-end gap-5">
                            <Link to='/homepage' className=" ms-3 my-1">
                                    <div className="d-inline-flex flex-row sec-menu-p">
                                        <div className="align-self-center px-2">
                                            <i data-feather="grid"></i>
                                            <Grid />
                                        </div>
                                        <div><p className="mb-0">Dashboard</p></div>
                                    </div>
                                </Link>
                                <Link to='/transfer' className=" ms-3 my-1">
                                        <div className="d-inline-flex flex-row sec-menu-p">
                                            <div className="align-self-center px-2">
                                                <ArrowUp />
                                            </div>
                                            <div><p className="mb-0">Transfer</p></div>
                                        </div>
                                    </Link>
                                <Link to='/Topup' className=" ms-3 my-1">
                                    <div className="d-inline-flex flex-row sec-menu-p">
                                        <div className="align-self-center px-2">
                                            <Plus />
                                        </div>
                                        <div><p className="mb-0">TopUp</p></div>
                                    </div>
                                </Link>
                                <Link to='/profilepage' className=" ms-3 my-1">
                                    <div className="d-inline-flex flex-row sec-menu-p">
                                        <div className="align-self-center px-2">
                                            <User />
                                        </div>
                                        <div>Profile</div>
                                    </div>
                                </Link>
                            </div>
                            <Link to='/Home' className="ms-3 my-1">
                                <div className="d-flex">
                                    <div className="d-inline-flex sec-menu-p">
                                        <div className="align-self-center px-2">
                                            <LogOut />
                                        </div>
                                        <div><p className="mb-0">Logout</p></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        </section>
                        </Col>
                        <Col md={9}>
                            {/* Dropdown */}
                            <DropdownButton title="Dropdown button" className="mw-100 d-md-none bg-white my-2 main-box d-flex justify-content-center">
                                <Link to='/homepage'><Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item></Link>
                                <Link to='/transfer'><Dropdown.Item href="#/action-2">Transfer</Dropdown.Item></Link>
                                <Link to='/topup'><Dropdown.Item href="#/action-3">TopUp</Dropdown.Item></Link>                              
                                <Link to='/profilepage'><Dropdown.Item href="#/action-3">Profile</Dropdown.Item></Link>                                
                                <Link to='/home'><Dropdown.Item href="#/action-3">LogOut</Dropdown.Item></Link>                               
                                </DropdownButton>
                            {/* Dropdown */}
                        <section className="main-box d-flex flex-column gap-2 p-0">
                            <div className="col-12 main-box sec-bg1 d-flex flex-column">
                                <div className="d-flex justify-content-md-between flex-md-row flex-column align-items-center">
                                    <div className="d-flex flex-column p-4">
                                        <p className="sec-m">Balance</p>
                                        <h2 className="text-white sec-h2">Rp120.000</h2>
                                        <p className="sec-p">+62 813-9387-7946</p>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center p-4 gap-2">
                                        <button className="btn-box"><i data-feather="arrow-up"></i>Transfer</button>
                                        <button className="btn-box"><i data-feather="plus"></i>Top Up</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 main-box d-flex flex-md-row flex-column gap-1 p-0">
                                <div className="col-12 col-md-8 bg-white main-box ">
                                    <div className="d-flex justify-content-between p-4">
                                        <div><img src={graficin} alt="graficimg"/></div>
                                        <div><img src={graficout} alt="graficimg"/></div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <img src={grafic} alt="graficimg"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 bg-white main-box">
                                    <div className="p-3 row d-flex justify-content-md-between">
                                        <div className="d-flex justify-content-between">
                                            <p className="p-history">Transaction History</p>
                                            <Link to='/historypage' className=" ms-3 my-1">See all</Link>
                                        </div>
                                        <div className="p-2">
                                            {/* map data dinamis */}
                                            <div>
                                                {data.results.map(o => {
                                                    return(
                                                        <>
                                                        <Users picture={SamuelSuhi} name={o.name} type={o.notes} transaction={o.amount}/>
                                                        </>
                                                    )
                                                })}
                                            </div>
                                            {/* map data dinamis */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        </Col>
                        </Col>
                    </Row>
                </Container>
             </main>
            <footer className='f-bg-pg'>
                <div className="d-flex flex-row justify-content-between p-3">
                    <p className="ft-p mb-0">2020 Zwallet. All right reserved.</p>
                    <div className="d-flex flex-md-row flex-column gap-4">
                        <div>
                            <p className="ft-p mb-0">+62 5637 8882 9901</p>
                        </div>
                        <div>
                            <p className="ft-p mb-0">contact@zwallet.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Row>
        </Container>
        </>
    )
}

export default Homepage