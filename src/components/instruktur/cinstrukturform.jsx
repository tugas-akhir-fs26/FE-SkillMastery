import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Alert, Button, Snackbar } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function InstrukturForm() {
  const [isRegister, setIsRegister] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const submitHandler = async () => {
    try {
      setIsLoading(true); // Set state isLoading to true

      // Make the POST request
      const response = await axios.post(
        `https://skillmastery.adaptable.app/mentors/${id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );


      if (response.data.ok) {
        setIsRegister(false);
        setOpen(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Reset isLoading to false, regardless of success or failure
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Bergabung bersama SkillMastery menjadi Mentor
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize" }}
            onClick={() => submitHandler()}
            disabled={isLoading} // Disable the button when loading
          >
            {isLoading ? "Loading..." : "Gabung Sekarang!"}
          </Button>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Berhasil Mendaftar sebagai Mentor!
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
