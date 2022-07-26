import React from 'react'
import { useState } from 'react';
import {Button} from 'react-bootstrap';

export default function Modal() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return(
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title className='ps-2'>Enter PIN to Transfer</Modal.Title>
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
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        <div class="d-flex justify-content-end">
            <Button class="btn-confirm p-3 px-5" onClick={handleShow}>Continue</Button>
        </div>
        </>
    )
}