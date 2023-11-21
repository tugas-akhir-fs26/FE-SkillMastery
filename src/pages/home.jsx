import React from "react"
import Jumbotron from "../components/homepage/jumbotron"
import CourseSection from "../components/homepage/course"
import Testimoni from "../components/homepage/testimoni"


function Home(){
    return(
        <>
            <Jumbotron />
            <CourseSection />
            <Testimoni />
        </>
    )
}

export default Home