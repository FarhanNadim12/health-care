import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='header row d-flex align-item-center'>
                <div className='content col-md-6  '>
                    <h1 className='mb-3'>Health <span>Point</span></h1>
                    <h4>Highly Experienced Doctors <br /> In Your City </h4>
                    <button>About Us</button>
                </div>
            </div>

        </div>
    );
};

export default Header;