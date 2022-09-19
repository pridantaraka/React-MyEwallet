import React from 'react'
import SamuelSuhi from '../assets/image/users/SamuelSuhi.png'

export default function Trans(picture, fullname, phonenumber) {
  return (
        <div class="d-flex flex-row justify-content-between p-4 boxconfirm align-content-center">
            <div class="nav-link ms-3 my-1">
                <div class="d-flex flex-row align-self-center">
                    <img src={SamuelSuhi} alt="profileimg" className='fluid'/>
                    <div class="d-inline-flex flex-column align-self-center px-2">
                        <p class="p-user mb-0">{fullname}</p>
                        <p class="p-info mb-0">{phonenumber}</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
