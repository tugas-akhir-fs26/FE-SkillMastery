import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Style from "./courseDetail.module.css";
import axios from "axios";

export default function CardDetailCourse({ data }) {
  console.log(data);

  const cartHandler = async (id) => {
    try {
      const token = localStorage.getItem("token"); // Assuming you stored the token with key "token"

      const response = await axios.post(
        `https://skillmastery.adaptable.app/cart/`,
        {
          userID: localStorage.getItem("id"),
          courseID: id,
          subtotal : data.price
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Box
      sx={{
        border: "1px solid black",
        borderRadius: "5px",
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img src={data.image} alt={data.title} className={Style.img_cart} />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
      >
        <Typography sx={{ fontSize: "32px", fontWeight: 600 }}>
          {data.title}
        </Typography>
        <Typography
          sx={{ fontSize: "28px", fontWeight: 400, marginBottom: "16px" }}
        >
          {data.price}
        </Typography>
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize" }}
          onClick={() => cartHandler(data.id)}
        >
          Tambah Keranjang
        </Button>
      </Box>
    </Box>
  );
}
