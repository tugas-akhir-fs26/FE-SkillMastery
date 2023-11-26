// @ts-nocheck
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
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";

export default function StepTwo({ validationChange }) {
  const [error, setError] = useState(false);
  const [sections, setSections] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAddSection = () => {
    setSections((prevSections) => [...prevSections, { content: "" }]);
  };

  const handleRemoveSection = (index) => {
    setSections((prevSections) => {
      const newSections = [...prevSections];
      newSections.splice(index, 1);
      return newSections;
    });
  };

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    // Handle the selected file for the specific section (index)
    console.log(`Selected File for Section ${index}:`, file);
  };

  const handleSectionContentChange = (event, index) => {
    const newSections = [...sections];
    newSections[index].content = event.target.value;
    setSections(newSections);
  };
  
  const validationSection = () => {
    const hasSections = sections.length > 0;
    validationChange(hasSections && isSubmitted);
  }

  const HandleSubmit = () => {
    // logic mengirim data disini
    setIsSubmitted(true)
    validationChange(true)
  };

  useEffect(()=> {
    validationSection()
  }, [sections, isSubmitted])


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
        variant="contained"
        color="primary"
        onClick={handleAddSection}
        sx={{ margin: "16px 0" }}
      >
        Add Section
      </Button>
      {sections.map((section, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Box
              sx={{
                display: {
                  md: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                },
              }}
            >
              <Typography>Section {index + 1}</Typography>
              <Button
                onClick={() => handleRemoveSection(index)}
                startIcon={<DeleteIcon />}
                sx={{}}
              ></Button>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              label="Section Content"
              multiline
              rows={5}
              value={section.content}
              onChange={(e) => handleSectionContentChange(e, index)}
              sx={{ width: "100%" }}
            />
          </AccordionDetails>
        </Accordion>
      ))}
      {sections.length > 0 ? (
        <Button
          variant="contained"
          color="success"
          sx={{ margin: "16px 0" }}
          onClick={HandleSubmit}
        >
          Submit
        </Button>
      ) : (
        <Alert severity="info">Belum ada Section yang dibuat!</Alert>
      )}
    </Box>
  );
}
