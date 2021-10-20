import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const { createUserWithEmail } = useAuth();
    const [email, setEmail] = useState('');
    const [pass, setPss] = useState('');
    const [userName, setUserName] = useState('');
    const { signinUsingGoogle } = useAuth();
    const [error, setError] = useState('');
    const handleNameChange = e => {
        setUserName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPss(e.target.value);
    }
    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(pass);
        if (pass.length < 6) {
            setError('password should be at least 6 character')
            return;
        }

        createUserWithEmail(email, pass, userName)


    }
    return (

        <div>

            <div className='form-container'>
                <h3 className='mb-3'>Register Here</h3>
                <form onSubmit={handleRegistration} a>
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder='Enter Email' required /><br />
                    <input onBlur={handleNameChange} type="text" name="" id="" placeholder='Enter User Name' required /><br />
                    <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder='Enter Password' required /><br />

                    <input type="submit" value="Register" />
                </form>
                <div>---------Or-------</div>
                <button onClick={signinUsingGoogle} className='googleSignin'>Register With Google</button>
                <p>Already Registered?? <Link to='/login'>Log In</Link> </p>
                <p className='text-danger'>{error}</p>
            </div>

        </div>
    );
};

export default Register;