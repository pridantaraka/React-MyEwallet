import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import { Plus, ArrowUp } from "react-feather";
import Header from '../component/Header';
import SideMenu from '../component/SideMenu';
import Footer from '../component/Footer';
import DropdownMenu from '../component/DropdownMenu';

import graficin from '../assets/image/in2.png'
import graficout from '../assets/image/out2.png'
import grafic from '../assets/image/graphic.png'
import SamuelSuhi from '../assets/image/users/SamuelSuhi.png'


function Users({picture, name, transaction, notes}){
    return(
    <div className="d-flex flex-row justify-content-around pb-3">
        <div className="align-self-center">
        <img className="img-fluid rounded" src={SamuelSuhi} alt="profileimg"/>
        </div>
        <div className="d-flex flex-column align-self-center">
            <p className="p-user mb-0">{name}</p>
             <p className="p-info mb-0">{notes}</p>
         </div>
         <div className="d-flex align-self-center">
             <p className="p-gr mb-0">Rp.{transaction}</p>
         </div>
     </div>
    )
}

function Dashboard() {
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
            <Header />
             <main>
                <Container classNameName='mw-100 min-vh-100'>
                    <Row>
                        <Col md={12} className="d-flex flex-row justify-content-md-center gap-2 mx-0 px-0 mt-4 mb-4 w-100">
                        <Col md={3}>
                            <SideMenu />
                        </Col>
                        <Col md={9}>
                            <DropdownMenu />
                        <section className="main-box d-flex flex-column gap-2 p-0">
                            <div className="col-12 main-box sec-bg1 d-flex flex-column">
                                <div className="d-flex justify-content-md-between flex-md-row flex-column align-items-center">
                                    <div className="d-flex flex-column p-4">
                                        <p className="sec-m">Balance</p>
                                        <h2 className="text-white sec-h2">Rp120.000</h2>
                                        <p className="sec-p">+62 813-9387-7946</p>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center p-4 gap-2">
                                        <Link to='/searchpage'><button className="btn-box"><ArrowUp />Transfer</button></Link>
                                        <Link to='/topup'><button className="btn-box"><Plus />Top Up</button></Link>
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
                                            <Link to='/historypage' className="nav-link ms-3 my-1">See all</Link>
                                        </div>
                                        <div className="p-2">
                                            {/* map data dinamis */}
                                            <div>
                                                {data.results.map(o => {
                                                    return(
                                                        <>
                                                        <Users picture={SamuelSuhi} name={o.name} notes={o.notes} transaction={o.amount}/>
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
            <Footer />
        </Row>
        </Container>
        </>
    )
}

export default Dashboard