import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

export default function WorkShop() {
  const navigate = useNavigate();
  return (
    <Box sx={{display : "flex", flexDirection : "column" ,alignItems:"center", width : "100%", height : "100vh", p:2}}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography>
          <h1>Events</h1>
        </Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap : "20px",
            p : 3
          }}
        > 

          <div style={{ flex: '1 1 300px', margin: '8px' }}>
            <Card sx={{ minWidth: 150, maxWidth: 350, height : 400 }}>
              <CardMedia component="img" height="140" image="/src/assets/kantor.jpg" />
              <CardContent>
                <Typography variant="h5" component="div" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  <Box sx={{fontWeight:600}}>
                    <span style={{ color: '#0460d9',}}>Skill</span>
                    <span style={{ color: '#000000',  }}>Mastery | </span>
                    Code Gameplay
                  </Box>
                </Typography>
                <Typography sx={{ mb: 1.5, textAlign : "left"}} color="text.secondary">
                  Coming Soon
                </Typography>
                <Typography variant="body2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis',textAlign : "left" }}>
                  Tips dan trik bermain codingan dapat memberikan peluang sebagai programmer sukses.
                </Typography>
              </CardContent>
              <CardActions>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    onClick={() => {
                      navigate('/daftarworkshop');
                    }}
                  >
                    Daftar
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </div>
          <div style={{ flex: '1 1 300px', margin: '8px' }}>
            <Card sx={{ minWidth: 150, maxWidth: 350, height : 400 }}>
              <CardMedia component="img" height="140" image="/src/assets/kantor.jpg" />
              <CardContent>
                <Typography variant="h5" component="div" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  <Box sx={{fontWeight:600}}>
                    <span style={{ color: '#0460d9' }}>Skill</span>
                    <span style={{ color: '#000000' }}>Mastery | </span>
                    Entertaining Techonolgy Idea
                  </Box>
                </Typography>
                <Typography sx={{ mb: 1.5, textAlign : "left"}} color="text.secondary">
                  Coming Soon
                </Typography>
                <Typography variant="body2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis',textAlign : "left" }}>
                  Cara mencari ide bisnis yang cocok di era teknologi terkini.
                </Typography>
              </CardContent>
              <CardActions>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    onClick={() => {
                      navigate('/daftarworkshop');
                    }}
                  >
                    Daftar
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </div>
          <div style={{ flex: '1 1 300px', margin: '8px' }}>
            <Card sx={{ minWidth: 150, maxWidth: 350,height : 400 }}>
              <CardMedia component="img" height="140" image="/src/assets/kantor.jpg" />
              <CardContent>
                <Typography variant="h5" component="div" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  <Box sx={{fontWeight:600}}>
                    <span style={{ color: '#0460d9' }}>Skill</span>
                    <span style={{ color: '#000000' }}>Mastery | </span>
                    Real Life 404 Not Found
                  </Box>
                </Typography>
                <Typography sx={{ mb: 1.5, textAlign : "left"}} color="text.secondary">
                  Coming Soon
                </Typography>
                <Typography variant="body2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis',textAlign : "left" }}>
                  Tips dan Trik menghadapi permasalahan di era digital dengan solusi yang diberikan.
                </Typography>
              </CardContent>
              <CardActions>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    onClick={() => {
                      navigate('/daftarworkshop');
                    }}
                  >
                    Daftar
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </div>
          
        </Box>
      </div>
    </Box>
  );
}
