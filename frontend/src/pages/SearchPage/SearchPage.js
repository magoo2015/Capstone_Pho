import React, { useState, useEffect, useContext } from 'react';
import { DATA } from '../../localData';
import AuthContext from '../../context/AuthContext';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const SearchPage = () => {
    const { businesses } = useContext(AuthContext);


    return (
        <div>
            <div className='search-container'><SearchBar /></div>
            <div className='businesses'>
                {businesses && businesses.map((business) => {
                    return (
                        <div className='busi' key={business.id}>
                            <p>{business.name}</p>
                            <Link to={`/restaurantpage/${business.id}`}>
                            <img src={business.image_url} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default SearchPage;


