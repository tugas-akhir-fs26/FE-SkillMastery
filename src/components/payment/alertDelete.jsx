import * as React from "react";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export default function PositionedSnackbar({ valueAlert }) {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;



  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={valueAlert}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert severity="info">Berhasil Menghapus Data Cart!</Alert>
      </Snackbar>
    </Box>
  );
}
