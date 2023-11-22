import { Avatar, Box, Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import React from "react";

export default function CartCourse() {
  return (
    <Box sx={{ width : "60vw",display: "flex", alignItems: "center", justifyContent : "space-around", p:3 }}>
      <img src="../src/assets\courses\web.jpg" alt="web" width={300} />
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: "24px" }}>
          Belajar NodeJS
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
            sx={{ width: "30px", height: "30px" }}
          />
          <Typography sx={{ fontWeight: 400, fontSize: "18px" }}>
            By Dionisius Reinaldo
          </Typography>
        </Box>
        <Box sx={{display : "flex", justifyContent : "space-between", width : "300px", marginTop : "10px"}}>
          <Typography sx={{ fontSize: "14px", fontWeight: 300 }}>
            * 20 Jam Total Durasi
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: 300 }}>
            * 6 Bab
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: 300 }}>
            * Semua Level
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" sx={{fontWeight : 600}}>
            Rp99.0000
        </Typography>
      </Box>
    </Box>
  );
}
