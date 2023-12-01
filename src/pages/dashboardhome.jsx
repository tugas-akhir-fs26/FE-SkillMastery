import React from 'react';
import SideBar from '../sidebar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { StyledEngineProvider } from '@mui/material/styles';
import MoneyReport from './moneyreport';
import MoneyChart from './moneychart';

export default function Home() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Box sx={{ display: 'flex' }}>
          <SideBar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div className="chart">
              <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>Pendapatan di tahun 2023</h1>
              <h3>Total : Rp.10.000.000</h3>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 500,
                  }}
                >
                  <MoneyChart />
                </Paper>
              </Grid>
            </div>
            <div style={{ paddingTop: '20px' }}>
              <Grid>
                <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>Laporan Keuangan</h1>
                <Paper>
                  <MoneyReport />
                </Paper>
              </Grid>
            </div>
          </Box>
        </Box>
      </StyledEngineProvider>
    </>
  );
}
