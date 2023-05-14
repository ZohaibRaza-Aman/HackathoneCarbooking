import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import BAScreenHeader from "../../Components/BAScreenHeader";

const AddCars = () => {
  const [institute, setInstitute] = useState({});

  const location = useLocation();

  useEffect(() => {
    setInstitute(location.state);
  }, []);

  return (
    <>
    <BAScreenHeader screenTitle='AddCars'/>
      <Typography>AddCars</Typography>
      <Grid container>
        <Grid item md={3}>
          <Box className="bg-white rounded shadow">
            <Box className="p-3 text-center">
              {/* <img
                width={50}
                height={50}
                src={institute.logo}
                alt={institute.instituteName}
              /> */}
            </Box>
            <Box className="p-3">
              <Typography sx={{ fontSize: 12 }} className="fw-bold text-muted">
                Name
              </Typography>
              {/* <Typography variant="h5">{institute.instituteName}</Typography> */}
            </Box>
            <Box className="p-3">
              <Typography sx={{ fontSize: 12 }} className="fw-bold text-muted">
               Short Name
              </Typography>
              {/* <Typography variant="h5">{institute.instituteName}</Typography> */}
            </Box>
            <Box className="p-3">
              <Typography sx={{ fontSize: 12 }} className="fw-bold text-muted">
                No Of Campus
              </Typography>
              {/* <Typography variant="h5">{institute.noOfCampus}</Typography> */}
            </Box>
            <Box className="p-3">
            <Typography
                      sx={{ fontSize: 12 }}
                      className="fw-bold text-muted"
                    >
                      Active / InActive
                    </Typography>
                    <Typography variant="h5">
                      {" "}
                      {/* <CircleIcon color={institute.activeInActive ? "error" : ""} /> */}
                      {""}
                    </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AddCars;
