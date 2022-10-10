import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectRecipient } from '../redux/reducers/user';


export default function ListUser ({id,picture, name, phone}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
    <div className="d-flex flex-row justify-content-between p-2 boxconfirm align-content-center">
        <div onClick={() => {
        dispatch(selectRecipient(id));
        navigate('/transfermoney');
        }} className="nav-link ms-3 my-1">
            <div className="d-flex flex-row align-self-center">
                <img src={picture} alt="profileimg" className='fluid'/>
                <div className="d-inline-flex flex-column align-self-center px-2">
                    <p className="p-user mb-0">{id}{name}</p>
                    <p className="p-info mb-0">{phone}</p>
                </div>
            </div>
        </div>
    </div>)
}
