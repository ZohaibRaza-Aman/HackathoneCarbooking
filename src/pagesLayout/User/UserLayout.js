import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router";
import { ListItemIcon } from "@mui/material";
import { userLogOut } from "../../config/firebase/firbasemethods";
import { Logout } from "@mui/icons-material";


const drawerWidth = 240;

export default function UserLayout() {
  const [menuList, setMenuList] = React.useState([
    {
      name: "Home",
      route: "log",
      icon: <AutoStoriesIcon />,
    },
    {
      name: "Logout",
      route: "logout",
      icon: <Logout />,
    },
    
  ]);

  let navigate = useNavigate();
  let changeScreen = (route) => {
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
   <div>
     <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            USER PAGE
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
          <Route path="/log" element={<Logout/>} />
          <Route path="logout/" element={<Logout />} />
        </Routes>
      </Box>
    </Box>
   </div>
  );
}