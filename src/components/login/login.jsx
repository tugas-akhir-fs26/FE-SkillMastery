import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";
import Validation from "../cregistervalidation";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box, TextField, Typography } from "@mui/material";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setErrors(Validation(values));
    console.log(values);
    if (Object.values(errors).some((error) => error !== "")) {
      console.log("Ada field yang belum terisi");
      return;
    }

    try {
      axios({
        method: "POST",
        url: "http://localhost:3000/auth/login",
        data: {
          email: values.email,
          password: values.password,
        },
      })
        .then(function (response) {
          console.log(response.data);
          localStorage.setItem("token", response.data.token);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <Box className="body">
      <div className="container">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          {/* Header */}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {/* logo skillmastery */}
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#0460D9",
                  fontWeight: 700,
                  fontSize: "48px",
                  textTransform: "capitalize",
                }}
              >
                Skill
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "black",
                  fontWeight: 700,
                  fontSize: "48px",
                  textTransform: "capitalize",
                }}
              >
                Mastery
              </Typography>
            </Box>
            <Typography>Selamat datang di halaman login</Typography>
          </Box>
          <form>
            <Box
              className="input-form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "32px", md: "24px" },
                width: { xs: "300px", md: "450px" },
                height: { xs: "100vh", md: "100%" },
                p: 3,
                marginTop: "24px",
                alignItems: "center",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Email"
                name="email"
                variant="outlined"
                onChange={handleInput}
                sx={{ width: "100%" }}
              />
              <TextField
                id="outlined-basic"
                label="password"
                name="password"
                variant="outlined"
                onChange={handleInput}
                sx={{ width: "100%" }}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Stack spacing={2} direction="row">
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      px: 5,
                      fontWeight: 400,
                      fontSize: "18px",
                    }}
                    variant="contained"
                    // onClick={() => {
                    //   navigate("/");
                    // }}
                    onClick={handleSubmit}
                  >
                    Masuk
                  </Button>
                </Stack>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Belum Punya Akun?
                  <Stack spacing={2} direction="row">
                    <Button
                      variant="text"
                      onClick={() => {
                        navigate("/register");
                      }}
                      sx={{
                        textTransform: "capitalize",
                        fontSize: "18px",
                        color: "#0460D9",
                      }}
                    >
                      Daftar
                    </Button>
                  </Stack>
                </p>
              </Box>
            </Box>
          </form>
        </Box>
        <Box className="img-container" sx={{ width: "100%" }}>
          <img src="../src/assets/register.svg" alt="Login Image" />
        </Box>
      </div>
    </Box>
  );
}
