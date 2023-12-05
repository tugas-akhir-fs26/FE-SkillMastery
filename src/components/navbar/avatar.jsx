// CustomAvatar.js

import React from "react";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CustomAvatar = ({
  handleOpenUserMenu,
  anchorElUser,
  handleCloseUserMenu,
  settings,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const avatar = localStorage.getItem("Avatar") || "/static/images/avatar/2.jpg";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    setOpen(false);
    // dispatch(logoutAction());
  };

  function handleMenuItemClick(setting) {
    handleCloseUserMenu();

    if (setting === "Profile") {
      navigate("/profile-user");
    } else if (setting === "Logout") {
      handleClickOpen();
      localStorage.clear()
      window.location.href('/')
    }
  }

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={avatar} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting}
            onClick={() => handleMenuItemClick(setting)}
          >
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Logout</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Anda Yakin ingin Logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogout} autoFocus>
            Ya
          </Button>
          <Button onClick={handleClose}>Tidak</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomAvatar;
