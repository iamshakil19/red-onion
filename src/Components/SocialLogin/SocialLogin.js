import React from 'react';
import facebookLogo from '../../images/Login/facebook.png'
import googleLogo from '../../images/Login/google.png'
import githubLogo from '../../images/Login/github.png'
import './SocialLogin.css'


const SocialLogin = () => {
    return (
        <div className='socialLogin-container'>
            <img src={facebookLogo} alt="" />
            <img src={googleLogo} alt="" />
            <img src={githubLogo} alt="" />
        </div>
    );
};

export default SocialLogin;