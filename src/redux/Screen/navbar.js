import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useSelector } from "react-redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
    <div className="container">
    <div className="col-sm"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "20px",
      }}
    >
      <span className="logo">Navbar Logo</span>
      <div>
        <Link className="navLink" to="/">
          HOME
        </Link>
        <span className="loginbutton">Login <a href="/login"><AccountCircleIcon className="icon"/></a></span>
      </div>
    </div>
    </div>
    </>
  );
};

export default Navbar;
