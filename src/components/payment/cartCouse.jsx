// @ts-nocheck
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import Style from "./cartCourse.module.css"

export default function CartCourse() {
  return (
    <Box sx={{ width : {xs : "300px", md : "60vw"}, display: "flex", flexDirection : {xs : "column", md : "row"}, alignItems: "center", justifyContent : "space-around", p:3, borderTop : "1px solid black" }}>
      <img src="../src/assets/courses/web.jpg" alt="web" className={`${Style.img_cart}`} />
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: {xs : "20px" ,md : "24px"}, marginBottom : "16px" }}>
          Belajar NodeJS
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: {xs : "8px",md : "12px"} }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
            sx={{ width:  {xs : "20px" ,md : "25px"}, height: {xs : "20px" ,md : "25px" }}}
          />
          <Typography sx={{ fontWeight: {xs : 600, md : 400}, fontSize: {xs : "10px", md : "14px"} }}>
            Dionisius Reinaldo
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography sx={{fontWeight : 600, fontSize : {xs : "18px" ,md : "24px"}, marginTop : {xs : "18px", md : 0}}}>
            Rp99.0000
        </Typography>
      </Box>
    </Box>
  );
}
