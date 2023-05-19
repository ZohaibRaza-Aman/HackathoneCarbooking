import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CarCards = () => {
  const [filterdata, setFilterData] = useState([]);
  const [query, setQuery] = useState();
  const navigate = useNavigate();
  const [carList, setCarList] = useState([
    {
      make: "BMW",
      img: "https://www.freeiconspng.com/uploads/black-cool-bmw-car-png-19.png",
      Details: "7 Series",
      description: "Refill fuel at the end of the day or pay PKR 40/KM",
    },
    {
      make: "Daewoo",
      img: "https://pngimg.com/d/daewoo_PNG8.png",
      Details: "Racer",
      description: "Refill fuel at the end of the day or pay PKR 40/KM",
    },
    {
      make: "Daihatsu",
      img: "https://www.daihatsu.com/news/2018/scj6mq0000001rye-img/2.png",
      Details: "Charade",
      description: "Refill fuel at the end of the day or pay PKR 40/KM",
    },
    {
      make: "Honda",
      img: "https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-accord-hybrid-gets-more-power-improved-2.png",
      Details: "Accord",
      description: "Refill fuel at the end of the day or pay PKR 40/KM",
    },
    {
      make: "Honda",
      img: "https://cache2.pakwheels.com/ad_pictures/8014/honda-city-1-2l-cvt-2023-80143412.jpg",
      Details: "City IVTEC",
      description: "Refill fuel at the end of the day or pay PKR 40/KM",
    },
    {
      make: "Volvo",
      img: "https://www.pngmart.com/files/4/Volvo-Xc90-PNG-Transparent.png",
      Details: "Volvo Xc90",
      description: "Refill fuel at the end of the day or pay PKR 40/KM",
    },
  ]);
  let openDetail = (obj) => {
    navigate("", { state: obj });
  };
  useEffect(() => {
    setFilterData(carList);
  }, []);
  const handleSearch = (event) => {
    const getsearch = event.target.value;
    if (getsearch.length > 0) {
      const searchData = carList.filter((item) =>
        item.make.toLowerCase().includes(getsearch)
      );
      setCarList(searchData);
    } else {
      setCarList(filterdata);
    }
    setQuery(getsearch);
  };
  return (
    <>
      <div className="p-5">
        <form>
          <div class="mx-auto text-center pt-5">
            <input
              value={query}
              style={{ width: 500, height: 40 }}
              type="txet"
              placeholder="Search Here ..."
              onChange={(e) => handleSearch(e)}
            />
          </div>
        </form>
      </div>
      <div className="container">
        <box className="col-sm">
          <div className="productsWrapper">
            {carList && Array.isArray(carList) && carList.length > 0
              ? carList.map((x, i) => (
                  <div className="card1" key={x.id}>
                    <img src={x.img} alt="img" width={50} height={50} />

                    <Typography
                      sx={{ fontSize: 14 }}
                      className="fw-bold text-muted"
                    >
                      Car Name
                    </Typography>

                    <Typography variant="h6">{x.make}</Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      className="fw-bold text-muted"
                    >
                      Details
                    </Typography>
                    <Typography variant="h6">{x.Details}</Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      className="fw-bold text-muted"
                    >
                      Description
                    </Typography>
                    <Typography sx={{ fontSize: 12 }}>
                      {x.description}
                    </Typography>
                    <div className="pt-3">
                      <button className="btn1">Book Now +</button>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </box>
      </div>
    </>
  );
};

export default CarCards;
