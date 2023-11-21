// @ts-nocheck
import Typography from "@mui/material/Typography";
import React from "react";
import Style from "./testiCard.module.css";

export default function TestiCard() {
  return (
    <div className={`${Style.card_wrapper_testi}`}>
      <div className={`${Style.img_wrapper}`}>
        <div className={`${Style.circle}`}></div>
        <img
          src="../src/assets/testimoni/testi_2.png"
          alt="Belajar Node"
          width={"300px"}
        />
      </div>
      <Typography
        variant="h5"
        sx={{ fontSize: "20px", fontWeight: 600, marginTop: "10px" }}
      >
        Dionisius Reinaldo
      </Typography>
      <Typography
        gutterBottom
        component="div"
        sx={{ fontSize: "18px", width: "50vw", marginTop: "20px" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
        voluptatum cumque blanditiis vel nihil perferendis expedita quam cum
        corporis aut eius laborum, possimus ipsa in culpa nemo animi dolor
        temporibus?
      </Typography>
    </div>
  );
}
