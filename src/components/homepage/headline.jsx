import React from "react";
import Box from "@mui/material/Box";
import { TextField, Typography } from "@mui/material";

export default function Headline() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        textAlign : "left",
        p:2,
      }}
    >
      <Box sx={{ display: "flex",width:"100%",}}>
        <Typography
          variant="h5"
          sx={{
            color: "#0460D9",
            fontWeight: 700,
            fontSize: "64px",
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
            fontSize: "64px",
            textTransform: "capitalize",
          }}
        >
          Mastery
        </Typography>
      </Box>
      <Typography sx={{
        fontSize:"24px"
      }}>
        Media belajar online yang menginspirasi, menghadirkan peluang untuk
        meningkatkan keahlian Anda dalam berbagai bidang
      </Typography>
      
    </Box>
  );
}
