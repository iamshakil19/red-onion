import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './FoodTime.css'
const FoodTime = () => {
    return (
        <div className='foodTime-container flex justify-center'>
            <CustomLink to="/breakfast">Breakfast</CustomLink>
            <CustomLink to="/">Lunch</CustomLink>
            <CustomLink to="/dinner">Dinner</CustomLink>
        </div>
    );
};

export default FoodTime;