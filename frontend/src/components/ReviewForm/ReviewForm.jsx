import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import Buttons from '../Buttons/Buttons';

const ReviewForm = (props) => {

    const [review, setReview] = useState('')
    const [user, token] = useAuth();
    const [resaurantReview, setRestaurantReview] = useState('')


    useEffect (() => {
        getReviews();
    },[props.businessid])



    async function getReviews(){
        const response = await axios.get(`http://127.0.0.1:8000/api/reviews/restaurant_reviews/${props.businessid}/`);
        console.log(response.data)
        setRestaurantReview(response.data)
    }


    async function handleSubmit(event){
        event.preventDefault();
        let newReview = {
            isliked: 0,
            isdisliked: 0,
            customer_id: 2,
            comment: review,
            restaurant_id: 5,
            yelp_id: props.businessid
        }
        let response = await axios.post("http://127.0.0.1:8000/api/reviews/new_review/", newReview, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        console.log(response.data)
    }
    return (
        <div className='review-form-container'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label className='review-submit'>Submit Review</label>
                <input type='text' className='review-input' value={review} onChange={(event) => setReview(event.target.value)}/>
                <button type='submit' className='review-button'>Submit</button>
            </form>
            <div className='button'>
                <Buttons />
            </div>
            <div className='restaurant-reviews'>
                {resaurantReview && resaurantReview.map((restaurant, index) => {
                    return (
                        <div className='rest-review' key={index}>
                            <p>{restaurant.comment}</p>
                        </div>
                    )
                })}
            </div>
        </div>
      );
}
 
export default ReviewForm;
