import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React from "react";

export default function RatingCourse(Props) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
        
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          width: "100%",
          gap: "5px",
        }}
      >
        <Typography variant="h5">5.0</Typography>
        <Rating name="read-only" size="large" value={Props.value} readOnly />
      </Box>
    </Box>
  );
}
