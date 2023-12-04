import React from "react";
import DetailCourse from "../components/detailCourse/courseDetail";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";


export default function CourseDetail(){
    return(
        <>
            <Navbar />
            <DetailCourse />
            <Footer />
        </>
    )
}