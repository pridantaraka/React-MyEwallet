import React from 'react';
import { Dropdown} from 'react-bootstrap';
import { Bell } from "react-feather"

import innotif from '../assets/image/in-notif.png'
import outnotif from '../assets/image/out-notif.png'
import innotif1 from '../assets/image/in-notif1.png'
import outnotif1 from '../assets/image/out-notif1.png'

export default function Notif() {

    return(
        <>
        <Dropdown className='d-flex align-items-center justify-content-center'>
        <Dropdown.Toggle>
        <div className=''>
          <Bell />
        </div>
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <div className='box-main'>
              <div d-flex flex-column>
              <h5 className="p-confirm p-4 mb-0">Today</h5>
                    <div className="d-inline-flex flex-row p-3 boxconfirm align-content-center w-100">
                        <div className="d-inline-flex flex-column align-self-center px-2 ">
                            <img src={innotif} alt="img-notif"/>
                        </div>
                    </div>
              </div>
              <div className="d-inline-flex flex-row p-3 boxconfirm align-content-center w-100">
                        <div className="d-inline-flex flex-column align-self-center px-2 ">
                            <img src={outnotif} alt="img-notif"/>
                        </div>
                    </div>
                    <h5 className="p-confirm p-4 mb-0">This Week</h5>
                    <div className="d-inline-flex flex-row p-3 boxconfirm align-content-center w-100">
                        <div className="d-inline-flex flex-column align-self-center px-2 ">
                            <img src={innotif1} alt="img-notif"/>
                        </div>
                    </div>
                    <div className="d-inline-flex flex-row p-3 boxconfirm align-content-center w-100">
                        <div className="d-inline-flex flex-column align-self-center px-2 ">
                            <img src={outnotif1} alt="img-notif"/>
                        </div>
                    </div>
            </div>
          
        </Dropdown.Menu>
      </Dropdown>
        </>
    )
}
