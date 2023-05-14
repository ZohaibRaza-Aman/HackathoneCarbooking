import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";
import { useSelector } from "react-redux";

const Navbarshop = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <span className="logo">Shoping Store</span>
      <div>
        <Link className="navLink" to="/">
          HOME
        </Link>
        <Link className="navLink" to="/cart">
          Car Details
        </Link>
        <span className="cartCount">Booking Cars :{items.length} </span>
      </div>
    </div>
  );
};

export default Navbarshop;
