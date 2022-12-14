import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Home </b>
            
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            <b>About </b>
          </Link>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            <b> Login</b>
          </Link>
          <Link to="/search" style={{ textDecoration: "none", color: "white" }}>
            <b> Search</b>
          </Link>
          <Link to="/admin" style={{ textDecoration: "none", color: "white" }}>
            <b> Admin</b>
          </Link>

        </li>
        <h1>Whatcha` Lookin` Pho</h1>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
