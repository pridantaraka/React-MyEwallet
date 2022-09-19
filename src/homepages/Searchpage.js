import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import { Search } from "react-feather";
import Header from '../component/Header';
import SideMenu from '../component/SideMenu';
import Footer from '../component/Footer';
import DropdownMenu from '../component/DropdownMenu';
import { useSelector, useDispatch } from "react-redux";
// import { getHistory } from '../redux/asyncActions/history';
import { getuser } from '../redux/asyncActions/getuser';

import SamuelSuhi from '../assets/image/users/SamuelSuhi.png'

function ListUser(picture, fullname, phonenumber) {
    <div class="d-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
        <Link to='/transfermoney' class="nav-link ms-3 my-1">
            <div class="d-flex flex-row align-self-center">
                <img src={SamuelSuhi} alt="profileimg" className='fluid'/>
                <div class="d-inline-flex flex-column align-self-center px-2">
                    <p class="p-user mb-0">{fullname}</p>
                    <p class="p-info mb-0">{phonenumber}</p>
                </div>
            </div>
        </Link>
    </div>
}

function Searchpage() {
    // const getuser = useSelector((state) => state.userr.data);
    // const dispatch = useDispatch();
    // const token = useSelector((state) => state.auth.token);
    
    // React.useEffect(() => {
    //     dispatch(getuser(token));
    //   }, []);
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
            }
        ]
    })
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
                                    <Link to='/transfermoney' class="nav-link ms-1 my-1 w-100 boxconfirm">
                                    <div class="d-inline-flex flex-row justify-content-between p-4  align-content-center">
                                        <div class="d-flex flex-row align-self-center">
                                        <img src={SamuelSuhi} alt="profileimg"/>
                                        <div class="d-inline-flex flex-column align-self-center px-2">
                                            <p class="p-user mb-0">Momo Taro</p>
                                            <p class="p-info mb-0">+62 812-4343-6731</p>
                                        </div>
                                        </div>
                                    </div>
                                    </Link>
                                    {/* map data dinamis */}
                                    {/* <div>
                                         {data.map((o) => {
                                             return(
                                                 <>
                                                 <ListUser picture={SamuelSuhi} fullname={o.name} phonenumber={o.amount}/>
                                                 </>
                                             )
                                         })}
                                     </div> */}
                                    {/* map data dinamis */}
                                    <div class="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
                                        <div class="d-flex flex-row align-self-center">
                                        <img src="" alt="profileimg"/>
                                        <div class="d-inline-flex flex-column align-self-center px-2">
                                            <p class="p-user mb-0">test</p>
                                            <p class="p-info mb-0">+62 812-4343-6731</p>
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


export default Searchpage