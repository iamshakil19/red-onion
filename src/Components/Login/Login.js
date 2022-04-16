import React from 'react';
import './Login.css'
import loginImage from '../../images/Login/login.jpg'
import MailLogo from '../../images/Login/mail.png'
import LockLogo from '../../images/Login/lock.png'
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import PasswordEyeLogo from '../../images/Login/eye.png';


const Login = () => {

    return (
        <div className='login-container'>
            <div>
                <img className='login-illustration' src={loginImage} alt="" />
            </div>
            <form className='form-container'>
                <h2 className='text-center font-bold text-3xl mb-5'>Login</h2>
                <div className='Inputs-container'>
                    <p className='email-password-text'>Email</p>
                    <div className='flex items-center inputImg'>
                        <img src={MailLogo} alt="" />
                        <input className='input-style' type="email" name="email" id="email" placeholder='Type your email' />
                    </div>
                    <hr />

                    <p className='email-password-text mt-5'>Password</p>
                    <div className='flex items-center inputImg relative'>
                        <img src={LockLogo} alt="" />
                        <input className='input-style' type="password" name="" id="password" placeholder='Type your password' />
                        <img className='absolute right-5 cursor-pointer' src={PasswordEyeLogo} alt="" />
                    </div>
                    <hr />

                    <div className='md:flex justify-between my-5'>
                        <div>
                            <p>New in Red Onion ? <Link className='text-blue-500' to="/signUp">Please SignUp</Link> </p>
                        </div>
                        <div className='forgot-password'>
                            <Link className='text-blue-500'  to="/">Forgot Password?</Link>
                        </div>
                    </div>
                    <input className='login-btn' type="submit" value="Login" />
                    <p className='text-center'>Or login with</p>
                </div>
                <SocialLogin></SocialLogin>
            </form>

        </div>
    );
};

export default Login;