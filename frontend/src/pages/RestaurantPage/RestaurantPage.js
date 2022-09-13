import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useParams } from 'react-router-dom';

const RestaurantPage = (props) => {

    const {businessid} = useParams();
    const {businesses} = useContext(AuthContext)

    return (
        <div className='restaurant-container'>
            <div className='restaurant'>
                <h1>{businessid}</h1>
            </div>

        </div>

      );
}
 
export default RestaurantPage;