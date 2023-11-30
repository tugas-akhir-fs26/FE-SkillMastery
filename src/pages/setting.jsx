import React from 'react';
import SideBar from '../sidebar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Setting() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Pengaturan</h1>
        </Box>
      </Box>
    </>
  );
}
