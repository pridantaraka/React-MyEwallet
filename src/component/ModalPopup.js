import React from 'react'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Transfer } from '../redux/asyncActions/transfer';

export default function ModalPopup(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getTransfer = useSelector(state => state.transfer.dataTransfer);
    const token = useSelector((state) => state.auth.token);
    const pinUser = useSelector((state) => state.auth.pin);
    const date_time = `${getTransfer.date} ${getTransfer.time}`;

    const [form, setForm] = useState({ first: '', sec: '', third: '', fourth: '', fifth: '', sixth: '' });
    const handleChangeText = (e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
        };
    const onInputPin = (value) => {
        const pin = Object.values(form).join('');
        console.log('ini pin input', pin, 'ini user', pinUser);
         if (pin === pinUser) {
            console.log('trans fail');
            const data = {
                amount: getTransfer.amount,
                recipient_id: getTransfer.recipient_id,
                note: getTransfer.note,
                time_date: date_time,
              };
            dispatch(Transfer({data, token}));
            console.log('ini data', data, 'ini token', token);
            navigate('/statussuccess');
          } else {
             navigate('/statusfail');
          }
      };
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
                        <input name='first' maxlength="1" type="text" onChange={handleChangeText} className="w-100"/>
                    </div>
                    <div className="change-pin">
                        <input name='sec' maxlength="1" type="text" onChange={handleChangeText} className="w-100"/>
                    </div>
                    <div className="change-pin">
                        <input name='third' maxlength="1" type="text" onChange={handleChangeText} className="w-100"/>
                    </div>
                    <div className="change-pin">
                        <input name='fourth' maxlength="1" type="text" onChange={handleChangeText} className="w-100"/>
                    </div>
                    <div className="change-pin">
                        <input name='fifth' maxlength="1" type="text" onChange={handleChangeText} className="w-100"/>
                    </div>
                    <div className="change-pin">
                        <input name='sixth' maxlength="1" type="text" onChange={handleChangeText} className="w-100"/>
                    </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer className='modal-footer btn-modal'>
            <Button onClick={onInputPin} type='submit' className='btn-modal'>Confirm</Button>
            <Button onClick={props.onHide} type='submit' className='btn-modal'>Close</Button>
        </Modal.Footer>
        </Modal>
        </>
    )
}