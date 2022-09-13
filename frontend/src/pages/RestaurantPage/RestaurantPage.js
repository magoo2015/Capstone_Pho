import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { KEY } from '../../localKey';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RestaurantPage = (props) => {

    const {businessid} = useParams();
    const {business, setBusiness} = useState({})
    console.log(business)

    const config = {
        headers: {
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${KEY}`,
        },
      };

    useEffect (() => {
        const getBusiness = async () => {
            try {
                let response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${businessid}`, config);
                setBusiness(response.data)
            } catch (error) {
                console.log(error)
                
            }
        }
        getBusiness()
    }, [businessid])

    

    return (
        <div className='restaurant-container'>
            <div className='restaurant'>
                <h1>{businessid}</h1>
            </div>

        </div>

      );
}
 
export default RestaurantPage;