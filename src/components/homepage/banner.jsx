// @ts-nocheck
import { Box } from "@mui/system";
import React from "react";
import Style from './banner.module.css'

export default function Banner() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        textAlign: "left",
        my: 2,
        p: 2,
        width : {xs:"200px", md : "550px"},
      }}
    >
      <img src="../src/assets/BG.svg" className={Style.img_banner} alt="Background Image"  />
    </Box>
  );
}
