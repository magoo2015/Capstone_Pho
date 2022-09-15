import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const ReviewForm = (props) => {

    const [review, setReview] = useState([])

    async function handleSubmit(event){
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
    return (  );
}
 
export default ReviewForm;
