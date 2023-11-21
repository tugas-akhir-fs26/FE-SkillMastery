import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Headline from "./headline";
import Banner from "./banner";

export default function BasicGrid() {
  return (
    <Container>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Headline />
          </Grid>
          <Grid item xs={12} md={6}>
            <Banner />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
