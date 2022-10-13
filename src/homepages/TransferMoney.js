import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {Container, Row, Col, Button, Form} from 'react-bootstrap'
import { Edit} from "react-feather";
import SideMenu from '../component/SideMenu'
import Header from '../component/Header'
import Footer from '../component/Footer'
import DropdownMenu from '../component/DropdownMenu';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { getUserById } from '../redux/asyncActions/user';
import { inputAmount } from '../redux/reducers/transfer';

import SamuelSuhi from '../assets/image/users/SamuelSuhi.png'

export const TransaksiSchema = Yup.object().shape({
    amount: Yup.number().min(10000, 'Minnimal input Rp.10.000').required('Required')
})

const FormTransaksi = ({handleSubmit,handleChange,values,errors}) =>{
    return(
        <>
            <Form onSubmit={handleSubmit}>
            <div className='d-flex align-items-center flex-column gap-3 mt-5'>
                <Form.Group className='input-money'>
                    <Form.Control name='amount' type='number' placeholder='0.00'
                    onChange={handleChange}
                    value={values.amount}
                    isInvalid={!!errors.amount} />
                    <Form.Control.Feedback type='invalid'>{errors.amount}</Form.Control.Feedback>
                </Form.Group>
                <div>
                    <p className="p-info mb-0 py-3">Rp.120.000 Aveliable</p>
                </div>
                <Form.Group className='input-notes'>
                    <Form.Control name='note' type='text' placeholder='Add notes'
                    onChange={handleChange}
                    value={values.note}
                    />
                </Form.Group>
                <Button type='submit' className='btn-box'>Submit</Button>
                </div>
            </Form>
        </>
    )
}


function TransferMoney() {
    var currentdate = new Date();
    var date =
        currentdate.getDate() +
        '-' +
        (currentdate.getMonth() + 1) +
        '-' +
        currentdate.getFullYear();

    var time =
        currentdate.getHours() +
        ':' +
        currentdate.getMinutes() +
        ':' +
        currentdate.getSeconds();
    
    const type_id = 1;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const recipient_id = useSelector(state => state.transfer.getIdUser)
    const id_recipient = recipient_id.recipient_id;
    const recipient = useSelector(state => state.user.dataRecipient)
    const token = useSelector((state) => state.auth.token);

    const onInputAmount = (value) => {
        const data = { amount: value.amount, note: value.note, date, time, type_id };
        //  console.log(data);
        dispatch(inputAmount(data));
        navigate('/confirmation');
      };

    React.useEffect(() => {
        dispatch(getUserById({token, id_recipient}));
      }, [id_recipient]);

    return(
        <>
        <Container className='mw-100 min-vh-100 bg-homepg'>
            <Row>
                <Header />
                <main>
                    <Container>
                        <Row>
                            <Col md ={12} className="d-flex flex-row justify-content-center gap-2 mx-0 px-0 mt-4 mb-4 w-100">
                            <Col md={3}>
                                <SideMenu />
                            </Col>
                            <Col md={9}>
                            <DropdownMenu />
                            <section className="bg-white box-side main-box p-5">
                            <div className='d-flex flex-column gap-3'>
                                <div>
                                    <h3 className="trans-his py-2">Transfer Money</h3>
                                </div>
                                <div className="d-inline-flex flex-row justify-content-between p-4 boxconfirm align-content-center w-100">
                                    <div className="d-flex flex-row align-self-center">
                                    <img src={SamuelSuhi} alt="profileimg" className='fluid'/>
                                        <div className="d-inline-flex flex-column align-self-center px-2">
                                            <p className="p-user mb-0">{recipient.fullname}</p>
                                            <p className="p-info mb-0">{recipient.phonenumber}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="p-info mb-0 py-3">Type the amount you want to transfer and then<br/>
                                    press continue to the next steps.</p>
                                </div>
                                <Formik
                                onSubmit={onInputAmount}
                                initialValues={{amount: '', note: ''}}
                                validationSchema={TransaksiSchema}>
                                    {(props)=> <FormTransaksi {...props}/>}
                                </Formik>
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

export default TransferMoney