import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import InfoCourse from "./infoCourse";
import CardDetailCourse from "./cardCart";
import axios from "axios";
import { useLocation } from "react-router-dom";

function DetailCourse() {

  const [datas, setDatas] = useState([])
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  // Ambil nilai dari parameter 'id'
  const id = queryParams.get("id");
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/courses/${id}`
      )
      .then((response) => {
        setDatas(response.data.data[0])
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box sx={{ height: "100%", p: 3 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={8}>
          <InfoCourse data={datas} />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardDetailCourse data={datas}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DetailCourse;
