import React, { useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
import AddIcon from "@mui/icons-material/Add";
import BAModal from "../../Components/BAModal";
import SMButton from "./../../Components/SMButton";
import SMInput from "../../Components/SMinput";
import SMMultiSelector from "../../Components/SMMultiSelector";
import SMdatepicker from "../../Components/SMdatepicker";
import dayjs from "dayjs";
import { Modal } from "bootstrap";

const Cars = () => {
  const [personName, setPersonName] = React.useState([]);
  const [Day, setDay] = React.useState(dayjs("2022-04-17T15:30"));

  const [carList, setCarList] = useState([
    {
      make: "BMW",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGnb8FjbI_ud0SjgIozlBWbcgRqK4d_D7P8Ptj8KwOGuVK7B1GpXr9fDWS013Eu-xqek&usqp=CAU",
      modle: "7 Series",
    },
    {
      make: "Daewoo",
      img: "https://pngimg.com/d/daewoo_PNG8.png",
      modle: "Racer",
    },
    {
      make: "Daihatsu",
      img: "https://w7.pngwing.com/pngs/588/671/png-transparent-daihatsu-terios-kid-car-toyota-car-compact-car-vehicle-transport.png",
      modle: "Charade",
    },
    {
      make: "Honda",
      img: "https://autotraderau-res.cloudinary.com/t_cg_car_m/inventory/2023-05-05/18769758623861/13124907/2015_honda_civic_Used_1.jpg",
      modle: "Accord",
    },
    {
      make: "Honda",
      img: "https://www.nicepng.com/png/detail/791-7910297_honda-cars-pakistan-png.png",
      modle: "City IVTEC",
    },
  ]);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  let openDetail = (obj) => {
    navigate("/admin/cars", { state: obj });
  };

  let openForm = (obj) => {
    navigate("/admin/cars", { state: obj });
    setCarList({ ...obj });
  };

  let del = () => {
    setOpenModal(true);
  };

  let edit = (id) => {};
  const handleInputChange = (e) => {
    console.log('e.target.value', e.target.value)

  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const names = ["AC", "GPS", "Bluetooth", "USB Port"];
  const handleDayChange = (newValue) => {
    setDay(newValue);
  };
  return (
    <>
      <BAModal
        modalTitle="Delete"
        open={openModal}
        close={(e) => setOpenModal(e)}
        innerContent={
          <Box className=" text-center">
            <Typography>Add Car</Typography>
            <SMInput
              label={"name"}
              disabled={false}
              onChange={handleInputChange}
              type={"text"}
              styles={{ width: "500px", marginBottom: "20px" }}
              name={"name"}
              value={""}
              variant={"outlined"}
            />
            <SMInput
              label={"Model"}
              disabled={false}
              onChange={handleInputChange}
              type={"text"}
              styles={{ width: "500px", marginBottom: "20px" }}
              name={"model"}
              value={""}
              variant={"outlined"}
            />

            <SMInput
              label={""}
              disabled={false}
              onChange={handleInputChange}
              type={"file"}
              styles={{ width: "500px", marginBottom: "20px" }}
              name={""}
              variant={"outlined"}
            />
            <SMMultiSelector
              label="Features"
              styles={{ width: "500px", marginBottom: "20px" }}
              variant={"outlined"}
              personName={personName}
              handleChange={handleChange}
              names={names} 
            />
            <SMdatepicker
              label="Select date and time"
              value={Day}
              onChange={handleDayChange}
              styles={{ marginLeft:"15%", width: "500px", marginBottom: "20px" }}

            />
            <button className="btn btn-dark">ADD</button>
          </Box>
        }
      />
      <h1 className="text-center">-:Cars List:-</h1>
      <button onClick={(e) => setOpenModal(e)} className="btn btn-dark">
        Add Car +
      </button>
      <Box className="text-center shadow-lg p-3 mb-5 bg-light text-danger  rounded">
        {carList && Array.isArray(carList) && carList.length > 0
          ? carList.map((x, i) => (
              <Paper onClick={() => openDetail(x)} className="p-2 my-2 ">
                <Grid container>
                  <Grid className="text-center" item md={2}>
                    <img width="50px" height="50px" src={x.img} alt={x.make} />
                  </Grid>
                  <Grid item md={3}>
                    <Typography
                      sx={{ fontSize: 12 }}
                      className="fw-bold text-muted"
                    >
                      Car Name
                    </Typography>
                    <Typography variant="h5">{x.make}</Typography>
                  </Grid>
                  <Grid item md={3}>
                    <Typography
                      sx={{ fontSize: 12 }}
                      className="fw-bold text-muted"
                    >
                      Modles
                    </Typography>
                    <Typography variant="h5">{x.modle}</Typography>
                  </Grid>
                  <Grid className="p-2" item md={3}>
                    {
                      <DeleteIcon
                        onClick={(e) => {
                          e.stopPropagation();
                          del();
                        }}
                        className="text-danger curser"
                      />
                    }
                    {
                      <EditIcon
                        onClick={(e) => {
                          e.stopPropagation();
                          openForm(x);
                        }}
                        className="text-primary curser"
                      />
                    }
                  </Grid>
                </Grid>
              </Paper>
            ))
          : null}
      </Box>
    </>
  );
};

export default Cars;
