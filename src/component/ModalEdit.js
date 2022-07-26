import React from 'react'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';

export default function ModalEdit(props) {
    return(
        <>
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton className='modal-header'>
            <Modal.Title id="contained-modal-title-vcenter" className="ps-2">
            Enter PIN to Transfer
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className="p-confirm px-3">Enter your 6 digits PIN for confirmation to<br/>
             continue transferring money.</p>
             <div className="d-inline-flex flex-column justify-content-center w-100 align-self-center p-5 gap-3 align-content-center">
                <div className="d-flex flex-row gap-md-5">
                    <div className="d-flex flex-row gap-md-4">
                        <div className="change-pin">
                            <input maxlength="1" type="text" className="w-100"/>
                        </div>
                        <div className="change-pin">
                            <input maxlength="1" type="text" className="w-100"/>
                        </div>
                        <div className="change-pin">
                            <input maxlength="1" type="text" className="w-100"/>
                        </div>
                        <div className="change-pin">
                            <input maxlength="1" type="text" className="w-100"/>
                        </div>
                        <div className="change-pin">
                            <input maxlength="1" type="text" className="w-100"/>
                        </div>
                           <div className="change-pin">
                               <input maxlength="1" type="text" className="w-100"/>
                           </div>
                       </div>
                   </div>
               </div>
        </Modal.Body>
        <Modal.Footer className='modal-footer btn-modal'>
            <Link to='/statussuccess'><Button onClick={props.onHide} className=''>Confirm</Button></Link>
            <Link to='/statusfail'><Button onClick={props.onHide} className='btn-modal'>Close</Button></Link>
        </Modal.Footer>
        </Modal>
        </>
    )
}