import React from 'react'
// import { Bell } from "react-feather"
import { Nav } from 'react-bootstrap'
import Notif from './Notif'
import { useSelector } from "react-redux";

import RobertChandler from '../assets/image/users/RobertChandler.png'

export default function Header() {
    const addnumber = useSelector((state) => state.add.value);
    return(
        <>
            <header className="bg-white h-box h-boxsh mw-100">
                <Nav className="d-flex flex-row justify-content-between">
                <div className="h-zwallet align-self-center ps-5 d-md-block d-none">
                       <span>MyEwallet</span>
                   </div>
                    <div className="d-flex flex-row p-4 pe-md-5">
                      <div className="align-self-center px-2">
                    <img src={RobertChandler} alt="img-profile"/>
                       </div>
                    <div className="d-flex flex-column align-self-center px-2">
                        <p className="h-user mb-0">Robert Chandler</p>
                        <p className="h-phone mb-0">+62 {addnumber}</p>
                    </div>
                        <Notif />
                </div>
                </Nav>
            </header>
        </>
    )
}