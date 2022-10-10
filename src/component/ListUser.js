import React from 'react'
import {Link} from 'react-router-dom';

export default function ListUser ({picture, name, phone}) {
    return (<div className="d-flex flex-row justify-content-between p-2 boxconfirm align-content-center">
        <Link to='/transfermoney' className="nav-link ms-3 my-1">
            <div className="d-flex flex-row align-self-center">
                <img src={picture} alt="profileimg" className='fluid'/>
                <div className="d-inline-flex flex-column align-self-center px-2">
                    <p className="p-user mb-0">{name}</p>
                    <p className="p-info mb-0">{phone}</p>
                </div>
            </div>
        </Link>
    </div>)
}
