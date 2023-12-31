import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepOne from "./step_one";
import StepTwo from "./step_two";
import StepThree from "./step_three";

const steps = ["Deskripsi Kursus", "Upload Materi", "Publish Kursus"];

export default function HeaderStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [valid, setValid] = React.useState(false);

  const isStepOptional = (step) => {
    return step === 5;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleStepValidation = (isValid) => {
    setValid(isValid);
  };

  return (
    <Box sx={{ width: {xs : "80vw", md : "100%"},}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Box sx={{display : "flex", alignItems : "center", justifyContent : "center", flexDirection : "column", marginTop : "24px"}}>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Selamat Anda Berhasil Membuat Course!
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2, alignItems : "center"}}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button variant="contained">Kembali ke Dashboard</Button>
          </Box>
        </Box>
      ) : (
        <React.Fragment>
          {/* render step nya  */}
          <Box sx={{ p: 3, border: "1px solid black", marginTop: "24px" }}>

            {/* render step 1 */}
            {activeStep === 0 && (
              <StepOne validationChange={handleStepValidation} />
            )}
            {/* render step 2 */}
            {activeStep === 1 && (
              <StepTwo validationChange={handleStepValidation} />
            )}
            {activeStep === 2 && (
              <StepThree validationChange={handleStepValidation} />
            )}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext} disabled={!valid}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
