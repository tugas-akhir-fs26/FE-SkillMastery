import React from "react";
import CartCourse from "../components/payment/cartCouse";
import Typography from "@mui/material/Typography";

function Payment() {
  return (
    <>
        <Typography variant="h5" sx={{fontWeight : 800, fontSize : "32px"}}>
            Shopping Cart
        </Typography>
      <CartCourse />
    </>
  );
}

export default Payment;
