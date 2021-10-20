import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Menubar.css'
const Menubar = () => {
    const { user, logOut } = useAuth();
    console.log(user.displayName);
    console.log(user);
    return (
        <div>
            <nav className='d-flex justify-content-around'>
                <div>
                    <Link to='/home' className='menuItem'>Home</Link>
                    <Link to='/doctors' className='menuItem'>Doctors</Link>
                    <Link to='/about' className='menuItem'>About Us</Link>
                    <Link to='/register' className='menuItem'>Register</Link>
                    <Link to='/login' className='menuItem'>Log in</Link>
                </div>
                <div>
                    <span className='me-2'>{user.displayName}</span>
                    {
                        user?.email &&
                        <button onClick={logOut}>log out</button>


                    }
                </div>
            </nav>
        </div>
    );
};

export default Menubar;