import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import InstrukturSuccess from '../images/instruktursuccess.svg';

export default function Review() {
  return (
    <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '20px' }}>
        <Typography variant="h2">Berhasil</Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={InstrukturSuccess} alt="Success" style={{ width: '50%', height: 'auto' }} />
      </div>
    </React.Fragment>
  );
}
