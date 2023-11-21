import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import CarouselTesti from "./carouselTesti";

export default function Testimoni() {
  return (
    <>
      <Box sx={{ textAlign: "center", height: "100vh" }}>
        <div className="Header">
          <Typography variant="h3" sx={{ fontWeight: 600, color: "#0460D9" }}>
            Testimoni
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: 400, display: "flex", justifyContent: "center" }}
          >
            Apa kata mereka pengguna
            <Typography variant="h5" sx={{marginLeft: "5px", fontWeight: 600, color:"#0460D9"}}>
              Skill
            </Typography>
            <Typography variant="h5" sx={{fontWeight: 600}}>Mastery</Typography> ?
          </Typography>
        </div>

        <CarouselTesti />
      </Box>
    </>
  );
}
