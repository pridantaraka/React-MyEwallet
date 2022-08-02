import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import { Search } from "react-feather";
import Header from '../component/Header';
import SideMenu from '../component/SideMenu';
import Footer from '../component/Footer';
import DropdownMenu from '../component/DropdownMenu';
import { useSelector, useDispatch } from "react-redux";
import { getHistory } from '../redux/asyncActions/history';

import RobertChandler from '../assets/image/users/RobertChandler.png'
import SamuelSuhi from '../assets/image/users/SamuelSuhi.png'
import SherinaChaw from '../assets/image/users/SherinaChaw.png'
import JessicaMera from '../assets/image/users/JessicaMera.png'

function Trans(picture, note, amount) {
    <div class="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
        <Link to='/transfermoney' class="nav-link ms-3 my-1">
            <div class="d-flex flex-row align-self-center">
                <img src={SamuelSuhi} alt="profileimg" className='fluid'/>
                <div class="d-inline-flex flex-column align-self-center px-2">
                    <p class="p-user mb-0">{note}</p>
                    <p class="p-info mb-0">{amount}</p>
                </div>
            </div>
        </Link>
    </div>
}

function Searchpage() {
    const history = useSelector((state) => state.history.data);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    
    React.useEffect(() => {
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
                            <section class="bg-white box-side main-box p-5">
                                <div class="d-flex flex-column gap-3">
                                    <h3 class="trans-his py-3">Search Receiver</h3>
                                    <div class="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div class="d-inline-flex flex-column align-self-center px-2 w-100 trans-search">
                                            <div class="input-group flex-nowrap p-info">
                                                <div class="align-self-center px-2">
                                                    <Search />
                                                </div>
                                                <input type="search" class="form-control input-search" placeholder="Search receiver here"/>
                                            </div>
                                        </div>
                                    </div>
                                    {/* map data dinamis */}
                                    <div>
                                         {history.map((o) => {
                                             return(
                                                 <>
                                                 <Trans picture={SamuelSuhi} note={o.notes} amount={o.amount}/>
                                                 </>
                                             )
                                         })}
                                     </div>
                                            {/* map data dinamis */}
                                    {/* <div class="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
                                        <div class="d-flex flex-row align-self-center">
                                        <img src={SherinaChaw} alt="profileimg"/>
                                        <div class="d-inline-flex flex-column align-self-center px-2">
                                            <p class="p-user mb-0">Momo Taro</p>
                                            <p class="p-info mb-0">+62 812-4343-6731</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
                                        <div class="d-flex flex-row align-self-center">
                                        <img src={RobertChandler} alt="profileimg"/>
                                        <div class="d-inline-flex flex-column align-self-center px-2">
                                            <p class="p-user mb-0">Jessica Keen</p>
                                            <p class="p-info mb-0">+62 811-3452-5252</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
                                        <div class="d-flex flex-row align-self-center">
                                        <img src={JessicaMera} alt="profileimg"/>
                                        <div class="d-inline-flex flex-column align-self-center px-2">
                                            <p class="p-user mb-0">Michael Le</p>
                                            <p class="p-info mb-0">+62 810-4224-4613</p>
                                        </div>
                                        </div>
                                    </div> */}
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


export default Searchpage