import React from 'react';
import SideBar from '../sidebar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CircleAddIcon from '@mui/icons-material/AddCircleOutline';
import Typography from '@mui/material/Typography';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import CourseTable from './coursetable';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

export default function Course() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar />
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Kursus Anda</h1>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                onClick={() => {
                  navigate('/buat-kursus');
                }}
              >
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
      <Footer />
    </>
  );
}
