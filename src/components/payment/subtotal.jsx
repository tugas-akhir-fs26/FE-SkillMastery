import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Subtotal() {
    const payments = ["bca", "gopay", "mandiri", "ovo", "spay"]
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", p:2 }}>
        <Typography
          sx={{
            fontSize: "24px",
            opacity: "60%",
            fontWeight: 600,
            marginBottom: "8px",
          }}
        >
          Total :
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, fontSize: "32px", marginBottom: "12px" }}
        >
          Rp200.000
        </Typography>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            width: "100%",
            height: "32px",
            fontSize : "18px",
            p: 3,
          }}
        >
          Checkout
        </Button>
      </Box>

      <Box sx={{borderTop : "1px solid black", p:2, marginTop : "12px"}}>
        <Typography sx={{fontSize : "20px", opacity : "60%", fontWeight : 600}}>
            Metode Pembayaran 
        </Typography>
        <Box sx={{display : "flex", gap : "8px", marginTop : "12px"}}>
            {payments.map((payment)=> (
                <img src={`../src/assets/payments/${payment}.png`} alt={payment} width={100} height={40} />
            ))}
        </Box>
      </Box>
    </Box>
  );
}
