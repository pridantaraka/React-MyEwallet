import Dropdown from 'react-bootstrap/Dropdown';
import { Menu } from "react-feather"
import {Link} from 'react-router-dom'

export default function DropdownMenu() {
    return(
        <>
        <div className="mw-100 d-md-none my-2 d-md-none">                 
        <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" size="sm" className='w-100 d-flex justify-content-center main-box box-dropdown'>
            <Menu />Menu
        </Dropdown.Toggle>

        <Dropdown.Menu className='w-100 text-center'>
            <Link to='/dashboard' className='nav-link'><Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item></Link>
            <Link to='/searchpage' className='nav-link'><Dropdown.Item href="#/action-2">Transfer</Dropdown.Item></Link>
            <Link to='/topup' className='nav-link'><Dropdown.Item href="#/action-3">TopUp</Dropdown.Item></Link>                              
            <Link to='/profile' className='nav-link'><Dropdown.Item href="#/action-4">Profile</Dropdown.Item></Link>                                
            <Link to='/' className='nav-link'><Dropdown.Item href="#/action-5">LogOut</Dropdown.Item></Link>      
        </Dropdown.Menu>
        </Dropdown>
        </div>
        </>
    )
}
