import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col, Button} from 'react-bootstrap'
import { Search } from "react-feather";
import Header from '../component/Header';
import SideMenu from '../component/SideMenu';
import Footer from '../component/Footer';
import DropdownMenu from '../component/DropdownMenu';
import { useSelector, useDispatch } from "react-redux";
import ListUser from '../component/ListUser';
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
                            <section className="bg-white box-side main-box p-5">
                                <div className="d-flex flex-column gap-3">
                                    <h3 className="trans-his py-3">Search Receiver</h3>
                                    <div className="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-content-center">
                                        <div className="d-inline-flex flex-column align-self-center px-2 w-100 trans-search">
                                            <div className="input-group flex-nowrap p-info">
                                                <div className="align-self-center px-2">
                                                    <Search />
                                                </div>
                                                <input type="search" className="form-control input-search" placeholder="Search receiver here"/>
                                            </div>
                                        </div>
                                    </div>
                                    {users.map((o) => {
                                        console.log("log map", o);
                                        return(
                                        <React.Fragment key={o.id_user}>
                                            <ListUser picture={SamuelSuhi}  name={o.fullname} phone={o.phonenumber}/>
                                        </React.Fragment>
                                        )
                                    })}
                                    {/* map data dinamis */}
                                    <div className='d-flex flex-row justify-content-center gap-3'>
                                        <div>
                                            <Button>
                                                Next Page
                                            </Button>
                                        </div>
                                        <div>
                                            <Button>
                                                Prev Page
                                            </Button>
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