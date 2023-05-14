import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/reducer/cartslice";

const Carshop = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([
    {
      id: 1,
      image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",
      car: "Mitsubishi",
      car_model: "Montero",
      car_details: "Yellow",
      car_model_year: 2002,
      car_vin: "SAJWJ0FF3F8321657",
      price: "$2814.46",
      availability: false,
    },
    {
      id: 2,
      image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",
      car: "Volkswagen",
      car_model: "Passat",
      car_details: "Maroon",
      car_model_year: 2008,
      car_vin: "WBANV9C51AC203320",
      price: "$1731.98",
      availability: false,
    },
    {
      id: 3,
      image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",
      car: "Saturn",
      car_model: "L-Series",
      car_details: "Red",
      car_model_year: 2003,
      car_vin: "1HGCR6F34EA246317",
      price: "$2238.35",
      availability: true,
    },
    {
      id: 4,

image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",      car: "Jeep",
      car_model: "Compass",
      car_details: "Violet",
      car_model_year: 2012,
      car_vin: "4USBT33454L511606",
      price: "$2732.99",
      availability: false,
    },
    {
      id: 5,

image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",      car: "Mitsubishi",
      car_model: "Lancer Evolution",
      car_details: "Purple",
      car_model_year: 2002,
      car_vin: "WAU2GBFCXDN339713",
      price: "$3849.47",
      availability: false,
    },
    {
      id: 6,

image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",      car: "Chevrolet",
      car_model: "Suburban",
      car_details: "Indigo",
      car_model_year: 2009,
      car_vin: "WAUSH98E96A592763",
      price: "$1252.30",
      availability: false,
    },
    {
      id: 7,

image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",      car: "Dodge",
      car_model: "Ram Van B350",
      car_details: "Yellow",
      car_model_year: 1994,
      car_vin: "KNADH4A37A6919967",
      price: "$1762.42",
      availability: true,
    },
    {
      id: 8,

image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",      car: "Isuzu",
      car_model: "Ascender",
      car_details: "Teal",
      car_model_year: 2004,
      car_vin: "5GTMNGEE8A8713093",
      price: "$1081.40",
      availability: true,
    },
    {
      id: 9,

image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",      car: "BMW",
      car_model: "6 Series",
      car_details: "Purple",
      car_model_year: 2008,
      car_vin: "5TDBY5G16DS675822",
      price: "$1258.99",
      availability: true,
    },
    {
      id: 10,
      image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",
      car: "Mitsubishi",
      car_model: "GTO",
      car_details: "Purple",
      car_model_year: 1994,
      car_vin: "JM1NC2PFXE0140518",
      price: "$3822.92",
      availability: false,
    },
    {
      id: 11,
      image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",
      car: "Mazda",
      car_model: "Mazda5",
      car_details: "Red",
      car_model_year: 2010,
      car_vin: "WAUNE78P18A342660",
      price: "$3963.20",
      availability: true,
    },
    {
      id: 12,
      image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",
      car: "Audi",
      car_model: "Q7",
      car_details: "Pink",
      car_model_year: 2012,
      car_vin: "WA1WYBFE2AD448505",
      price: "$1144.27",
      availability: true,
    },
    {
      id: 13,
      image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",
      car: "Mercedes-Benz",
      car_model: "SL-Class",
      car_details: "Aquamarine",
      car_model_year: 1989,
      car_vin: "4A4AP3AU8FE713946",
      price: "$1386.49",
      availability: true,
    },
    {
      id: 14,
      image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",
      car: "Volvo",
      car_model: "C70",
      car_details: "Red",
      car_model_year: 2012,
      car_vin: "WAUHGBFC9DN768366",
      price: "$1366.96",
      availability: true,
    },
    {
      id: 15,
      image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",
      car: "GMC",
      car_model: "Envoy XL",
      car_details: "Green",
      car_model_year: 2006,
      car_vin: "WA1AV74L67D649365",
      price: "$1221.46",
      availability: false,
    },
    {
      id: 16,
      image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",
      car: "GMC",
      car_model: "Vandura G3500",
      car_details: "Teal",
      car_model_year: 1996,
      car_vin: "1FMJK2A5XAE576485",
      price: "$1877.63",
      availability: true,
    },
    {
      id: 17,
      image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",
      car: "Cadillac",
      car_model: "CTS",
      car_details: "Pink",
      car_model_year: 2003,
      car_vin: "WAUVC68E02A369838",
      price: "$2646.55",
      availability: true,
    },
    {
      id: 18,
      image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",
      car: "BMW",
      car_model: "X5 M",
      car_details: "Mauv",
      car_model_year: 2012,
      car_vin: "WA1YD54B63N613712",
      price: "$2076.03",
      availability: true,
    },
    {
      id: 19,
      image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",
      car: "Dodge",
      car_model: "Viper",
      car_details: "Turquoise",
      car_model_year: 1999,
      car_vin: "WAUMF98P66A420495",
      price: "$1323.48",
      availability: true,
    },
    {
      id: 20,
      image: "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg",
      car: "Ford",
      car_model: "Taurus",
      car_details: "Mauv",
      car_model_year: 2002,
      car_vin: "WAUUL58E15A338821",
      price: "$1801.89",
      availability: false,
    },
  ]);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <div className="container">
        <div className="col-sm">
          <div className="productsWrapper">
            {products.map((product) => (
              <div className="card1" key={product.id}>
                <img src={product.image} alt="img" width={20} height={20} />
                <h4>{product.car}</h4>
                <h4>{product.car_model}</h4>
                <h5>U$D: {product.car_details}</h5>
                <button onClick={() => handleAdd(product)} className="btn1">
                  Book Now +
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carshop;
