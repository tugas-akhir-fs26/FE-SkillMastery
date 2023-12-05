
import Box from "@mui/material/Box";
import React from "react";
import { Typography, Button } from "@mui/material";
import CarouselCourse from "./carousel";
import { useNavigate } from "react-router-dom";

export default function CourseSection() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        p: 2,
        height: "100vh",
        marginTop: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <div className="Header">
          <Typography variant="h3" sx={{ fontWeight: 600, color: "#0460D9" }}>
            Kursus
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 400 }}>
            Temukan Kursus Menarik Disini
          </Typography>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10px",
          width: "100%",
          gap: "20px",
        }}
      >
        <CarouselCourse />
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            px: 3,
            py: 1,
            fontSize: "18px",
            backgroundColor: "#0460D9",
            fontWeight : 400,
          }}
          onClick={()=> (navigate('/course'))}
        >
          Semua Course
        </Button>
      </Box>
    </Box>
  );
}

