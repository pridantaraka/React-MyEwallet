import React from 'react'
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

export default function ModalPopup(props) {
    return(
        <>
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className="ps-2">
            Enter PIN to Transfer
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p class="p-confirm px-3">Enter your 6 digits PIN for confirmation to<br/>
             continue transferring money.</p>
             <div class="d-inline-flex flex-column justify-content-center w-100 align-self-center p-5 gap-3 align-content-center">
                <div class="d-flex flex-row gap-md-5">
                    <div class="d-flex flex-row gap-md-4">
                        <div class="change-pin">
                            <input maxlength="1" type="text" class="w-100"/>
                        </div>
                        <div class="change-pin">
                            <input maxlength="1" type="text" class="w-100"/>
                        </div>
                        <div class="change-pin">
                            <input maxlength="1" type="text" class="w-100"/>
                        </div>
                        <div class="change-pin">
                            <input maxlength="1" type="text" class="w-100"/>
                        </div>
                        <div class="change-pin">
                            <input maxlength="1" type="text" class="w-100"/>
                        </div>
                           <div class="change-pin">
                               <input maxlength="1" type="text" class="w-100"/>
                           </div>
                       </div>
                   </div>
               </div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
        </>
    )
}