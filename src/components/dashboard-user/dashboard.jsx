import React, { useState } from "react";
import SideBar from "../../sidebar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";
import UserCourse from "./userCourse";
import SidebarUser from "../profil-user/sidebarUser";
import axios from "axios";

export default function CourseUser() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  React.useEffect(() => {
    const id = localStorage.getItem("id");
    axios
      .get(`https://skillmastery.adaptable.app/checkout/user/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // Handle success
        setDatas(response.data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SidebarUser />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Kursus Anda</h1>
          <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            {datas.map((item) => (
              <UserCourse data={item} />
            ))}
          </div>
        </Box>
      </Box>
    </>
  );
}
