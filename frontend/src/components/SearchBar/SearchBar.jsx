import axios from "axios";
import React, { useState, useContext } from "react";
import { KEY } from "../../localKey";
import AuthContext from "../../context/AuthContext";

const SearchBar = (props) => {
  const { businesses, setBusinesses } = useContext(AuthContext);
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleCatergory = (event) => {
    setCategory(event.target.value);
  };

  const config = {
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${KEY}`,
    },
  };

  async function handleSubmit(event) {
    event.preventDefault();
    let response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=PHO&location=${location}&categories=${category}`,
      config
    );
    setBusinesses(response.data.businesses);
  }

  console.log(location);
  return (
    <div className="searchbar-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="search-location">Choose Location</label>
        <select value={location} onChange={handleLocation}>
          <option value="Dallas">Dallas</option>
          <option value="Richardson">Richardson</option>
          <option value="Fort Worth">Fort Worth</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Miami">Miami</option>
          <option value="Austin">Austin</option>
        </select>
        <label className="search-category">Choose Category</label>
        <select value={category} onChange={handleCatergory}>
          <option value="Vegan">Vegan</option>
          <option value="Vegetarian">Vegetarian</option>
        </select>
        <input className="search-button" type="submit" value="Search" />
      </form>

    </div>
  );
};

export default SearchBar;
