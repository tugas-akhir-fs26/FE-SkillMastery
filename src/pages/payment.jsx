import React from "react";
import CartCourse from "../components/payment/cartCouse";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Subtotal from "../components/payment/subtotal";

function Payment() {
  return (
    <Box sx={{ p: 3, display: "flex", alignItems : "center", }}>
      <Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 800, fontSize: "32px", p: 2 }}
        >
          Shopping Cart
        </Typography>

        <Typography sx={{ fontWeight: 300, fontSize: "18px", p: 1 }}>
          2 Course in cart
        </Typography>
        <CartCourse />
        <CartCourse />
      </Box>
      <Box sx={{width : "30vw", p:2, height :"50vh"}}>
        <Subtotal />
      </Box>
    </Box>
  );
}

export default Payment;
