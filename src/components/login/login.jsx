import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box, TextField, Typography } from "@mui/material";
import ModalSuccess from "./modalsuccess";
import { useDispatch } from "react-redux";
import {loginAction, setAvatarAction} from '../../redux/reducers/auth.reducer'

export default function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!values.email || !values.password) {
      setMessage("Email dan password kosong");
      setSuccess(true);

      // Reset success to false after 2 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 2000);

      
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
          setMessage(response.data.message);
          setSuccess(true);
          setValues({
            email: "",
            password: "",
          });

          setTimeout(() => {
            setSuccess(false);
          }, 2000);
          // Simpan token di localStorage
          localStorage.setItem("token", response.data.token);
          dispatch(loginAction());
          dispatch(setAvatarAction(response.data.Avatar));
          navigate('/')
        })
        .catch(function (error) {
          setSuccess(true);
          setMessage(error.response?.data.message || "An error occurred");

          setTimeout(() => {
            setSuccess(false);
          }, 2000);
        });
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };
  return (
    <Box>
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
                  type="email"
                  variant="outlined"
                  onChange={handleInput}
                  sx={{ width: "100%" }}
                  value={values.email}
                />
                <TextField
                  id="outlined-basic"
                  label="password"
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
    </Box>
  );
}
