import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { ArrowRight } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../redux/asyncActions/profile";
import { logout } from "../redux/reducers/auth";

export default function MenuProfile() {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);

    const onLogout = () => {
        dispatch(logout());
        navigate("/login");
      };
      
  return (
    <div>
    <Link to='/personalinfo' className='nav-link ms-3 my-1 text-hover p-confirm d-flex justify-content-center'>
    <div className="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-self-center w-50">
        <div className="d-inline-flex flex-column align-self-center">
            <p className="p-confirm mb-0">Personal Information</p>
        </div>
        <div className="align-self-center">
            <div className="align-self-center px-2 p-confirm">
                <ArrowRight />
            </div>
        </div>
    </div>
    </Link>
    <Link to='/changepwd' className='nav-link ms-3 my-1 text-hover p-confirm d-flex justify-content-center'>
    <div className="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-self-center w-50">
        <div className="d-inline-flex flex-column align-self-center">
            <p className="p-confirm mb-0">Change Password</p>
        </div>
        <div className="align-self-center">
            <div className="align-self-center px-2 p-confirm">
                <ArrowRight />
            </div>
        </div>
    </div>
    </Link>
    <Link to='/changepin' className='nav-link ms-3 my-1 text-hover p-confirm d-flex justify-content-center'>
    <div className="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-self-center w-50">
        <div className="d-inline-flex flex-column align-self-center">
            <p className="p-confirm mb-0">Change Pin</p>
        </div>
        <div className="align-self-center">
            <div className="align-self-center px-2 p-confirm">
                <ArrowRight />
            </div>
        </div>
    </div>
    </Link>
    <Link to='/' className='nav-link ms-3 my-1 text-hover p-confirm d-flex justify-content-center'>
    <div className="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-self-center w-50">
        <div className="d-inline-flex flex-column align-self-center" onClick={onLogout}>
            <p className="p-confirm mb-0">Logout</p>
        </div>
        <div className="align-self-center">
            <div className="align-self-center px-2 p-confirm">
                <ArrowRight />
            </div>
        </div>
    </div>
    </Link>
    </div>
  )
}
