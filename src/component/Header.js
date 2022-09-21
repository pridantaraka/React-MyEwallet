import React from 'react'
// import { Bell } from "react-feather"
import { Nav } from 'react-bootstrap'
import Notif from './Notif'
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from '../redux/asyncActions/profile';
import {Link} from 'react-router-dom'

import RobertChandler from '../assets/image/users/RobertChandler.png'

export default function Header() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const profile = useSelector((state) => state.profile.data);

    React.useEffect(() => {
        dispatch(getProfile(token));
      }, []);
    return(
        <>
            <header className="bg-white h-box h-boxsh mw-100">
                <Nav className="d-flex flex-row justify-content-between">
                <div className="align-self-center ps-5 d-md-block d-none">
                    <Link to='/dashboard' className='nav-link'>
                       <span className='h-zwallet'>MyEwallet</span>
                    </Link>
                   </div>
                    <div className="d-flex flex-row p-4 pe-md-5">
                      <div className="align-self-center px-2">
                        <Link to='/profile' className='nav-link'>
                        <img src={RobertChandler} alt="img-profile"/>
                        </Link>
                       </div>
                    <div className="d-flex flex-column align-self-center px-2">
                        <p className="h-user mb-0">{profile.fullname?profile.fullname: "Username"}</p>
                        <p className="h-phone mb-0">{profile.phonenumber?profile.phonenumber: "Phone Number"}</p>
                    </div>
                        <Notif />
                </div>
                </Nav>
            </header>
        </>
    )
}