// @ts-nocheck
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import Style from "./cartCourse.module.css";

export default function CartCourse({data}) {
  return (
    <Box
      sx={{
        width: { xs: "75vw", md: "60vw" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "start",
        justifyContent: "space-around",
        p: 3,
        borderTop: "1px solid black",
        textAlign : "left"
      }}
    >
      <img
        src={data?.Course.image}
        alt="web"
        className={`${Style.img_cart}`}
      />
      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "20px", md: "24px", textAlign : "left" },
          }}
        >
          {data?.Course.title}
        </Typography>
        <Typography
          sx={{
            fontWeight: 300,
            opacity : "70%",
            fontSize: { xs: "12px", md: "14px" },
            marginBottom: "16px",
          }}
        >
          {data?.Course.short_desc}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "8px", md: "12px" },
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
            sx={{
              width: "25px",
              height: "25px",
            }}
          />
          <Typography
            sx={{
              fontWeight: { xs: 600, md: 400 },
              fontSize: "14px",
            }}
          >
            Dionisius Reinaldo
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "20px", md: "24px" },
            marginTop: { xs: "18px", md: 0 },
          }}
        >
          {data?.Course.price}
        </Typography>
      </Box>
    </Box>
  );
}
