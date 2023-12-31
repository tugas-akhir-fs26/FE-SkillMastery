// @ts-nocheck
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export default function ModalSuccess(props) {
  const [open, setOpen] = useState(false);
  const { vertical, horizontal } = { vertical: "top", horizontal: "center" };

  useEffect(() => {
    if (props.open === true) {
      setOpen(true);
    }
  }, [props.open]);

  useEffect(() => {
    if (open) {
      // Menutup Snackbar otomatis setelah 2 detik
      const timeoutId = setTimeout(() => {
        handleClose();
      }, 2000);

      // Membersihkan timeout saat komponen dilepas (unmounted)
      return () => clearTimeout(timeoutId);
    }
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert severity="info" sx={{ width: "100%" }}>
          {props.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
