import React, { useState } from 'react';

const SearchBar = (props) => {

    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')

    const handleLocation = (event) => {
        console.log(setLocation)
        setLocation(event.target.value);
    };

    const handleCatergory = (event) => {
        console.log(setCategory)
        setCategory(event.target.value);
    };

    return ( 
        <div className='searchbar-container'>
            <form>
                <label className='search-location'>Choose Location</label>
                <select value={location} onChange={handleLocation}>
                    <option value='Dallas'>Dallas</option>
                    <option value='Richardson'>Richardson</option>
                    <option value='Fort Worth'>Fort Worth</option>
                </select>
                <label className='search-category'>Choose Category</label>
                <select value={category} onChange={handleCatergory}>
                    <option value='Vegan'>Vegan</option>
                    <option value='Vegetarian'>Vegetarian</option>
                </select>
                <button className='search-button'>Search</button>
            </form>
        </div>
     );
}
 
export default SearchBar;