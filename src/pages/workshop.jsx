import React from 'react';
import Workshop from '../components/cworkshop';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

function WorkshopPage() {
  return (
    <>
    <Navbar />
    <div style={{display:"flex", alignItems:"center"}}>
      <Workshop />
    </div>
    <Footer />
    </>
  );
}

export default WorkshopPage;
