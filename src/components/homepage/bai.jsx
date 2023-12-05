import { Box, Button, Typography } from "@mui/material";
import React from "react";
// @ts-ignore
import Style from "./bai.module.css";

export default function MentorSection() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", height : "100vh", flexDirection : {xs : "column", md : "row"} }}
    >

    <div className={`${Style.bai_ct}`}>
      <div className={`${Style.img_wrapper}`}>
        <div className={`${Style.circle}`}></div>
        <img src="https://res.cloudinary.com/dzajixld0/image/upload/v1701790083/BAI_ls4a6s.png" alt="Mentor" width={"300px"} />
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: {xs : "60vw", md : "50vw"},
          alignItems: "start",
          justifyContent: "center",
          marginBottom: "50px",
          p:3
        }}
      >
        <Typography variant="h4" sx={{ fontSize: {xs : "20px" ,md:"32px"}, fontWeight : 600, textAlign : {xs : "center" ,md:"left"} }}>
          Bergabung menjadi Instruktur
          {/* Render Logo SkillMastery */}
          <div className={`${Style.logo_wrapper}`}>
            <span className={`${Style.logo}`}>Skill</span>
            <span>Mastery</span>
          </div>
          dan Wujudkan Impian Pembelajaranmu!
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: 400, marginTop: "10px", textAlign : {xs : "center" ,md:"left"} }}>
          Ayo jadi instruktur di SkillMastery dan bagikan pengetahuan serta
          keterampilanmu kepada ribuan orang yang haus akan pembelajaran!
        </Typography>
      <Button
        variant="contained"
        sx={{ textTransform: "capitalize", fontWeight: 400, fontSize : "18px", margin : {xs: "20px auto", md : "20px 0"}}}
      >
        Daftar Sekarang
      </Button>
      </Box>
    </div>
    </Box>
  );
}
