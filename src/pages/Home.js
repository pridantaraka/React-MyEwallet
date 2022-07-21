import React from 'react'
import {Navbar, Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
// import '../assets/css/style4css.css'
import bg1 from '../assets/images/bg1.png'

function Home() {
  return (
    <>
        <section className='mrg'>
            <Navbar className='bg-sm-light' expand='sm'>
                <Container>
                    <Link className='navbar-brand highlight fw-bold' to='/home'>Zwallet</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="d-flex p-3 p-md-0 flex-column flex-sm-row gap-3 ms-auto">
                            <Button>Login</Button>
                            <Button variant='secondary'>Sign Up</Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container as='main'>
                <Row className='flex-column-reverse flex-md-row h-100'>
                    <Col md={6} className='d-flex justify-content-center justify-content-md-start align-items-md-center pb-5 pb-m-0'>
                        <div className="max-text-w">
                            <h1>Awesome App For Saving <span className="highlight">Time.</span></h1>
                            <p>We bring you a mobile app for banking problems that oftenly wasting much of your times.</p>
                            <div>
                                <Button>Try it free</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className='d-flex justify-content-center justify-content-md-end'>
                        <img class="img-fluid max-on-sm" src={bg1} alt="phone-1" /> 
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Home