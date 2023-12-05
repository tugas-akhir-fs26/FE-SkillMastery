// @ts-nocheck
import Typography from "@mui/material/Typography";
import React from "react";
import Style from "./testiCard.module.css";

export default function TestiCard({data}) {
  console.log(data);
  return (
    <div className={`${Style.card_wrapper_testi}`}>
      <div className={`${Style.img_wrapper}`}>
        <div className={`${Style.circle}`}></div>
        <img
          src={data.imageSrc}
          alt="Belajar Node"
          width={"300px"}
        />
      </div>
      <Typography
        variant="h5"
        sx={{ fontSize: "20px", fontWeight: 600, marginTop: "10px" }}
      >
        {data.name}
      </Typography>
      <Typography
        gutterBottom
        component="div"
        sx={{ fontSize: "18px", width: "50vw", marginTop: "20px", textAlign : {xs: "justify", md : "center"} }}
      >
        {data.content}
      </Typography>
    </div>
  );
}
