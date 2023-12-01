import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Headline from "./headline";
import Banner from "./banner";

export default function BasicGrid() {
  return (
    <Container>
      <Box>
        <Grid container spacing={6}>
          <Grid item xs={12} md={7}>
            <Headline />
          </Grid>
          <Grid item xs={12} md={5}>
            <Banner />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
