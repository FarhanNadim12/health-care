import React from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faHome, faSignInAlt, faSignOutAlt, faUser, faUserNurse, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Menubar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Menubar = () => {
    const { user, logOut } = useAuth();
    console.log(user.displayName);
    console.log(user);
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav d-flex">


                        <Link className="nav-link  menuItem" aria-current="page" to='/home'><FontAwesomeIcon icon={faHome} />Home</Link>
                        <Link to='/doctors' className='menuItem nav-link'><FontAwesomeIcon icon={faUserNurse} /> Doctors</Link>
                        <Link to='/about' className='menuItem nav-link'>
                            <FontAwesomeIcon icon={faUsers} />  About Us</Link>
                        <Link to='/register' className='menuItem nav-link'><FontAwesomeIcon icon={faUserPlus} /> Register</Link>
                        <Link to='/login' className='menuItem  nav-link'><FontAwesomeIcon icon={faSignInAlt} /> Log in</Link>



                        {
                            user?.email && <button className='logOutBtn' onClick={logOut}><FontAwesomeIcon icon={faSignOutAlt} />log out</button>
                        }

                        {
                            user?.displayName && <FontAwesomeIcon className='mt-3 ms-3' icon={faUser} />
                        }
                        <span className='me-2 mt-1 ms-2'> {user.displayName} </span>




                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Menubar;