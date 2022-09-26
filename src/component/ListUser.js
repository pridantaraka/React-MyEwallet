import React from 'react'
import {Link} from 'react-router-dom';

export function ListUser(picture, name, phone) {
    <div class="d-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
        <Link to='/transfermoney' class="nav-link ms-3 my-1">
            <div class="d-flex flex-row align-self-center">
                <img src={picture} alt="profileimg" className='fluid'/>
                <div class="d-inline-flex flex-column align-self-center px-2">
                    <p class="p-user mb-0">{name}</p>
                    <p class="p-info mb-0">{phone}</p>
                </div>
            </div>
        </Link>
    </div>
}
