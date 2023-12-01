import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
// @ts-ignore
import Style from "./headline.module.css";

export default function Headline() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        textAlign: "left",
        p: 2,
        width : {xs:"300px", md : "100%"},
      }}
    >
      <Box sx={{ display: "flex", width: "100%" }}>
        <Typography
          variant="h5"
          sx={{
            color: "#0460D9",
            fontWeight: 700,
            fontSize: {xs : "32px", md : "64px"},
            textTransform: "capitalize",
          }}
        >
          Skill
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "black",
            fontWeight: 700,
            fontSize: {xs : "32px", md : "64px"},
            textTransform: "capitalize",
          }}
        >
          Mastery
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: {xs : "20px", md : "24px", textAlign : "left"}
        }}
      >
        Media belajar online yang menginspirasi, menghadirkan peluang untuk
        meningkatkan keahlian Anda dalam berbagai bidang
      </Typography>

      <div className={`${Style.input_wrapper}`}>
        <div className={`${Style.input_bar}`}>
          <SearchIcon className={`${Style.icon}`} />
          <input type="text" placeholder="Search...." />
        </div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0b5ed7",
            fontFamily: "inherit",
            color: "white",
            fontSize: "20px",
            width: "200px",
            fontWeight: 400,
            textTransform: "capitalize",
            px: 2,
          }}
        >
          Cari Course
        </Button>
      </div>
    </Box>
  );
}
