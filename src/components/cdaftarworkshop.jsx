import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function DaftarWorkShop() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const number = event.target.number.value.trim();

    if (!name || !email || !number) {
      alert('Semua Data harus diisi');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Email Tidak Valid');
      return;
    }

    const phoneNumberRegex = /^\d+$/;
    if (!phoneNumberRegex.test(number)) {
      alert('Nomor Telepon hanya berisi angka');
      return;
    }

    console.log({
      name,
      email,
      number,
    });
    navigate('/');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Event Registration
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="name" label="Nama" name="name" autoComplete="name" />
            <TextField margin="normal" required fullWidth id="email" label="Email" name="email" autoComplete="email" />
            <TextField margin="normal" required fullWidth id="number" label="No Hp" name="number" autoComplete="number" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Daftar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
