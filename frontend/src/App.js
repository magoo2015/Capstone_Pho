// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState } from "react";
import {KEY} from "./localKey";

function App() {
  const [businesses, setBusinesses] = useState([]);
  //Make api key & ignore it
  const config = {
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin':"*",
      'Authorization': `Bearer ${KEY}`,
    },
  };

  async function getBuisnesses() {

    let response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=PHO&location=Dallas&categories=vegan,vegetarian`, config
    );
    return response;
  }
  console.log(getBuisnesses());
  return (
    <div>
      {/*  <Navbar />
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
      </Routes>
      <Footer />*/}
    </div>
  );
}

export default App;
