import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {Container, Row, Col, Button, Alert, Form} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/asyncActions/auth";
// import { Mail } from "react-feather";
import {Formik} from 'formik'
// import * as Yup from 'yup'

import SideAuth from '../component/SideAuth';

// const loginSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email address format').required('Required'),
//     password: Yup.string().min(4).required('Required')
//   })

const AuthForm = ({values, errors, handleSubmit, handleChange})=> {
    const successMsg = useSelector((state) => state.auth.successMsg);
    const errorMsg = useSelector((state) => state.auth.errorMsg);
    return(
      <>
        {successMsg && <Alert variant="success">{successMsg}</Alert>}
        {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
        <Form noValidate onSubmit={handleSubmit} onChange={handleChange}> {/** INI PENTING */}
          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control 
            name="email" 
            type="email" 
            onChange={handleChange}
            value={values.email}
            placeholder="Enter email" 
            isInvalid={!!errors.email} />  {/** INI PENTING */}
            {/* <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control 
            name="password" 
            type="password"
            onChange={handleChange} 
            value={values.password}
            placeholder="Password" 
            isInvalid={!!errors.password} />  {/** INI PENTING */}
            {/* <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback> */}
          </Form.Group>
            <div className="text-end pb-5">
                <Link to="/forgetpwd">Forgot Password?</Link>
            </div>
            <div className="d-grid">
            <Button className='w-100 auth-btn' type='submit'>Login</Button>
            </div>
        </Form>  {/** INI PENTING */}
      </>
    )
  }

function Login() {
    // const location = useLocation();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    const onLogin = (value) => {
        const data = { email: value.email, password: value.password };
        dispatch(login(data));
      };
    
      React.useEffect(() => {
        if (token) {
          navigate("/dashboard");
        }
      }, [navigate, token]);
    // const onLogin = (val) => {
    //     if(val.email === 'a@mail.com' && val.password === '1234'){
    //         console.log(val.email === 'a@mail.com');
    //         window.alert('Login success')
    //         localStorage.setItem("auth", "randomToken");
    //         navigate("/dashboard");
    //       }else{
    //         window.alert('Login Failed')
    //       }
    // };

    return(
        <>
            <Container className='mw-100 min-vh-100'>
                <Row>
                    <Col md={7} className="auth-r-bg">
                        <SideAuth />
                    </Col>
                    <Col md={5}>
                    <section className="auth-pad d-flex flex-column gap-5"> 
                        <div>
                            <div class="auth-ewallet d-flex flex-column align-items-center mb-3 d-md-none">
                                <span className='auth-res auth-alltext'>MyEwallet</span>
                            </div>
                            <h1 className="auth-h1">Start Accessing Banking Needs
                                With All Devices and All Platforms
                                With 30.000+ Users</h1>
                            <div className="pt-5">
                            <p className="auth-ptext">Transfering money is eassier than ever, you can access
                            MyEwallet wherever you are. Desktop, laptop, mobile
                                phone? we cover all of that for you!</p>    
                            </div>
                        </div>
                        {/* <div className="input-group flex-nowrap">
                            <span className="input-group-text auth-icon-wr">
                                <i data-feather="mail"></i>
                                <Mail />
                            </span>
                            <input type="email" className="form-control auth-input" placeholder="Enter your e-mail"/>
                        </div>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text auth-icon-wr">
                                <i data-feather="lock"></i>
                                <Lock />
                            </span>
                            <input type="password" className="form-control auth-input" placeholder="Enter your password"/>
                            <span className="input-group-text auth-icon-wr">
                            </span>
                        </div> */}
                            {/* {location.state?.errorMsg && (
                            <Alert variant="danger">{location.state.errorMsg}</Alert>
                            )} */}
                            {/* <Formik
                            onSubmit={onLogin}
                            initialValues={{email: '', password: ''}}>
                            {(props)=><AuthForm {...props} />}
                            </Formik> */}
                            <Formik onSubmit={onLogin} 
                            initialValues={{ email: "", password: "" }}>
                                {(props) => <AuthForm {...props} />}
                            </Formik>
                            <div className="text-center">
                            <span>Don`t have an account? Let`s <Link to="/signup">SignUp</Link></span>
                            </div>
                    </section>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login