import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import axios from "axios";
import Validation from "../cregistervalidation";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    const { name, email, password } = values;

    if (Object.values(errors).some((error) => error !== "")) {
      console.log("Ada field yang belum terisi");
      return;
    }

    try {
      axios({
        method : "POST",
        url : "https://skillmastery.adaptable.app/auth/register",
        data : {
          Name : name,
          email : email,
          password : password
        }
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
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
            <form id="regis-form" onSubmit={handleSubmit}>
              <div className="input-form">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nama"
                  name="name"
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
                  <Button
                    variant="contained"
                    onClick={() => {
                      navigate("/homepage");
                    }}
                    onSubmit={handleSubmit}
                  >
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
        <div className="img-container"></div>
      </div>
    </div>
  );
}
