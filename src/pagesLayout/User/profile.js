import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import BAModdal from "../../Components/BAModal";
import BAScreenHeader from "../../Components/BAScreenHeader";
import SMButton from "../../Components/SMButton";

const Profile = () => {
  const [studentList, setStudentList] = useState([
    {
      studentName: "Hamza",
      fatherName: "Jaweed",
      course: "Wed Dev",
    },
    {
      studentName: "Zain",
      fatherName: "Aman",
      course: "MS Ofiice",
    },
    {
      studentName: "Saad",
      fatherName: "Rasheed",
      course: "Web Designing",
    },
    {
      studentName: "Moiz",
      fatherName: "Saleem",
      course: "3D Max",
    },
    {
      studentName: "Rehan",
      fatherName: "Qadeer",
      course: "Auto Cad",
    },
  ]);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  let openDetail = (obj) => {
    navigate("/studenddashbord/studentdetail", { state: obj });
    console.log(obj);
  };

  let openForm = (obj) => {
    navigate("/studenddashbord/studentform", { state: obj });
    setStudentList({ ...obj });
  };

  let del = () => {
    setOpenModal(true);
  };
  return (
    <>
      <BAModdal
        modalTitle="Delete"
        open={openModal}
        close={(e) => setOpenModal(e)}
        innerContent={
          <Box className="p-3 text-center">
            <Typography>
              Are You Sure You Want To Delete This Recocord ?
            </Typography>
            <box>
              <SMButton label="No" />
              <SMButton color="error" label="Yes" />
            </box>
          </Box>
        }
      />
      <BAScreenHeader screenTitle="Student" />

      <Box className="text-center shadow-lg p-3 mb-5 bg-light text-danger  rounded">
        {studentList && Array.isArray(studentList) && studentList.length > 0
          ? studentList.map((x, i) => (
              <Paper onClick={() => openDetail(x)} className="p-2 my-2 ">
                <Grid container>
                  <Grid item md={4}>
                    <Typography
                      sx={{ fontSize: 12 }}
                      className="fw-bold text-muted"
                    >
                      Student Name
                    </Typography>
                    <Typography variant="h5">{x.studentName}</Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography
                      sx={{ fontSize: 12 }}
                      className="fw-bold text-muted"
                    >
                      Father Name
                    </Typography>
                    <Typography variant="h5">{x.fatherName}</Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Typography
                      sx={{ fontSize: 12 }}
                      className="fw-bold text-muted"
                    >
                      Course
                    </Typography>
                    <Typography variant="h5">{x.course}</Typography>
                  </Grid>
                  <Grid className="p-2" item md={2}>
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

export default Profile;
