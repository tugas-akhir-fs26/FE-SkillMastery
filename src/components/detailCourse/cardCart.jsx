// @ts-nocheck
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Style from './courseDetail.module.css'

export default function CardDetailCourse() {
  return (
    <Box
      sx={{
        border: "1px solid black",
        borderRadius: "5px",
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img src="../src/assets/courses/figma.jpg" alt="" className={Style.img_cart} />
      <Box sx={{display : "flex", flexDirection : "column", alignItems : "start"}}>
        <Typography sx={{ fontSize: "32px", fontWeight: 600 }}>
          HTML Dasar
        </Typography>
        <Typography sx={{ fontSize: "28px", fontWeight: 400, marginBottom : "16px" }}>
          Rp120.000
        </Typography>
        <Button variant="contained" sx={{ textTransform: "capitalize" }}>
          Tambah Keranjang
        </Button>
      </Box>
    </Box>
  );
}
