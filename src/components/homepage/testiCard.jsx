import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import React from "react";

export default function TestiCard() {
  return (
    <Card sx={{ maxWidth: 300, margin: "auto", maxHeight : 400 }}>
      <img
        src="../src/assets/courses/figma.jpg"
        alt="Belajar Node"
        width={"300px"}
      />
      <Typography variant="h5" sx={{ fontSize: "20px", fontWeight: 600 }}>
        Dionisius Reinaldo
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{  }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae voluptatum cumque blanditiis vel nihil perferendis expedita quam cum corporis aut eius laborum, possimus ipsa in culpa nemo animi dolor temporibus?
      </Typography>
    </Card>
  );
}
