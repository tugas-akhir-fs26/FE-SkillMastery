import React from 'react';
import SideBar from '../sidebar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CircleAddIcon from '@mui/icons-material/AddCircleOutline';
import Typography from '@mui/material/Typography';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import CourseTable from './coursetable';

export default function Course() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Kursus Anda</h1>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Stack spacing={2} direction="row">
              <Button variant="contained">
                <AddCircleOutline />
                Buat Kursus
              </Button>
            </Stack>
          </div>
          <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
            <CourseTable />
          </div>
        </Box>
      </Box>
    </>
  );
}
