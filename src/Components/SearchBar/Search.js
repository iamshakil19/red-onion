import React from 'react';
import './Search.css'
const Search = () => {
    return (
        <div className='search-container'>
            <h2 className='searchBar-title'>Best food waiting for your belly</h2>

            <div className='flex items-center justify-center'>
                <input className='input-field' type="text" placeholder='Search Food Items' />
                <button className='search-button'>Search</button>
            </div>
        </div>
    );
};

export default Search;