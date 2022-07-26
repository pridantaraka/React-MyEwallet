import React from 'react'
import {Link} from 'react-router-dom';
import { Grid, User, Plus, ArrowUp, LogOut } from "react-feather";


export default function SideMenu() {
    return(
        <>
            <section className="bg-white main-box p-md-5 d-md-block d-none h-100">
                <div className="d-flex flex-column h-100 justify-content-between">
                <div className="d-flex flex-column justify-content-end gap-5">
                <Link to='/dashboard' className="nav-link ms-3 my-1">
                        <div className="d-inline-flex flex-row sec-menu-p">
                            <div className="align-self-center px-2">
                                    <i data-feather="grid"></i>
                                <Grid />
                            </div>
                            <div><p className="mb-0">Dashboard</p></div>
                         </div>
                    </Link>
                    <Link to='/Searchpage' className="nav-link ms-3 my-1">
                            <div className="d-inline-flex flex-row sec-menu-p">
                                <div className="align-self-center px-2">
                                    <ArrowUp />
                                </div>
                                 <div><p className="mb-0">Transfer</p></div>
                             </div>
                        </Link>
                     <Link to='/Topup' className="nav-link ms-3 my-1">
                        <div className="d-inline-flex flex-row sec-menu-p">
                            <div className="align-self-center px-2">
                                <Plus />
                            </div>
                            <div><p className="mb-0">TopUp</p></div>
                        </div>
                     </Link>
                    <Link to='/profilepage' className="nav-link ms-3 my-1">
                        <div className="d-inline-flex flex-row sec-menu-p">
                            <div className="align-self-center px-2">
                                <User />
                            </div>
                               <div><p className="mb-0">Profile</p></div>
                        </div>
                     </Link>
                </div>
                   <Link to='/Home' className="nav-link ms-3 my-1">
                    <div className="d-flex">
                         <div className="d-inline-flex sec-menu-p">
                             <div className="align-self-center px-2">
                                <LogOut />
                            </div>
                            <div><p className="mb-0">Logout</p></div>
                        </div>
                    </div>
                </Link>
            </div>
           </section>
        </>
    )
}
                                