import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Headline from './headline';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Container maxWidth="xl">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Headline />
        </Grid>
        <Grid item xs={6}>
          <img src="../src/assets/BG.svg" alt="Background Image" width={600} />
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}
