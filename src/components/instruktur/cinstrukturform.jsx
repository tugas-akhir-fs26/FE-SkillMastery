import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function InstrukturForm() {
  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        Lengkapi Profil
      </Typography>
      <Typography variant="h6" gutterBottom>
        Silahkan Lengkapi Data Anda Terlebih Dahulu
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField required id="nama" name="nama" label="Nama Lengkap" fullWidth autoComplete="shipping address-line1" variant="standard" />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="alamat" name="alamat" label="Alamat" fullWidth autoComplete="shipping address-line2" variant="standard" />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="nomorhp" name="nomorhp" label="Nomor Telepon" fullWidth autoComplete="shipping address-line2" variant="standard" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
