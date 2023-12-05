import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function SecondForm() {
  const [bio, setBio] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [mentorID, setMentorID] = React.useState('');
  const userID = localStorage.getItem('id');
  React.useEffect(() => {
    const fetchMentorID = async () => {
      
      try {
        const response = await axios.get(`http://localhost:3000/mentors/${userID}`);
        setMentorID(response.data.data[0].id);
        console.log(response.data.data[0].id);
      } catch (error) {
        console.error('Error fetching mentor data:', error);
      }
    };

    fetchMentorID();
  }, []);

  
  const handleInput = (e) => {
    setBio(e.target.value);
  };

  const submitHandler = async () => {
    const userID = localStorage.getItem('id');

    if (bio === '' || mentorID === '') {
      return;
    }

    try {
      setIsLoading(true);

      const response = await axios.post(
        'https://skillmastery.adaptable.app//mentors/',
        {
          userID : userID,
          mentorID : mentorID,
          bio : bio,
          skill : ""
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      console.log(response.data.data);

      if (response.data.ok) {
        console.log('Berhasil menambahkan profile mentor');
      } else {
        console.error('Gagal menambahkan profile mentor');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        Pengalaman & Skill
      </Typography>
      <Typography variant="h6" gutterBottom>
        Silahkan Lengkapi Data Pendukung Anda
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="bio"
            name="bio"
            type="text"
            variant="outlined"
            onChange={handleInput}
            value={bio}
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{ textTransform: 'capitalize' }}
            onClick={submitHandler}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Kirim Data'}
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
