import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { logIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleLogIn = (e) => {
        logIn(email, password);
        e.preventDefault();
    }

    return (

        <div>
            <div className='form-container'>
                <h3 className='mb-3'>Log In Here</h3>
                <form onSubmit={handleLogIn}>
                    <input onBlur={handleEmail} type="email" name="" id="" placeholder='Enter Email' required /><br />

                    <input onBlur={handlePassword} type="password" name="" id="" placeholder='Enter Password' required /><br />
                    <input type="submit" value="Log In" />
                </form>

                <p>didn't registered yet?? <Link to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;