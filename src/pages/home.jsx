import React from "react"
import Jumbotron from "../components/homepage/jumbotron"
import CourseSection from "../components/homepage/course"
import Testimoni from "../components/homepage/testimoni"
import MentorSection from "../components/homepage/bai"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"


function Home(){
    return(
        <>
        <Navbar />
            <Jumbotron />
            <CourseSection />
            <Testimoni />
            <MentorSection />
        <Footer />
        </>
    )
}

export default Home