import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import useAuth from '../../hooks/useAuth';
import { KEY } from '../../localKey';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {DATA1} from '../../localBusinessdata';
import ReviewForm from '../../components/ReviewForm/ReviewForm';


const RestaurantPage = (props) => {

    const {businessid} = useParams();
    const [business, setBusiness] = useState(DATA1)
    const [user, token] = useAuth();
   // console.log(business)
   
    

    

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
        //postRestaurant()
        getReviews()
        //postReviews()
    }, [businessid])

    async function getReviews(){
        const response = await axios.get(`http://127.0.0.1:8000/api/reviews/restaurant_reviews/${businessid}/`);
        console.log(response.data)
    }

    async function postRestaurant(){
        let newRestaurant = {
            pho_restaurant_id: businessid,
            name: business.name,
            isVegan: true,
            isVegetarian: true,
            isDelivery: true,
            isPickup: true,
            city: business.location.city,
            state: business.location.state,
            zip: business.location.zip_code
        }
        let response = await axios.post("http://127.0.0.1:8000/api/restaurants/", newRestaurant);
        console.log(response.data)

    }

    async function postReviews(text){
        let newReview = {
            isliked: 0,
            isdisliked: 0,
            customer_id: 2,
            comment: "Amazing",
            restaurant_id: 5,
            yelp_id: businessid
        }
        let response = await axios.post("http://127.0.0.1:8000/api/reviews/new_review/", newReview, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        console.log(response.data)

    }



    return (
        <div className='restaurant-container'>
            <div className='restaurant'>
                <h1>{business.name}</h1>
                <img src={business.image_url} />
                <p>{business.location.display_address}</p>
                <p>{business.coordinates.latitude}</p>
                <p>{business.coordinates.longitude}</p>
            </div>
            <div>
                <ReviewForm businessid = {businessid} />
            </div>
        </div>

      );
}
 
export default RestaurantPage;