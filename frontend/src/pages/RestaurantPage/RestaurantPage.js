import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import useAuth from "../../hooks/useAuth";
import { KEY } from "../../localKey";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DATA1 } from "../../localBusinessdata";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import { GOOGLE } from "../../localKey";

const RestaurantPage = (props) => {
  const { businessid } = useParams();
  //const businessid = "pgitOnp8rmmuc6sJYRLNEA"
  const [business, setBusiness] = useState({}); //change to DATA1 to local data
  const [addRestaurant, setAddRestaurant] = useState({});
  const [user, token] = useAuth();
  //console.log(user);
  console.log(businessid)
  console.log(business)
  console.log(addRestaurant)
  


  const config = {
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${KEY}`,
    },
  };

  const getBusiness = async () => {
    try {
      let response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${businessid}`,
        config
      );
      //console.log(response.data);
      setBusiness(response.data)
      postRestaurant(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  async function postRestaurant(bus) {
    
    console.log("Business: ", bus)
    
    let newRestaurant = {
      pho_restaurant_id: businessid,
      name: bus.name,
      isVegan: true,
      isVegetarian: true,
      isDelivery: true,
      isPickup: true,
      city: bus.location.city,
      state: bus.location.state,
      zip: bus.location.zip_code,
      likes:0
    };
    console.log("Restaurant Info: ", newRestaurant)
    let response = await axios.post(
      "http://127.0.0.1:8000/api/restaurants/",
      newRestaurant
    );
    console.log(response.data);
    setAddRestaurant(response.data)
  }


  useEffect(() => {
    getBusiness();
    // postRestaurant();
  }, [businessid]);



  return (
    <div className="restaurant-container">
      {business.location && (
        <div className="restaurant">
          <h1>{business.name}</h1>
          <img src={business.image_url} alt="Restaurant" />
          <p>
          <label>Address </label>
            {business.location.display_address[0]}{" "}
            {business.location.display_address[1]}
          </p>
          {/* <p>{business.address1}</p> */}
          <p>{business.transactions[0]}{" "}
              {business.transactions[1]}
          </p>
          <div className="map">
            <iframe
              className="rest-map"
              title="map"
              width="450"
              height="250"
              frameBorder="0"
              style={{ border: 0 }}
              referrerPolicy="no-referrer"
              src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE}&q=${business.coordinates.latitude},${business.coordinates.longitude}`}
            ></iframe>
          </div>
        </div>
      )}
      <div className="reviewform">
        <ReviewForm businessid={businessid} business={business} addRestaurant={addRestaurant} />
      </div>
    </div>
  );
};

export default RestaurantPage;
