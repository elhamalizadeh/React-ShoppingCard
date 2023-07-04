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
import { useState } from "react";

const Sidebar = ({mode,setMode}) => {
   
  return (
    <>
    <Box flex={1} p={2} sx={{ display:{ xs:"none" , sm:"block"} }}>
        <Box position="fixed">
        <List>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homapege" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <PermMedia />
            </ListItemIcon>
            <ListItemText primary="Media" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Market Place" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <Diversity3 />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>

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
