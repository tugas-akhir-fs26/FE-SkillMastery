
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/home';
import Course from './pages/course';
import Mentor from './pages/mentor';
import Workshop from './pages/workshop';
import Payment from './pages/payment';
import CreateCourse from './pages/createcourse';
import { createTheme, ThemeProvider } from '@mui/material';
import './app.css';
import Register from './pages/register';
import DaftarWorkshop from './pages/daftarworkshop';
import CourseGuru from './pages/courseguru';
import Forum from './pages/forum';
import Setting from './pages/setting';
import Instruktur from './pages/instruktur';
import React from 'react';
import CourseDetail from './pages/courseDetail';
import Login from './components/login/login';
import ProfileUser from './components/profil-user/profil';
import DashboardMentor from './pages/dashboardhome';
import CourseUser from './components/dashboard-user/dashboard';

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/course" element={<Course />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/daftarworkshop" element={<DaftarWorkshop />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/create-course" element={<CreateCourse />} />
        <Route path="/dashboard-mentor" element={<DashboardMentor />}></Route>
        <Route path="/course-guru" element={<CourseGuru />}></Route>
        <Route path="/forum" element={<Forum />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/instruktur" element={<Instruktur />} />
        <Route path="/course-detail" element={<CourseDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile-user" element={<ProfileUser/>} />
        <Route path="/my-course" element={<CourseUser/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;;
