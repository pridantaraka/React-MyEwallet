import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Header from '../component/Header';
import SideMenu from '../component/SideMenu';
import Footer from '../component/Footer';
import DropdownMenu from '../component/DropdownMenu';
// import { TopUp } from '../component/TopUp';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { TopupBalance } from '../redux/asyncActions/transfer';
import { Button, Form } from "react-bootstrap"
import { TopupSchema } from '../component/schemaValidation';


const InputTopup = ({errors, handleSubmit, handleChange, touched, values}) => {
    return(
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control 
                name = "input"
                type = "number"
                placeholder= "Rp. 0.0"
                onChange={handleChange}
                // value = {values.topup}
                isInvalid={errors.input}
                isValid={touched.input && !errors.input}
                />
                <Form.Control.Feedback type="invalid">{errors.input}</Form.Control.Feedback>
            </Form.Group>
            <div className='pt-3 ps-2'>
                <span className='p1-topup mb-0'>
                    Min Rp. 10.000
                </span>
            </div>
            <div className="my-5">
                <Button type="submit">
                    Submit
                </Button>
            </div>
        </Form>
        </>
    )
}


function Topup() {

    const topups = useSelector((state) => state.profile.token);
    const dispatch = useDispatch();

    const onClick = (value) => {
        const amount = { input: value.balance };
        dispatch(TopupBalance(amount));
    }

    // React.useEffect(() => {
    //     dispatch(TopupBalance())
    //   }, []);

    // const onSubmit = (value) => {
    //     const data = {}
    // }
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
                            <section class=" bg-white box-side main-box p-5">
                                <div class="d-flex flex-column gap-3">
                                    <Formik
                                    onSubmit={onClick}
                                    validationSchema={TopupSchema}
                                    initialValues={{ input: '' }}>
                                        {(props) => <InputTopup {...props} />}
                                    </Formik>
                                    {/* <TopUp /> */}
                                    {/* <InputTopup /> */}
                                    <h3 class="trans-his py-3">How To Top Up</h3>
                                    <div class="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
                                        <div class="d-flex flex-row align-self-center">
                                        <div class="d-inline-flex flex-row align-self-center px-2">
                                            <p class="p-topup pe-4 mb-0">1</p>
                                            <p class="p1-topup mb-0">Go to the nearest ATM or you can use E-Banking.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
                                        <div class="d-flex flex-row align-self-center">
                                        <div class="d-inline-flex flex-row align-self-center px-2">
                                            <p class="p-topup pe-4 mb-0">2</p>
                                            <p class="p1-topup mb-0">Type your security number on the ATM or E-Banking.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
                                        <div class="d-flex flex-row align-self-center">
                                        <div class="d-inline-flex flex-row align-self-center px-2">
                                            <p class="p-topup pe-4 mb-0">3</p>
                                            <p class="p1-topup mb-0">Select “Transfer” in the menu</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
                                        <div class="d-flex flex-row align-self-center">
                                        <div class="d-inline-flex flex-row align-self-center px-2">
                                            <p class="p-topup pe-4 mb-0">4</p>
                                            <p class="p1-topup mb-0">Type the virtual account number that we provide you at the top.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
                                        <div class="d-flex flex-row align-self-center">
                                        <div class="d-inline-flex flex-row align-self-center px-2">
                                            <p class="p-topup pe-4 mb-0">5</p>
                                            <p class="p1-topup mb-0">Type the amount of the money you want to top up.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
                                        <div class="d-flex flex-row align-self-center">
                                        <div class="d-inline-flex flex-row align-self-center px-2">
                                            <p class="p-topup pe-4 mb-0">6</p>
                                            <p class="p1-topup mb-0">Read the summary details</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
                                        <div class="d-flex flex-row align-self-center">
                                        <div class="d-inline-flex flex-row align-self-center px-2">
                                            <p class="p-topup pe-4 mb-0">7</p>
                                            <p class="p1-topup mb-0">Press transfer / top up</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
                                        <div class="d-flex flex-row align-self-center">
                                        <div class="d-inline-flex flex-row align-self-center px-2">
                                            <p class="p-topup pe-4 mb-0">8</p>
                                            <p class="p1-topup mb-0">You can see your money in Zwallet within 3 hours.</p>
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


export default Topup