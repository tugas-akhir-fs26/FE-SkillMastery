import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function StepTwo({ validationChange }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const StepOne = (event) => {
    event.preventDefault();

    if (value.trim() === "") {
      setError(true);
      return;
    }
    // ketika sudah ada isinya maka kiirm data saat ini pake alert
    alert(value);
    validationChange(true);
  };

  const DescHandler = (event) => {
    setValue(event.target.value);
    setError(false);

    if (event.target.value.trim() === "") {
      validationChange(false);
      return;
    }
  };
  return (
    <Box>
      {error ? (
        <Alert severity="error" sx={{ marginBottom: "12px" }}>
          Isi Deskripsi Terlebih Dahulu!
        </Alert>
      ) : (
        ""
      )}
      <form>
        <TextField
          sx={{ width: "100%", fontSize: "16px", marginBottom: "18px" }}
          id="outlined-multiline-static"
          label="Deskripsi Course"
          rows={4}
          multiline
          placeholder="Ceritakan kepada user mengenai course anda"
          required
          value={value}
          onChange={DescHandler}
        />

        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", px: 3 }}
          onClick={StepOne}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
