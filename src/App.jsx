import React from 'react';
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
import Footer from './components/footer/footer';
import Register from './pages/register';

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/course" element={<Course />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/create-course" element={<CreateCourse />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
