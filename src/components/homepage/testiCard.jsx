import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

export default function TestiCard() {
  return (
    <Card sx={{ maxWidth: 300, border: "1px solid black", margin: "auto", }}>
      <CardMedia
        sx={{ height: 200 }}
        image="../src/assets/courses/figma.jpg"
        title="Belajar Node"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 600 }}
        >
          Belajar NodeJS
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: "20px" }}>
          Dionisius Reinaldo
        </Typography>
      </CardContent>
    </Card>
  );
}
