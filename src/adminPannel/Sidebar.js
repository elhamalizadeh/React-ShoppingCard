import {
  Article,
  Diversity3,
  Group,
  Home,
  Nightlight,
  PermMedia,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
  Typography,
} from "@mui/material";
//import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({mode,setMode}) => {
   
  return (
    <>
    <Box flex={1} p={2} sx={{ display:{ xs:"none" , sm:"block"} }}>
        <Box position="fixed">
        <List>
          <NavLink to="/admin" className="nav-link">
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepege" />
          </ListItemButton>
          </NavLink>

          <NavLink to="/admin/posts" className="nav-link">
          <ListItemButton>
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Posts" />
          </ListItemButton>
          </NavLink>

          <NavLink to="/admin/media" className="nav-link">
          <ListItemButton>
            <ListItemIcon>
              <PermMedia />
            </ListItemIcon>
            <ListItemText primary="Media" />
          </ListItemButton>
          </NavLink>

          <NavLink to="/admin/groups" className="nav-link">
          <ListItemButton>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
          </NavLink>

          <NavLink to="/admin/market" className="nav-link">
          <ListItemButton>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Market Place" />
          </ListItemButton>
          </NavLink>

          <NavLink to="/admin/friends" className="nav-link">
          <ListItemButton>
            <ListItemIcon>
              <Diversity3 />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
          </NavLink>

          <NavLink to="/admin/setting" className="nav-link">
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
          </NavLink>

          <ListItemButton>
            <ListItemIcon>
              <Nightlight />
            </ListItemIcon>
            <Switch onChange={e =>setMode(mode==="light"? "dark" : "light")} />
          </ListItemButton>
        </List>
        </Box>
      
      </Box>   
    </>
  );
};
export default Sidebar;
