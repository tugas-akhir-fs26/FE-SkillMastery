import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Curiculum({ data }) {
  const [datas, setDatas] = useState();

  useEffect(() => {
    if (data && data.Contents && data.Contents.length > 0) {
      try {
        const jsonString = data.Contents[0].section;

        // Parse JSON string directly without trimming
        const parsedSections = JSON.parse(jsonString);
        setDatas(parsedSections);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, [data]);

  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: "24px",
          fontWeight: "600",
        }}
      >
        Kurikulum
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: "18px",
          fontWeight: "400",
          opacity: "60%",
        }}
      >
        Yang akan anda pelajari dalam course ini
      </Typography>
      <Box sx={{ p: 1 }}>
        {datas &&
          datas.map((section, index) => (
            <Accordion key={index} disabled>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <Typography>{section.id}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{section.content}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </Box>
    </Box>
  );
}
