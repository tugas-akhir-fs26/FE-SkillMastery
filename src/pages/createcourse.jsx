import React from "react"
import HeaderStepper from "../components/CreateCourse/stepper"
import { Box } from "@mui/material"


function CreateCourse(){
    return(
        <Box sx={{p:6,}}>
            <HeaderStepper />
        </Box>
    )
}

export default CreateCourse