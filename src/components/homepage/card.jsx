import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RatingCourse from "./rating";

export default function CourseCard({ course }) {
  const [value, setValue] = React.useState(5);

  return (
    <Card
      sx={{
        width: { xs: "250px", md: "300px" },
        border: "1px solid black",
        margin: "auto",
        marginBottom: "20px",
      }}
    >
      <CardMedia
        sx={{ height: 150 }}
        image={course.image}
        title={course.title}
      />
      <CardContent sx={{}}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 600, fontSize : "20px"}}
        >
          {course.title}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: "20px" }}>
          Dionisius Reinaldo
        </Typography>
        {/* tempat render rating */}
        <RatingCourse value={value} />
        <Typography
          sx={{
            fontSize: "24px",
            marginTop: "10px",
            fontWeight: 600,
            textAlign: "left",
          }}
        >
          {course.price}
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0460D9",
            color: "white",
            textTransform: "capitalize",
            fontSize: "16px",
            fontWeight: 400,
            marginTop: "16px",
          }}
        >
          Detail Course
        </Button>
      </CardContent>
    </Card>
  );
}
