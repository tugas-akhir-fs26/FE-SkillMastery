import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function StepTwo({ validationChange }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const StepOne = (event) => {
    event.preventDefault();

    if (value.trim() === "") {
      setError(true);
      return;
    }
    // ketika sudah ada isinya maka kiirm data saat ini pake alert
    alert(value);
    validationChange(true);
  };

  const DescHandler = (event) => {
    setValue(event.target.value);
    setError(false);

    if (event.target.value.trim() === "") {
      validationChange(false);
      return;
    }
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Box>
      {error ? (
        <Alert severity="error" sx={{ marginBottom: "12px" }}>
          Isi Deskripsi Terlebih Dahulu!
        </Alert>
      ) : (
        ""
      )}
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        sx={{marginBottom : "16px",}}
      >
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Section 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Section 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
