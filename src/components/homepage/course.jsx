import Box from "@mui/material/Box";
import React from "react";
import CourseCard from "./card";
import { Typography } from "@mui/material";

export default function CourseSection() {
  return (
    <Box sx={{ p: 2, height: "100vh", marginTop: "150px" }}>
      <Box sx={{ textAlign: "center" }}>
        <div className="Header">
          <Typography variant="h3" sx={{fontWeight:600, color:"#0460D9"}}>
            Kursus
          </Typography>
          <Typography variant="h5" sx={{fontWeight:400}}>Temukan Kursus Menarik Disini</Typography>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "32px",
        }}
      >
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Box>
    </Box>
  );
}
