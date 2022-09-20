// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AboutPage from "./pages/About/About";
import AdminPage from "./pages/AdminPage/Adminpage";
import SearchPage from "./pages/SearchPage/SearchPage";
import RestaurantPage from "./pages/RestaurantPage/RestaurantPage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState } from "react";
import {KEY} from "./localKey";
import {DATA} from "./localData";


function App() {
  const [businesses, setBusinesses] = useState(DATA);
  //Make api key & ignore it
  const config = {
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin':"*",
      'Authorization': `Bearer ${KEY}`,
    },
  };

/*
  async function getBuisnesses() {

    let response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=PHO&location=Dallas&categories=vegan,vegetarian`, config
    );
    return response;
  }
  */
 // console.log(getBuisnesses());

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/restaurantpage/:businessid" element={<RestaurantPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
