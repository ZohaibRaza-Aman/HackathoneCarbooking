import React from "react";
import CarCards from "./CarCards";
import Footerbar from "../../Components/footerbar";
import Navbar from "./navbar";

const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="container pt-5">
        <CarCards/>
        </div>
      <Footerbar/>
    </>
  );
};

export default Home;
