import React from "react";
import CartCourse from "../components/payment/cartCouse";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import Subtotal from "../components/payment/subtotal";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

function Payment() {
  return (
    <>
      <Navbar />
      <Box sx={{ p: 3, display: "flex", alignItems: "start", gap: "18px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
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

              {/* render list cart course */}
              <CartCourse />
              <CartCourse />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 2, height: "50vh", marginTop: "48px" }}>
              {/* render subtotal */}
              <Subtotal />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default Payment;
