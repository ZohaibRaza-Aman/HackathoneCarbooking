import React, { useEffect, useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CarCards = () => {
  const [filterdata, setFilterData] = useState([]);
  const [query, setQuery] = useState();
  const navigate = useNavigate();
  const [carList, setCarList] = useState([
    {
      make: "BMW",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGnb8FjbI_ud0SjgIozlBWbcgRqK4d_D7P8Ptj8KwOGuVK7B1GpXr9fDWS013Eu-xqek&usqp=CAU",
      Details: "7 Series",
      description:
        "A new car for sale to the market can be a daunting and strenuous process",
    },
    {
      make: "Daewoo",
      img: "https://pngimg.com/d/daewoo_PNG8.png",
      Details: "Racer",
      description:
        "A new car for sale to the market can be a daunting and strenuous process",
    },
    {
      make: "Daihatsu",
      img: "https://w7.pngwing.com/pngs/588/671/png-transparent-daihatsu-terios-kid-car-toyota-car-compact-car-vehicle-transport.png",
      Details: "Charade",
      description:
        "A new car for sale to the market can be a daunting and strenuous process",
    },
    {
      make: "Honda",
      img: "https://autotraderau-res.cloudinary.com/t_cg_car_m/inventory/2023-05-05/18769758623861/13124907/2015_honda_civic_Used_1.jpg",
      Details: "Accord",
      description:
        "A new car for sale to the market can be a daunting and strenuous process",
    },
    {
      make: "Honda",
      img: "https://www.nicepng.com/png/detail/791-7910297_honda-cars-pakistan-png.png",
      Details: "City IVTEC",
      description:
        "A new car for sale to the market can be a daunting and strenuous process",
    },
  ]);
  let openDetail = (obj) => {
    navigate("cardetailscreen", { state: obj });
  };
  useEffect(() => {
    setFilterData(carList);
  }, []);
  const handleSearch =(event)=>{
    const getsearch = event.target.value;
    if(getsearch.length > 0)
    {
      const searchData = carList.filter((item)=>item.make.toLowerCase().includes(getsearch));
      setCarList(searchData)
    }else{
      setCarList(filterdata)
    }
    setQuery(getsearch)
  }
  return (
    <>
      <div>
        <form>
          <div class="mx-auto text-center">
            <input
              value={query}
              style={{ width: 500, height: 40 }}
              type="txet"
              placeholder="Search Here ..."
              onChange={(e)=>handleSearch(e)}
            />
          </div>
        </form>
      </div>
      <Box  className="text-center shadow-lg p-3 mb-5 bg-light text-danger  rounded">
        {carList && Array.isArray(carList) && carList.length > 0
          ? carList.map((x, i) => (
              <Paper onClick={openDetail} className="p-2 my-2 ">
                <Grid container>
                  <Grid className="text-center" item md={3}>
                    <img width="50px" height="50px" src={x.img} alt={x.make} />
                  </Grid>
                  <Grid item md={2}>
                    <Typography
                      sx={{ fontSize: 14 }}
                      className="fw-bold text-muted"
                    >
                      Car Name
                    </Typography>
                    <Typography variant="h5">{x.make}</Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Typography
                      sx={{ fontSize: 14 }}
                      className="fw-bold text-muted"
                    >
                      Details
                    </Typography>
                    <Typography variant="h5">{x.Details}</Typography>
                  </Grid>
                  <Grid item md={3}>
                    <Typography
                      sx={{ fontSize: 14 }}
                      className="fw-bold text-muted"
                    >
                      Description
                    </Typography>
                    <Typography sx={{ fontSize: 10 }} variant="h5">
                      {x.description}
                    </Typography>
                  </Grid>
                  <Grid className="pt-5" item md={2}>
                    <button className="btn btn-dark">Book Now</button>
                  </Grid>
                </Grid>
              </Paper>
            ))
          : null}
      </Box>
    </>
  );
};

export default CarCards;
