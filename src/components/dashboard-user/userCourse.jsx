import {
  Avatar,
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import Style from "../payment/cartCourse.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function UserCourse({ data }) {
  return (
    <Box>
      <Box
        sx={{
          width: { xs: "75vw", md: "60vw" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "start",
          justifyContent: "space-around",
          p: 3,
          borderTop: "1px solid black",
          textAlign: "left",
        }}
      >
        <img
          src={data?.Course?.image}
          alt="web"
          className={`${Style.img_cart}`}
        />
        <Box sx={{ p: 2 }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "20px", md: "24px", textAlign: "left" },
            }}
          >
            {data?.Course?.title}
          </Typography>
          <Typography
            sx={{
              fontWeight: 300,
              opacity: "70%",
              fontSize: { xs: "12px", md: "14px" },
              marginBottom: "16px",
              textAlign: "left",
            }}
          >
            {data?.Course?.short_desc}
          </Typography>
          <Button variant="contained" sx={{ textTransform: "capitalize" }}>
            Lihat Course
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
