import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import InstrukturForm from './instruktur/cinstrukturform';
import InstrukturNextForm from './instruktur/cinstrukturnextform';
import InstrukturSuccess from './instruktur/cinstruktursuccess';

const steps = ['Isi Data Diri', 'Pengalaman Dan Skill', 'Pendaftaran Berhasil'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <InstrukturForm />;
    case 1:
      return <InstrukturNextForm />;
    case 2:
      return <InstrukturSuccess />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep === 0) {
      const namaValue = document.getElementById('nama').value;
      const alamatValue = document.getElementById('alamat').value;
      const nomorHpValue = document.getElementById('nomorhp').value;

      if (!namaValue || !alamatValue || !nomorHpValue) {
        alert('Semua data harus diisi.');
        return;
      }
    }
    // else if (activeStep === 1) {
    //   const radioValue = document.querySelector('input[name="row-radio-buttons-group"]:checked');
    //   const selectedSkills = document.querySelectorAll('.MuiChip-root');

    //   if (!radioValue || selectedSkills.length === 0) {
    //     alert('Semua data harus diisi.');
    //     return;
    //   }
    // }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div style={{ margin: 0, padding: '0' }}>
      <React.Fragment>
        <CssBaseline />
        <AppBar
          position="absolute"
          color="default"
          elevation={0}
          sx={{
            position: 'relative',
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        ></AppBar>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Page Guru
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
                    {activeStep === steps.length - 1 ? 'Masuk' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Paper>
        </Container>
      </React.Fragment>
    </div>
  );
}
