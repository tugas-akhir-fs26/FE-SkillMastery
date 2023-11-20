import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RatingCourse from "./rating";


export default function CourseCard() {
  const [value, setValue] = React.useState(5);

  return (
    <Card sx={{ maxWidth: 300, border : "1px solid black"}}>
      <CardMedia
        sx={{ height: 140 }}
        image="../src/assets/courses/figma.jpg"
        title="Belajar Node"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
          Belajar NodeJS
        </Typography>
        <Typography variant="subtitle1"sx={{fontSize:"20px"}}>Dionisius Reinaldo</Typography>
        {/* tempat render rating */}
        <RatingCourse value={value}/>
        <Typography sx={{fontSize:"24px", marginTop: "10px", fontWeight: 600 }}>Rp.120.000</Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0460D9",
            color: "white",
            textTransform: "capitalize",
            fontSize: "16px",
            fontWeight: 400,
            marginTop: "20px",
          }}
        >
          Detail Course
        </Button>
      </CardContent>
    </Card>
  );
}
