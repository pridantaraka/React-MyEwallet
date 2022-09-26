import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import Header from '../component/Header';
import SideMenu from '../component/SideMenu';
import Footer from '../component/Footer';
import DropdownMenu from '../component/DropdownMenu';
import { useSelector,useDispatch } from 'react-redux';
import { getHistory } from '../redux/asyncActions/history';
import { ListHistory } from '../component/HistoryList';

import SamuelSuhi from '../assets/image/users/SamuelSuhi.png'


function History() {
    const history = useSelector((state) => state.history.data);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
 
    React.useEffect (() => {
        dispatch(getHistory(token));
      }, []);
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
                        <section className=" bg-white box-side main-box p-5">
                           
                            <div className="d-flex flex-column">
                                <h3 className="trans-his">Transaction History</h3>
                                {/* map data dinamis */}
                                {history.map((o) => {
                                    return(
                                    <React.Fragment key={o.id_transaction}>
                                    <ListHistory picture={SamuelSuhi}  name={o.recipient_fullname} type={o.name} amount={o.amount}/>
                                    </React.Fragment>
                                    )
                                })}
                                {/* map data dinamis */}
                            </div>
                           <div>
                            <div className='d-flex flex-row gap-5 mt-5'>
                                    <Button>Prev</Button>
                                    <Button>Next</Button>
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

export default History