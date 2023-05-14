import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LogoutIcon from "@mui/icons-material/Logout";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router";
import { ListItemIcon } from "@mui/material";
import Cars from "./cars.js";
import AddCars from "./addcars.js";
import { userLogOut } from "../../config/firebase/firbasemethods.js";


const drawerWidth = 240;

export default function AdminLayout() {
  const [menuList, setMenuList] = React.useState([
    {
      name: "Cars",
      route: "cars",
      icon: <HomeIcon />,
    },
    {
      name: "Add Cars",
      route: "addcars",
      icon: <AutoStoriesIcon />,
    },
    {
      name: "Logout",
      route: "logout",
      icon: <LogoutIcon />,
    },
  ]);

  let navigate = useNavigate();
  let changeScreen = (route) => {
    console.log('route', route)
    if (route === "logout") {
      handleLogOut();
    }

    navigate(route);
    
  };

  const handleLogOut = async () => {
    await userLogOut();
    navigate("/login");
  };
  return (
   <>
   <div>
     <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Wellcome To Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {menuList.map((x, index) => {
            return (
              <ListItem
                onClick={() => changeScreen(x.route)}
                key={index}
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index % 1 === 0 ? x.icon : <HomeIcon /> }

                  </ListItemIcon>
                  <ListItemText primary={x.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Routes>
          <Route path="cars/" element={<Cars/>} />
          <Route path="addcars/" element={<AddCars/>} />
          <Route path="logout/" element={<userLogOut />} />
        </Routes>
      </Box>
    </Box>
   </div>
   </>
  );
}