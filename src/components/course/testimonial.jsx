// @ts-nocheck
import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./course.module.css";
import Rating from "@mui/material/Rating";

export default function Testimonials(Props) {
  const [value, setValue] = React.useState(5);
  return (
    <Box>
        <Box
          className={` ${styles.testi}`}
          sx={{ textAlign: "center", height: 400, width: 400, margin : "auto" }}
        >
          <img
            src={Props.imageSrc}
            className="card-img-top"
            alt="img-course.jpg"
          />
          <div className="card-body">
            <Typography
              variant="h5"
              sx={{ textAlign: "center", marginTop: "16px" }}
            >
              {Props.name}
            </Typography>
            <p className={styles.mentor}>- {Props.role} -</p>
            <p>
              {/* Nama pembuat */} <br />
              <p>"{Props.content}"</p>
              <span className="card-text">
                <Rating
                  name="read-only"
                  value={Props.rating}
                  readOnly
                  sx={{ marginTop: "12px" }}
                />
              </span>
            </p>
          </div>
        </Box>
    </Box>
  );
}
