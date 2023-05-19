import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="body">
        <div className="container">
          <div
            className="col-sm"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "20px",
            }}
          >
            <span>
              <img className="logo" src="https://rently.pk/assets/logo.png" />
            </span>
            <div>
              <Link className="navLink" to="/">
                Home
              </Link>
              <Link className="navLink" to="/cardetails">
                Car Details
              </Link>
              <Link className="navLink" to="/booknow">
                Book Now
              </Link>
              <span>
                {" "}
                <a className="login" href="/login">
                  Login
                </a>
              </span>
              <span className="border-line"></span>
              <span>
                {" "}
                <a className="signup" href="/signup">
                  SignUp
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
