import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { KEY } from '../../localKey';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {DATA1} from '../../localBusinessdata';

const RestaurantPage = (props) => {

    const {businessid} = useParams();
    const [business, setBusiness] = useState(DATA1)
    console.log(business)
    

    
    
    
    

    useEffect (() => { 

        const config = {
            headers: {
              "Access-Control-Allow-Credentials": true,
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${KEY}`,
            },
          };


        const getBusiness = async () => {
            try {
                let response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${businessid}`, config);
                setBusiness(response.data)
            } catch (error) {
                console.log(error)
                
            }
        }
        //getBusiness()
    }, [businessid])

    

    return (
        <div className='restaurant-container'>
            <div className='restaurant'>
                <h1>{business.name}</h1>
                <img src={business.image_url} />
                <p>{business.location.display_address}</p>
                <p>{business.transactions}</p>
            </div>

        </div>

      );
}
 
export default RestaurantPage;