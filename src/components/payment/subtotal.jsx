import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Style from "./subtotal.module.css";
import axios from "axios";

export default function Subtotal({ data }) {
  const payments = [
    "https://res.cloudinary.com/dzajixld0/image/upload/v1701790088/bca_cwtvjj.png",
    "https://res.cloudinary.com/dzajixld0/image/upload/v1701790088/mandiri_xlwmc9.png",
    "https://res.cloudinary.com/dzajixld0/image/upload/v1701790088/gopay_nglpag.png",
    "https://res.cloudinary.com/dzajixld0/image/upload/v1701790089/ovo_ki6wl1.png",
    "https://res.cloudinary.com/dzajixld0/image/upload/v1701790089/spay_e1axe8.png",
  ];

  const subtotal = data;

  // Initialize total variable
  let total = 0;

  // Iterate over the array and sum up subtotal values
  subtotal.forEach((item) => {
    // Extract numeric value from subtotal (assuming it's always in the format "Rp.XXX.XXX")
    const subtotalValue = parseInt(
      item.subtotal.replace("Rp", "").replace(".", ""),
      10
    );

    // Add the numeric value to the total
    total += subtotalValue;
  });

  const CheckoutHandler = () => {
    try {
      const token = localStorage.getItem("token");

      const checkoutData = data.map((item) => ({
        userID: localStorage.getItem("id"),
        courseID: item.courseID,
        enrollment_date: new Date(),
      }));
      axios
        .post(`https://skillmastery.adaptable.app/checkout/`, checkoutData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // Handle success
          axios
            .delete(
              `https://skillmastery.adaptable.app/carts/user/${localStorage.getItem(
                "id"
              )}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then((deleteResponse) => {
              console.log("Carts deleted:", deleteResponse.data);
              // Lakukan tindakan tambahan jika diperlukan setelah menghapus carts
            })
            .catch((deleteError) => {
              console.error("Error deleting carts:", deleteError);
              // Handle error saat menghapus carts
            });
        })
        .catch((error) => {
          // Handle error
          console.error("Error:", error);
          // You can perform additional actions here based on the error
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <Box
      sx={{ width: "100%", borderTop: { xs: "1px solid black", md: "none" } }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          marginTop: { xs: "12px", md: 0 },
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            opacity: "60%",
            fontWeight: 600,
            marginBottom: "8px",
            textAlign: "left",
          }}
        >
          Total :
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, fontSize: "32px", marginBottom: "12px" }}
        >
          {`Rp${total.toLocaleString()}`}
        </Typography>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            width: "100%",
            height: "32px",
            fontSize: "18px",
            p: 3,
          }}
          onClick={() => CheckoutHandler()}
        >
          Checkout
        </Button>
      </Box>

      <Box sx={{ borderTop: "1px solid black", p: 2, marginTop: "12px" }}>
        <Typography sx={{ fontSize: "20px", opacity: "60%", fontWeight: 600 }}>
          Metode Pembayaran
        </Typography>
        <Box sx={{ display: "flex", gap: "8px", marginTop: "12px" }}>
          {payments.map((payment) => (
            <img
              src={payment}
              alt={payment}
              className={`${Style.img_payments}`}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
