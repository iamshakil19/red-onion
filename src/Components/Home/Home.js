import React from 'react';
import Breakfast from '../Breakfast/Breakfast';
import FoodTime from '../FoodTime/FoodTime';
import Search from '../SearchBar/Search';

const Home = () => {
    return (
        <div>
            <Search></Search>
            <FoodTime></FoodTime>
        </div>
    );
};

export default Home;