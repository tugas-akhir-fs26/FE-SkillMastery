// @ts-nocheck
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import styles from "./courseDetail.module.css"; // Replace with the correct path
import Rating from "@mui/material/Rating";
import DescriptionCourse from "./description";
import DetailInstruktur from "./instrukturDetail";
import Curiculum from "./curiculum";
import Style from './courseDetail.module.css'

function InfoCourse() {
  const [alignment, setAlignment] = useState("All");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const renderContent = () => {
    switch (alignment) {
      case "Kurikulum":
        return (
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: "5px",
              p: 3,
              width:{ xs : "70vw",md: "50vw"},
              display: "flex",
            }}
          >
            <Curiculum />
          </Box>
        );
      case "Description":
        return (
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: "5px",
              p: 3,
              display: "flex",
              width:{ xs : "70vw",md: "50vw"},
            }}
          >
            <DescriptionCourse />
          </Box>
        );
      case "Mentor":
        return (
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: "5px",
              p: 3,
              display: "flex",
              width:{ xs : "70vw",md: "50vw"},
            }}
          >
            <DetailInstruktur />
          </Box>
        );
      case "All":
      default:
        // Menampilkan semua konten
        return (
          <>
            <Box
              sx={{
                border: "1px solid black",
                borderRadius: "5px",
                p: 3,
                display: "flex",
                width:{ xs : "70vw",md: "50vw"},
              }}
            >
              <Curiculum />
            </Box>
            <Box
              sx={{
                border: "1px solid black",
                borderRadius: "5px",
                p: 3,
                display: "flex",
                width:{ xs : "70vw",md: "50vw"},
              }}
            >
              <DescriptionCourse />
            </Box>
            <Box
              sx={{
                border: "1px solid black",
                borderRadius: "5px",
                p: 3,
                display: "flex",
                width:{ xs : "70vw",md: "50vw"},
              }}
            >
              <DetailInstruktur />
            </Box>
          </>
        );
    }
  };

  return (
    <Box sx={{width : {xs : "80vw"}, height: "100%", p:3, display : {xs : "flex"}, flexDirection : {xs : "column"}}}>
      <Box
        sx={{
          border: "1px solid black",
          borderRadius: "5px",
          p: 3,
          width: {md: "50vw"},
          display: "flex",
          flexDirection : {xs : "column"},
          gap: "16px",
          justifyContent : "center"
        }}
      >
        <img src="../src/assets/courses/figma.jpg" alt="" className={Style.img_cart}/>
        <Box>
          <Typography
            variant="h2"
            className={styles.textCapitalize}
            id="judul-course"
            sx={{ fontWeight: 600, fontSize: "32px" }}
          >
            HTML for Beginner
          </Typography>
          <Typography
            variant="h5"
            className={styles.textCapitalize}
            id="judul-course"
            sx={{ fontWeight: 400, fontSize: "20px", opacity: "60%" }}
          >
            Dionisius Reinaldo
          </Typography>

          <Typography
            variant="h5"
            className={styles.textCapitalize}
            id="judul-course"
            sx={{ fontWeight: 400, fontSize: "20px", marginTop: "20px" }}
          >
            Pelajari cara membuat website sederhana dari pemula sampai mahir
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "12px",
            }}
          >
            <Box sx={{ fontSize: "18px", display: "block", opacity: "60%" }}>
              (4.5)
            </Box>

            <Rating
              name="rating"
              value={4.5}
              precision={0.1}
              size="large"
              readOnly
            />
          </Box>
        </Box>
      </Box>

      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        size="small"
        sx={{textTransform: "capitalize",marginTop : "24px", fontSize : {xs : "12px"}, }}
      >
        <ToggleButton value="All">Semua</ToggleButton>
        <ToggleButton value="Kurikulum">Kurikulum</ToggleButton>
        <ToggleButton value="Description">Deskripsi</ToggleButton>
        <ToggleButton value="Mentor">Mentor</ToggleButton>
      </ToggleButtonGroup>

      {renderContent()}
    </Box>
  );
}

export default InfoCourse;
