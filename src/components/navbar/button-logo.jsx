import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Logo() {
  return (
    <Button sx={{ display: "flex"}}>
      <Typography
        variant="h5"
        sx={{ color: "#0460D9", fontWeight: 700, fontSize: "2em" }}
      >
        Skill
      </Typography>
      <Typography
        variant="h5"
        sx={{ color: "black", fontWeight: 700, fontSize: "2em" }}
      >
        Mastery
      </Typography>
    </Button>
  );
}
