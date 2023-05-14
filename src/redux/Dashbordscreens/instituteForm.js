import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import SMInput from "../../components/SMinput";
import { getFBData, postFBData } from "../../config/firebase/firbasemethods";
import { Grid } from "@mui/material";
import SMGrid from "../../components/SMGride";
import SMButton from "../../components/SMButton";
import BAScreenHeader from "./../../components/BAScreenHeader";

const style = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "Snow",
  boxShadow: 5,
  borderRadius: 10,
  p: 4,
};

export default function InstituteForm() {
  const [model, setModel] = useState({});
  const [userdata, setUserData] = useState({});
  const [loader, setLoader] = useState(false);

  const column = [
    {
      id: "institute",
      displayName: "InstituteName",
    },
    {
      id: "shortname",
      displayName: "InstituteShortName",
    },
    {
      id: "campus",
      displayName: "NoOFCampus",
    },
    {
      id: "addrees",
      displayName: "Adrees",
    },
    {
      id: "contact",
      displayName: "Contact",
    },
    {
      id: "username",
      displayName: "UserName",
    },
    {
      id: "password",
      displayName: "Password",
    },
    {
      id: "tel",
      displayName: "Telephone",
    },
    {
      id: "logo",
      displayName: "Logo",
    },
  ];

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  const Save = () => {
    const uid = uuidv4();
    setLoader(true);
    postFBData("intituteform", model, uid)
      .then(() => {
        console.log("save succefully");
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };
  const showFbData = () => {
    getFBData("intituteform")
      .then((res) => {
        setUserData([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    showFbData();
  }, []);

  return (
    <>
      <BAScreenHeader
        buttonList={[
          {
            displayField: (
              <SMButton onClick={Save} loading={loader} label="Save" />
            ),
          },
        ]}
        screenTitle="Add Institute"
      />
      <Box>
        <Grid container>
          <Grid className="p-2" item md={4}>
            <SMInput
              value={model.institute}
              onChange={(e) =>
                setModel({ ...model, institute: e.target.value })
              }
              label="Institute Name"
              variant="standard"
            />
          </Grid>
          <Grid className="p-2" item md={4}>
            <SMInput
              value={model.shortname}
              onChange={(e) =>
                setModel({ ...model, shortname: e.target.value })
              }
              label="Institute Short Name"
              variant="standard"
            />
          </Grid>
          <Grid className="p-2" item md={4}>
            <SMInput
              value={model.campus}
              onChange={(e) => setModel({ ...model, campus: e.target.value })}
              label="NoOFCampus"
              variant="standard"
            />
          </Grid>
          <Grid className="p-2" item md={4}>
            <SMInput
              value={model.addrees}
              onChange={(e) => setModel({ ...model, addrees: e.target.value })}
              label="Addrees"
              variant="standard"
            />
          </Grid>
          <Grid className="p-2" item md={4}>
            <SMInput
              value={model.contact}
              onChange={(e) => setModel({ ...model, contact: e.target.value })}
              label="Contact"
              variant="standard"
            />
          </Grid>
          <Grid className="p-2" item md={4}>
            <SMInput
              value={model.username}
              onChange={(e) => setModel({ ...model, username: e.target.value })}
              label="User Name"
              variant="standard"
            />
          </Grid>
          <Grid className="p-2" item md={4}>
            <SMInput
              value={model.password}
              onChange={(e) => setModel({ ...model, password: e.target.value })}
              label="Password"
              variant="standard"
            />
          </Grid>
          <Grid className="p-2" item md={4}>
            <SMInput
              value={model.tel}
              onChange={(e) => setModel({ ...model, tel: e.target.value })}
              label="Tel 1"
              variant="standard"
            />
          </Grid>
          <Grid className="p-2" item md={4}>
            <SMInput
              value={model.logo}
              onChange={(e) => setModel({ ...model, logo: e.target.value })}
              label="Logo"
              variant="standard"
            />
          </Grid>
          <Box>
            <Grid container>
              <Grid item md={12} className="p-2">
                <SMGrid datasource={userdata} cols={column} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
