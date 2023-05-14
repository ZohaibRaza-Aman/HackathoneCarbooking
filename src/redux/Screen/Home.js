import React from "react";
import SMInput from "./../../Components/SMinput";
import BAScreenHeader from "./../../Components/BAScreenHeader";
import Carshop from './../../Components/CarShop';
import Navbarshop from "../../Components/shopNav";

const Home = () => {
  return (
    <>
    <Navbarshop/>
      <div>
        <h3 className="text-center pt-2">Wellcome To Cars Shop</h3>
      </div>
      <div className="container pt-4">
        <div>
           <Carshop/>
        </div>
        <div md={12}></div>
      </div>
    </>
  );
};

export default Home;
