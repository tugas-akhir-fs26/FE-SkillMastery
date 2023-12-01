import React, { useState } from "react";
import {
  Box,
  Grid,
} from "@mui/material";
import InfoCourse from "./infoCourse";
import CardDetailCourse from "./cardCart";

function DetailCourse() {
  return (
    <Box sx={{ height: "100%", p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <InfoCourse />
        </Grid>
        <Grid item xs={5}>
          <CardDetailCourse />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DetailCourse;
