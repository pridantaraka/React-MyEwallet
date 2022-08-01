import React from 'react'
// import {Link} from 'react-router-dom';
import {Container, Row, Col, Button, Form, Alert} from 'react-bootstrap'
// import { Mail, Lock, User } from "react-feather";
import {Formik} from 'formik'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/asyncActions/auth";

import SideAuth from '../component/SideAuth';


const SignupForm = ({values, errors, handleSubmit, handleChange})=> {
      const navigate = useNavigate();
      const successMsg = useSelector((state) => state.auth.successMsg);
      const errorMsg = useSelector((state) => state.auth.errorMsg);

      React.useEffect(() => {
        if (successMsg) {
          navigate("/login", { state: { successMsg } });
        }
      }, [navigate, successMsg]);
        return(
      <>
        <Form noValidate onSubmit={handleSubmit} onChange={handleChange}> {/** INI PENTING */}
          {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control 
            name="username" 
            type="username" 
            value={values.username}
            onChange={handleChange} 
            placeholder="Enter username" 
            isInvalid={!!errors.email} />  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control 
            name="email"  
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter email" 
            isInvalid={!!errors.email} />  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control 
            name="password" 
            type="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password" 
            isInvalid={!!errors.password} />  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>
          <div className="d-grid">
            <Button className='w-100 auth-btn' type='submit'>confirm</Button>
            </div>
            <div className="text-center">
            <span>Already have an account? Let`s <Link to="/login">Login</Link></span>
          </div>
        </Form>  {/** INI PENTING */}
      </>
    )
  }

function Signup() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const onSignup = (value) => {
    dispatch(register(value));
  };

  React.useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate, token]);

    return(
    <>
        <Container className='mw-100 min-vh-100'>
            <Row>
                <Col md ={7} className='auth-r-bg'>
                    <SideAuth />
                </Col>
                <Col md ={5}>
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
                        MyEwallet wherever you are. Desktop, laptop, mobile phone? 
                        we cover all of that for you!</p>    
                        </div>
                    </div>
                    {/* <div className="input-group flex-nowrap">
                        <span className="input-group-text auth-icon-wr">
                            <User />
                        </span>
                        <input type="email" className="form-control auth-input" placeholder="Enter your username"/>
                    </div>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text auth-icon-wr">
                            <Mail />
                        </span>
                        <input type="email" className="form-control auth-input" placeholder="Enter your e-mail"/>
                    </div>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text auth-icon-wr">
                            <Lock />
                        </span>
                        <input type="password" className="form-control auth-input" placeholder="Enter your password"/>
                        <span className="input-group-text auth-icon-wr">
                        </span>
                    </div> */}
                    <Formik
                            onSubmit={onSignup}
                            initialValues={{username: "", email: "", password: ""}}>
                            {(props)=><SignupForm {...props} />}
                            </Formik>
                    
                </section>
                </Col>
            </Row>
        </Container>
    </>
    )
}

export default Signup