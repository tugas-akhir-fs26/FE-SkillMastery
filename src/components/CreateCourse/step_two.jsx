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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";

export default function StepTwo({ validationChange }) {
  const [error, setError] = useState(false);
  const [sections, setSections] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAddSection = () => {
    setSections((prevSections) => [...prevSections, { content: "" }]);

    setSections(newSections);

    // Cek apakah setidaknya satu section memiliki konten yang kosong
    const hasEmptySection = newSections.some(
      (section) => section.content.trim() === ""
    );

    // Set error menjadi true jika ada yang kosong
    setError(hasEmptySection);
  };

  const handleRemoveSection = (index) => {
    setSections((prevSections) => {
      const newSections = [...prevSections];
      newSections.splice(index, 1);
      return newSections;
    });
  };

  const handleSectionContentChange = (event, index) => {
    const newSections = [...sections];
    newSections[index].content = event.target.value;
    setSections(newSections);

    // setiap section yang dibuat valuenya ditaruh disini
  };

  const validationSection = () => {
    const hasSections = sections.length > 0;
    validationChange(hasSections && isSubmitted);
  };

  const HandleSubmit = () => {
    const hasEmptySection = sections.some(
      (section) => section.content.trim() === ""
    );

    if (!hasEmptySection) {
      setIsSubmitted(true);
      validationChange(true);
      setError(false)
      return;
    }
    setError(true);
    // logic mengirim data disini
  };

  useEffect(() => {
    validationSection();
  }, [sections, isSubmitted]);

  return (
    <Box>
      {error ? (
        <Alert severity="error" sx={{ marginBottom: "12px" }}>
          Isi Section Terlebih Dahulu!
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
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
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
              placeholder="Tuliskan materi yang akan dipelajari pada bab ini dan sertakan link pdf atau video jika ada"
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
