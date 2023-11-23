import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Subtotal() {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", p:2 }}>
        <Typography
          sx={{
            fontSize: "24px",
            opacity: "50%",
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
            p: 3,
          }}
        >
          Checkout
        </Button>
      </Box>

      <Box>
        
      </Box>
    </Box>
  );
}
