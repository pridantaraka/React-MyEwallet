import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Container, Row, Col, Alert} from 'react-bootstrap'
import { useDispatch,useSelector } from "react-redux";
import DropdownMenu from '../component/DropdownMenu';
import SideMenu from '../component/SideMenu'
import Header from '../component/Header'
import Footer from '../component/Footer'
import EditProfile from '../component/EditProfile';
import { Formik } from 'formik';
import { EditSchema } from '../component/schemaValidation';
import { editProfile } from '../redux/asyncActions/profile';
import { resetMsg } from "../redux/reducers/profile";

function AddPhone() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state)=> state.auth.token);
    const successMsg = useSelector((state) => state.profile.successMsg);
    const errMsg = useSelector((state) => state.profile.errorMsg);

    const onUpdateProfile =(value)=>{
        const phoneForm = String('0' + value.phonenumber)
        const data = { fullname: value.fullname, phonenumber:phoneForm};
        dispatch(editProfile({data, token}))
    }
    React.useEffect(() => {
        if (successMsg) {
          alert(successMsg)
          navigate("/personalinfo", { state: { successMsg } });
          setTimeout(()=> dispatch(resetMsg()), 3000)
        }if(errMsg){
          alert('input failed please check your input')
          setTimeout(()=> dispatch(resetMsg()), 3000)
        }
      }, [navigate, successMsg]);
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
                                <div className="d-flex flex-column justify-content-center">
                                    <h3 className="trans-his py-2">Edit Profile</h3>
                                    <p className="p-confirm">Add at least one phone number for the transfer<br/>
                                        ID so you can start transfering your money<br/>
                                        to another user.</p>
                                    <div className="d-inline-flex flex-column justify-content-center align-self-center py-5 align-content-center">
                                        <Formik
                                        onSubmit={onUpdateProfile}
                                        validationSchema={EditSchema}
                                        initialValues={{fullname: '', phonenumber: ''}}>
                                            {(props) => <EditProfile {...props}/>}
                                        </Formik>
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


export default AddPhone