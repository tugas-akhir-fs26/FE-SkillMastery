import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/register.css";
import axios from "axios";
import Validation from "./cregistervalidation";
import SVGImage from "./images/register.svg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Alert, Backdrop, CircularProgress } from "@mui/material";

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

  const [errors, setErrors] = useState({});
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


    try {
      const response = await axios.post(
        "https://skillmastery.adaptable.app/auth/register",
        {
          Name: values.name,
          email: values.email,
          password: values.password,
        }
      );

      if (response.status >= 200 && response.status < 300) {
        setOpen(false);
        setLoading(false);
        setMessage(response.data.message);
        setValues({
          name : "",
          email : "",
          password : ""
        })
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div className="body">
      <div className="container">
        <div className="register-container">
          <div className="register-form">
            <h1 className="logo-title">
              <span>Skill</span>
              <span>Mastery</span>
            </h1>
            <form
              id="regis-form"
              onSubmit={handleSubmit}
              style={{ position: "relative" }}
            >
              {loading ? (
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={open}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
              ) : (
                ""
              )}
              <div className="input-form">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nama"
                  name="name"
                  value={values.name}
                  onChange={handleInput}
                />
                <div className="textalert">
                  {errors.name && <span>{errors.name}</span>}
                </div>
              </div>
              <div className="input-form">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleInput}
                />
                <div className="textalert">
                  {errors.email && <span>{errors.email}</span>}
                </div>
              </div>
              <div className="input-form">
                <div className="input-password">
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleInput}
                  />
                  <div>
                    {errors.password && (
                      <span className="textalert">{errors.password}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="button">
                <Stack spacing={2} direction="row">
                  <Button variant="contained" onClick={handleSubmit}>
                    Daftar
                  </Button>
                </Stack>
              </div>
            </form>
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
                  style={{ color: "black" }}
                >
                  Log in
                </Button>
              </Stack>
            </p>
          </div>
        </div>
        <div className="img-container">
          <img src={SVGImage} />
        </div>
      </div>
    </div>
  );
}

export default Register;
