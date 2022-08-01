import React from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom';
import { Grid, User, Plus, ArrowUp, LogOut } from "react-feather";



export default function SideMenu() {
    
    // const location = useLocation();
    const navigate = useNavigate();
    const onLogout = () => {
        localStorage.removeItem("auth");
        navigate("/");
    };
    return(
        <>
            <section className="bg-white main-box p-md-5 d-md-block d-none h-100">
                <div className="d-flex flex-column h-100 justify-content-between">
                <div className="d-flex flex-column justify-content-end gap-5">
                    
                <NavLink to='/dashboard'  className="nav-link ms-3 my-1">
                        <div className="d-inline-flex flex-row sec-menu-p">
                            <div className="align-self-center px-2">
                                    <i data-feather="grid"></i>
                                <Grid />
                            </div>
                            <div><p className="mb-0">Dashboard</p></div>
                         </div>
                    </NavLink>
                    <Link to='/searchpage' className="nav-link ms-3 my-1">
                            <div className="d-inline-flex flex-row sec-menu-p">
                                <div className="align-self-center px-2">
                                    <ArrowUp />
                                </div>
                                 <div><p className="mb-0">Transfer</p></div>
                             </div>
                        </Link>
                     <Link to='/topup' className="nav-link ms-3 my-1">
                        <div className="d-inline-flex flex-row sec-menu-p">
                            <div className="align-self-center px-2">
                                <Plus />
                            </div>
                            <div><p className="mb-0">TopUp</p></div>
                        </div>
                     </Link>
                    <Link to='/profile' className="nav-link ms-3 my-1">
                        <div className="d-inline-flex flex-row sec-menu-p">
                            <div className="align-self-center px-2">
                                <User />
                            </div>
                               <div><p className="mb-0">Profile</p></div>
                        </div>
                     </Link>
                </div>
                   <Link to='/' className="nav-link ms-3 my-1">
                    <div className="d-flex">
                         <div className="d-inline-flex sec-menu-p" onClick={onLogout}>
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
                                