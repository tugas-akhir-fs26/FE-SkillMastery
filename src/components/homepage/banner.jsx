import { Box } from "@mui/system";
import React from "react";


export default function Banner(){
    return(
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            textAlign : "left",
            my:2,
            p:2,
          }}>
            <img src="../src/assets/BG.svg" alt="Background Image" width={550} />
        </Box>
    )
}