import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function StepThree({ validationChange }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    if (title.trim() === "" || price === null) {
      setError(true);
      validationChange(false);
      return;
    }
    // ketika sudah ada isinya maka kiirm data saat ini pake alert
    alert(`title : ${title} price : ${price}`);
    validationChange(true);
  };

  const TitleCourseHandler = (event) => {
    setTitle(event.target.value);
    setError(false);

    if (event.target.value.trim() === "") {
      validationChange(false);
      return;
    }
  };

  const PriceHandler = (event) => {
    setPrice(event.target.value)
    // rupiah(price) digunakan untuk mengconvert nilai number di input menjadi format rp number
    // console.log(rupiah(price));
  };

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <Box>
      {error ? (
        <Alert severity="error" sx={{ marginBottom: "12px" }}>
          Isi Form Terlebih Dahulu!
        </Alert>
      ) : (
        ""
      )}
      <form>
        <TextField
          sx={{ width: "100%", fontSize: "16px", marginBottom: "18px" }}
          id="outlined-multiline-static"
          label="Judul Course"
          placeholder="Maksimal 15 kata"
          required
          value={title}
          onChange={TitleCourseHandler}
        />
        <TextField
          sx={{ width: "100%", fontSize: "16px", marginBottom: "18px" }}
          id="outlined-multiline-static"
          label="Harga Course"
          required
          type="number"
          value={price}
          onChange={PriceHandler}
        />

        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", px: 3 }}
          onClick={submitHandler}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
