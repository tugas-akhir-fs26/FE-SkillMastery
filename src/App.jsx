import React from 'react';
import SideBar from './sidebar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Course from './pages/course';
import Forum from './pages/forum';
import Setting from './pages/setting';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/course" exact element={<Course />}></Route>
          <Route path="/forum" exact element={<Forum />}></Route>
          <Route path="/setting" exact element={<Setting />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
