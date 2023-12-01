// @ts-nocheck
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./courseDetail.module.css"; // Replace with the correct path
import Rating from "@mui/material/Rating";
import DescriptionCourse from "./description";

function DetailClass() {
  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          border: "1px solid black",
          borderRadius: "5px",
          p: 3,
          width: "50vw",
          display: "flex",
          gap: "16px",
        }}
      >
        <img src="../src/assets/courses/figma.jpg" alt="" width={300} />
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

      <Box
        sx={{
          border: "1px solid black",
          borderRadius: "5px",
          p: 3,
          width: "50vw",
          display: "flex",
          marginTop : "24px"
        }}
      >
        <DescriptionCourse />
      </Box>
    </Box>
  );
}

export default DetailClass;
