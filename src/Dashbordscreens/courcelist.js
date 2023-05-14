import React, { useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

const CourseList = () => {
  const [courseList, setcourseList] = useState([
    {
      courseName: "MS Office",
      duration: "3 Month",
      fees: "Rs.2000/",
    },
    {
      courseName: "Web Designing",
      duration: "6 Month",
      Fees: "Rs.2300/",
    },
    {
      courseName: "3D Max",
      duration: "2 Month",
      fees: "Rs.4000/",
    },
    {
      courseName: "Web Developer",
      duration: "4 Month",
      fees: "Rs.5000/",
    },
  ]);
  let openDetail = (obj) => {
    setcourseList(obj);
  };
  return (
    <>
    <h1 className="text-center shadow p-2 mb-4 bg-white text-dark rounded">Course List</h1>
    <div className="text-center shadow-lg p-3 mb-5 bg-primary text-white">
    <Box>
        {courseList &&
        Array.isArray(courseList) &&
        courseList.length > 0
          ? courseList.map((x, i) => (
              <Paper onClick={() => openDetail(x)} className="p-2 my-2 ">
                <Grid container>
                  <Grid item md={4}>
                    <Typography
                      sx={{ fontSize: 12 }}
                      className="fw-bold text-muted"
                    >
                      Course Name
                    </Typography>
                    <Typography variant="h5">{x.courseName}</Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography
                      sx={{ fontSize: 12 }}
                      className="fw-bold text-muted"
                    >
                      Duration
                    </Typography>
                    <Typography variant="h5">{x.duration}</Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography
                      sx={{ fontSize: 12 }}
                      className="fw-bold text-muted"
                    >
                      Fees
                    </Typography>
                    <Typography variant="h5">{x.fees}</Typography>
                  </Grid>
                </Grid>
              </Paper>
            ))
          : null}
      </Box>
    </div>
    </>
  );
};

export default CourseList;
