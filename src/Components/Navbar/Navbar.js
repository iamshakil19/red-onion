import React from 'react';
import redOnionLogo from '../../images/logo2.png'
import shoppingCart from '../../images/cart.gif'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate()

    const navigateToLoginPage = () => {
        navigate("/login")
    }
    const navigateToHomePage = () => {
        navigate("/")
    }
    
    return (
        <div className='navbar-container'>
            <div>
                <img onClick={navigateToHomePage} className='w-32 cursor-pointer' src={redOnionLogo} alt="" />
            </div>
            <div className='flex items-center'>
                <img className='w-7 h-7 justify-center content-center cursor-pointer' src={shoppingCart} alt="" />
                <button onClick={navigateToLoginPage} className='login-button'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;