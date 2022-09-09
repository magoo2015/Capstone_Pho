import React, { useState, useEffect } from 'react';
import { DATA } from '../../localData';

const SearchPage = () => {
    const [businesses, setBusinesses] = useState(DATA);


    return (
        <div className='businesses'>
            {businesses && businesses.map((business) => {
                return (
                    <div className='busi' key={business.id}>
                        <p>{business.name}</p>
                        <img src={business.image_url} />
                    </div>
                )
            })}
        </div>
    );
}
 
export default SearchPage;

