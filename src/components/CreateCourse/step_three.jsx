// @ts-nocheck
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Style from './stepper.module.css'

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function StepThree({ validationChange }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(false);
  const [file, setFile] = useState();

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
    setPrice(event.target.value);
    // rupiah(price) digunakan untuk mengconvert nilai number di input menjadi format rp number
    // console.log(rupiah(price));
  };

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            gap : "16px"
          }}
        >
          <Typography
            sx={{ fontWeight: 600, fontSize: {xs : "18px",md :"24px"}, textAlign : "center" }}
          >
            Upload Banner Course Image
          </Typography>
          <Box
            sx={{ width: {xs : "200px", md :"250px"}, height: {xs : "150px", md :"200px"}, border: "1px dashed black", margin : "auto" }}
          >
              <img src={file} alt="Preview Image" className={Style.img_course}/>
          </Box>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{ margin: "auto", marginBottom: "16px" }}
          >
            Upload file
            <VisuallyHiddenInput type="file" onChange={handleChange} />
          </Button>
        </Box>
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
