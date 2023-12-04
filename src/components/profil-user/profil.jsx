import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./style.css";

import SidebarUser from "./sidebarUser";

const drawerWidth = 240;

export default function ProfileUser() {
  return (
    <Box sx={{ display: "flex" }}>
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

        <Box sx={{ width: "100%" }}>
          <div>
            <h1>Detail Profile</h1>
            <p style={{ textAlign: "left" }}>Foto Profile</p>
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <Avatar
                sx={{
                  bgcolor: deepPurple[500],
                  width: 70,
                  height: 70,
                  fontSize: 30,
                }}
              >
                AD
              </Avatar>
              <div>
                <Button variant="contained">Unggah Foto</Button>
              </div>
            </div>
            <div>
              <p style={{ textAlign: "left" }}>
                Masukkan seluruh input yang diminta!
              </p>
            </div>

            <TextField
              sx={{ width: "50%", paddingRight: "10px" }}
              id="demo-helper-text-aligned"
              label="Nama Depan.."
            />
            <TextField
              sx={{ width: "50%" }}
              helperText=" "
              id="demo-helper-text-aligned-no-helper"
              label="Nama Belakang.."
            />
          </div>

          <div>
            <p style={{ textAlign: "left" }}>Alamat Email</p>
            <TextField
              style={{ width: "100%" }}
              disabled
              id="filled-disabled"
              label="andri@gmail.com"
              variant="filled"
            />
          </div>

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
