import React from 'react'
import {Link} from 'react-router-dom';
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
    const [data, setData] = React.useState({
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
            <header>
                <Nav class="bg-white h-box h-boxsh mw-100">
                    <div class="d-flex flex-row justify-content-between">
                        <div class="h-zwallet align-self-center ps-5 d-md-block d-none">
                            <span>MyEwallet</span>
                        </div>
                        <div class="d-flex flex-row p-4 pe-md-5">
                            <div class="align-self-center px-2">
                            <img src={RobertChandler} alt="img-profile"/>
                            </div>
                            <div class="d-flex flex-column align-self-center px-2">
                                <p class="h-user mb-0">Robert Chandler</p>
                                <p class="h-phone mb-0">+62 8139 3877 7946</p>
                            </div>
                                <div class="sec-menu-p d-flex align-self-center">
                                    <Bell />
                                </div>
                        </div>
                    </div>
                </Nav>
            </header>
             <main>
                <Container className='mw-100'>
                    <Row>
                        <Col md={12} className="d-flex flex-row justify-content-md-center gap-2 mx-0 px-0 mt-4 mb-4 w-100">
                        <Col md={3}>
                        <section class="bg-white main-box p-md-5 d-md-block d-none h-100">
                            <div class="d-flex flex-column h-100 justify-content-between">
                            <div class="d-flex flex-column justify-content-end gap-5">
                                <a class="nav-link ms-3 my-1" href="homepage.html">
                                    <div class="d-inline-flex flex-row sec-menu-p">
                                        <div class="align-self-center px-2">
                                            <i data-feather="grid"></i>
                                            <Grid />
                                        </div>
                                        <div><p class="mb-0">Dashboard</p></div>
                                    </div>
                                </a>
                                    <a class="nav-link ms-3 my-1" href="transfer.html">
                                        <div class="d-inline-flex flex-row sec-menu-p">
                                            <div class="align-self-center px-2">
                                                <i data-feather="arrow-up"></i>
                                                <ArrowUp />
                                            </div>
                                            <div><p class="mb-0">Transfer</p></div>
                                        </div>
                                    </a>
                                <a class="nav-link ms-3 my-1" href="topup.html">
                                    <div class="d-inline-flex flex-row sec-menu-p">
                                        <div class="align-self-center px-2">
                                            <i data-feather="plus"></i>
                                            <Plus />
                                        </div>
                                        <div><p class="mb-0">TopUp</p></div>
                                    </div>
                                </a>
                                <a class="nav-link ms-3 my-1" href="profile.html">
                                    <div class="d-inline-flex flex-row sec-menu-p">
                                        <div class="align-self-center px-2">
                                            <i data-feather="user"></i>
                                            <User />
                                        </div>
                                        <div>Profile</div>
                                    </div>
                                </a>
                            </div>
                            <Link to='/Home'>
                            <a class="nav-link ms-3 my-1" href="./landingpage/index.html">
                                <div class="d-flex">
                                    <div class="d-inline-flex sec-menu-p">
                                        <div class="align-self-center px-2">
                                            <i data-feather="log-out"></i>
                                            <LogOut />
                                        </div>
                                        <div><p class="mb-0">Logout</p></div>
                                    </div>
                                </div>
                            </a>
                            </Link>
                        </div>
                        </section>
                        </Col>
                        <Col md={8}>
                        <section class="main-box d-flex flex-column gap-2 p-0">
                            <div class="col-12 main-box sec-bg1 d-sm-flex flex-column">
                                <div class="d-flex justify-content-md-between flex-md-row flex-column align-items-center">
                                    <div class="d-flex flex-column p-4">
                                        <p class="sec-m">Balance</p>
                                        <h2 class="text-white sec-h2">Rp120.000</h2>
                                        <p class="sec-p">+62 813-9387-7946</p>
                                    </div>
                                    <div class="d-flex flex-column justify-content-center p-4 gap-2">
                                        <button class="btn-box"><i data-feather="arrow-up"></i>Transfer</button>
                                        <button class="btn-box"><i data-feather="plus"></i>Top Up</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 main-box d-flex flex-md-row flex-column gap-1 p-0">
                                <div class="col-12 col-md-8 bg-white main-box ">
                                    <div class="d-flex justify-content-between p-4">
                                        <div><img src={graficin} alt="graficimg"/></div>
                                        <div><img src={graficout} alt="graficimg"/></div>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <img src={grafic} alt="graficimg"/>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 bg-white main-box">
                                    <div class="p-3 row d-flex justify-content-md-between">
                                        <div class="d-flex justify-content-between">
                                            <p class="p-history">Transaction History</p>
                                            <a class="nav-link ms-3 my-1 sec-menu-see" href="historypage.html">See all</a>
                                        </div>
                                        <div class="p-2">
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
                <div class="d-flex flex-row justify-content-between p-3">
                    <p class="ft-p mb-0">2020 Zwallet. All right reserved.</p>
                    <div class="d-flex flex-row gap-4">
                    <p class="ft-p mb-0">+62 5637 8882 9901</p>
                    <p class="ft-p mb-0">contact@zwallet.com</p>
                    </div>
                </div>
            </footer>
        </Row>
        </Container>
        </>
    )
}

export default Homepage