import React, { useState } from 'react';
import axios from 'axios';
import { GOOGLE } from '../../localKey';

const RestaurantMap = (props) => {

    const {latitude} = props.buisnessid.coordinates.latitude
    const {longitude} = props.buisnessid.coordinates.longitude

    return (
        <div className='restaurantmap'>
                <iframe className='rest-map' title='map'
                width="450"
                height="250"
                frameborder="0" style={{border:0}}
                referrerpolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/view?key=${GOOGLE}&center=32.97341541837739,-96.7003649`}>
                </iframe>
        </div>
        

      );
}
 
export default RestaurantMap;