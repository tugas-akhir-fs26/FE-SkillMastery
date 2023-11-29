import React from 'react';
import Workshop from './pages/workshop';
import DaftarWorkshop from './pages/daftarworkshop';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Workshop />} />
          <Route path="/daftarworkshop" element={<DaftarWorkshop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
