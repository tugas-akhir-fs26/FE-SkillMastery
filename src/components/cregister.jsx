import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/register.css";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  Alert,
  Backdrop,
  Box,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import ModalSuccess from "./login/modalsuccess";

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(true);
  const [message, setMessage] = React.useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (Object.values(errors).some((error) => error !== "")) {
      console.log("Ada field yang belum terisi");
      return;
    }

    axios({
      method: "POST",
      url: "http://localhost:3000/auth/register",
      data: {
        Name: values.name,
        email: values.email,
        password: values.password,
      },
    })
      .then(function (response) {

        if (response.data.ok === false) {
          setLoading(false);
          setErrors(true);
          setMessage(response.data.message)
          setValues({
            name: "",
            email: "",
            password: "",
          });
          return;
        }
        setLoading(false);
        setSuccess(true)
        setMessage(response.data.message)
        setValues({
          name: "",
          email: "",
          password: "",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Box>
      {errors ? (
        <Alert severity="error">This is an error alert — check it out!</Alert>
      ) : (
        ""
      )}
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        ""
      )}
      {success ? <ModalSuccess open={success} message={message} /> : ""}
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
              <Typography>Selamat datang di halaman Register</Typography>
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
                  label="Nama"
                  name="name"
                  type="text"
                  variant="outlined"
                  onChange={handleInput}
                  sx={{ width: "100%" }}
                  value={values.name}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  onChange={handleInput}
                  sx={{ width: "100%" }}
                  value={values.email}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  onChange={handleInput}
                  sx={{ width: "100%" }}
                  value={values.password}
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
                    Sudah Punya Akun?
                    <Stack spacing={2} direction="row">
                      <Button
                        variant="text"
                        onClick={() => {
                          navigate("/login");
                        }}
                        sx={{
                          textTransform: "capitalize",
                          fontSize: "18px",
                          color: "#0460D9",
                        }}
                      >
                        Login
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
    </Box>
  );
}

export default Register;
