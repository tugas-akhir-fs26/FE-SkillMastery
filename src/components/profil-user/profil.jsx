import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import HomeIcon from '@mui/icons-material/Home';
import './style.css'
import Home from '@mui/icons-material/Home';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <center><h3>Profile User</h3></center>
        <Divider />
        <List>
          {['Detail Profile', 'My Course', 'Home'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        
        <div>
            <h1>Detail Profile</h1>
            <p style={{textAlign:"left"}}>Foto Profile</p>
            <div style={{display:'flex', gap:'15px', alignItems:'center'}}>
                <Avatar sx={{ bgcolor: deepPurple[500], width:70, height:70, fontSize:30}}>AD</Avatar>
                <div >
                    <Button  variant="contained">Unggah Foto</Button>
                </div>
            </div>
            <div>
                <p style={{textAlign:"left"}}>Masukkan seluruh input yang diminta!</p>
            </div>

            
                 
                <TextField
                    sx={{width:'50%', paddingRight:'10px'}}

                    id="demo-helper-text-aligned"
                    label="Nama Depan.."
                />
                <TextField
                    sx={{width:'50%'}}
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Nama Belakang.."
                />
            </div>

            <div>
                <p style={{textAlign:"left"}}>Alamat Email</p>
                <TextField
                    style={{width:'100%'}}
                    disabled
                    id="filled-disabled"
                    label="andri@gmail.com"
                    variant="filled"
                />
            </div>

                <div>
                <p style={{textAlign:"left"}}>Biografi</p>
                 <TextField
                    style={{width:'100%'}}
                    id="outlined-multiline-static"
                    label="Biografi"
                    multiline
                    rows={3}
                    required
                />
            </div>
            
            <div style={{textAlign:'end', paddingTop:'20px'}}>
                <Button sx={{backgroundColor:'red'}} variant="contained" size="medium">
                    Simpan
                </Button>
            </div>
      </Box>
    </Box>
  );
}
