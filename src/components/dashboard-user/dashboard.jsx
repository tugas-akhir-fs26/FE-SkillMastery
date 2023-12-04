import React from 'react';
import SideBar from '../../sidebar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';
import UserCourse from './userCourse';
import SidebarUser from '../profil-user/sidebarUser';

export default function CourseUser() {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <SidebarUser />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Kursus Anda</h1>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          </div>
          <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
            <UserCourse />
          </div>
        </Box>
      </Box>
    </>
  );
}
