import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import Style from './popular.module.css'


export default function Populer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box className={`${Style.box_wrapper}`}
        sx={{
          border : "1px solid #8DC3F2",
          borderRadius : "5px",
          backgroundColor : "#8DC3F2",
          width : "50vw",
          height : "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p : 2,
          marginTop : "30px"
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <h1>Test</h1>
          </Grid>
          <Grid item xs={2}>
            <h1>Test</h1>
          </Grid>
          <Grid item xs={2}>
            <h1>Test</h1>
          </Grid>
          <Grid item xs={2}>
            <h1>Test</h1>
          </Grid>
          <Grid item xs={2}>
            <h1>Test</h1>
          </Grid>
          <Grid item xs={2}>
            <h1>Test</h1>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
