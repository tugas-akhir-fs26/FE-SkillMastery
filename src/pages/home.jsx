import React from "react"
import Jumbotron from "../components/homepage/jumbotron"
import CourseSection from "../components/homepage/course"
import Testimoni from "../components/homepage/testimoni"
import MentorSection from "../components/homepage/bai"


function Home(){
    return(
        <>
            <Jumbotron />
            <CourseSection />
            <Testimoni />
            <MentorSection />
        </>
    )
}

export default Home