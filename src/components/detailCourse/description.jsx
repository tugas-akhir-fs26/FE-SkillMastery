import { Box, Typography } from "@mui/material";
import React from "react";

export default function DescriptionCourse({data}) {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          fontSize: "24px",
          fontWeight: "600",
        }}
      >
        Tentang Course ini
      </Typography>

      <ul>
        <li style={{listStyleType : "none"}}>
          {data?.description}
        </li>
      </ul>
    </Box>
  );
}
