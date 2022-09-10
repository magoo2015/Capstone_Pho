import React, { useState } from 'react';

const SearchBar = (props) => {

    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')

    return ( 
        <div className='searchbar-container'>
            <form>
                <label className='search-location'>Choose Location</label>
                <select name='locations' id='locations'>
                    <option value={location}>Dallas</option>
                    <option value={location}>Richardson</option>
                    <option value={location}>Fort Worth</option>
                </select>
                <label className='search-category'>Choose Category</label>
                <select>
                    <option value={category}>Vegan</option>
                    <option value={category}>Vegetarian</option>
                </select>
            </form>
        </div>
     );
}
 
export default SearchBar;