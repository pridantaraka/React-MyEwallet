import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import { Search } from "react-feather";
import Header from '../component/Header';
import SideMenu from '../component/SideMenu';
import Footer from '../component/Footer';
import DropdownMenu from '../component/DropdownMenu';
import { useSelector, useDispatch } from "react-redux";
import { ListUser } from '../component/ListUser';
import { getUser } from '../redux/asyncActions/user';

import SamuelSuhi from '../assets/image/users/SamuelSuhi.png'

function Searchpage() {
    const users = useSelector((state) => state.user.data);
    console.log("data users",users);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    
    React.useEffect(() => {
        dispatch(getUser(token));
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
                                    {/* <Link to='/transfermoney' class="nav-link ms-1 my-1 w-100 boxconfirm">
                                    <div class="d-inline-flex flex-row justify-content-between p-4  align-content-center">
                                        <div class="d-flex flex-row align-self-center">
                                        <img src={SamuelSuhi} alt="profileimg"/>
                                        <div class="d-inline-flex flex-column align-self-center px-2">
                                            <p class="p-user mb-0">Momo Taro</p>
                                            <p class="p-info mb-0">+62 812-4343-6731</p>
                                        </div>
                                        </div>
                                    </div>
                                    </Link> */}
                                    {/* map data dinamis */}
                                    {users.map((o) => {
                                        return(
                                        <React.Fragment key={o.id_user}>
                                            <ListUser picture={SamuelSuhi}  name={o.fullname} phone={o.phonenumber}/>
                                        </React.Fragment>
                                        )
                                    })}
                                    {/* map data dinamis */}
                                    {/* <div class="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
                                        <div class="d-flex flex-row align-self-center">
                                        <img src="" alt="profileimg"/>
                                        <div class="d-inline-flex flex-column align-self-center px-2">
                                            <p class="p-user mb-0">test</p>
                                            <p class="p-info mb-0">+62 812-4343-6731</p>
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