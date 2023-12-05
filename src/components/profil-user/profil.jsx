import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./style.css";

import SidebarUser from "./sidebarUser";

const drawerWidth = 240;

export default function ProfileUser() {
  const avatar =
    localStorage.getItem("Avatar") || "/static/images/avatar/2.jpg";
  

  return (
    <Box sx={{ display: "flex", p: 3 }}>
      <CssBaseline />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          display: "flex",
        }}
      >
        <SidebarUser />

        <Box sx={{ width: "100%", p: 3, display : "flex", flexDirection : "column", justifyContent : "space-around" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap : "16px"
            }}
          >
            <h1>Detail Profile</h1>
            <p style={{ textAlign: "left" }}>Foto Profile</p>
            <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
              <Avatar
                alt="Remy Sharp"
                src={avatar}
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              />
              <div>
                <Button variant="contained">Unggah Foto</Button>
              </div>
            </div>
            <div></div>
          </Box>

          <Box>
            <TextField
              sx={{ width: "50%", paddingRight: "10px" }}
              id="demo-helper-text-aligned"
              label="Nama Depan Anda..."
            />
            <p style={{ textAlign: "left" }}>Alamat Email</p>
            <TextField
              style={{ width: "100%" }}
              disabled
              id="filled-disabled"
              label="andri@gmail.com"
              variant="filled"
            />
          </Box>

          <div style={{ textAlign: "end", paddingTop: "20px" }}>
            <Button
              sx={{ backgroundColor: "red" }}
              variant="contained"
              size="medium"
            >
              Simpan
            </Button>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
