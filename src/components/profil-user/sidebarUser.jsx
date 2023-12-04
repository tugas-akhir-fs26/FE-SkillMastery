import {
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Box,
} from "@mui/material";
import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";

export default function SidebarUser() {
  const drawerWidth = 240;
  const navigate = useNavigate();

  function handleListItemClick(text) {
    if (text === "Home") {
      navigate("/");
    } else if (text === "My Course") {
      navigate("/my-course");
    } else if (text === "Detail Profile") {
      navigate("/profile-user");
    }
    // Add more conditions for other menu items if needed
  }
  return (
    <Box>
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
        <center>
          <h3>Profile User</h3>
        </center>
        <Divider />
        <List>
          {["Detail Profile", "My Course", "Home"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleListItemClick(text)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      ;
    </Box>
  );
}
