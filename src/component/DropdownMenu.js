import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from 'react-router-dom'

export default function DropdownMenu() {
    return(
        <>
        <DropdownButton title="Dropdown button" className="mw-100 d-md-none bg-white my-2 main-box d-flex justify-content-center">
            <Link to='/homepage'><Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item></Link>
            <Link to='/transfer'><Dropdown.Item href="#/action-2">Transfer</Dropdown.Item></Link>
            <Link to='/topup'><Dropdown.Item href="#/action-3">TopUp</Dropdown.Item></Link>                              
            <Link to='/profilepage'><Dropdown.Item href="#/action-3">Profile</Dropdown.Item></Link>                                
            <Link to='/home'><Dropdown.Item href="#/action-3">LogOut</Dropdown.Item></Link>                               
        </DropdownButton>
        </>
    )
}
