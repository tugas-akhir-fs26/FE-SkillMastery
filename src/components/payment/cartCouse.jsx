import {
  Avatar,
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import Style from "./cartCourse.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import PositionedSnackbar from "./alertDelete";

export default function CartCourse({ data }) {
  const dataMentor = data.Course.Mentor.User.Name;
  const mentorAvatar =
    data.Course.Mentor.User.Avatar || "/static/images/avatar/2.jpg";

  const [open, setOpen] = React.useState(false);
  const [Delete, setDelete] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function deleteHandler(id) {
    try {
      const token = localStorage.getItem("token"); // Assuming you stored the token with key "token"
      setOpen(false);
      setDelete(true);
      setTimeout(() => setDelete(false), 2000);

      axios.delete(`http://localhost:3000/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <Box>
      <Box
        sx={{
          width: { xs: "75vw", md: "60vw" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "start",
          justifyContent: "space-around",
          p: 3,
          borderTop: "1px solid black",
          textAlign: "left",
        }}
      >
        <img
          src={data?.Course.image}
          alt="web"
          className={`${Style.img_cart}`}
        />
        <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "20px", md: "24px", textAlign: "left" },
            }}
          >
            {data?.Course.title}
          </Typography>
          <Typography
            sx={{
              fontWeight: 300,
              opacity: "70%",
              fontSize: { xs: "12px", md: "14px" },
              marginBottom: "16px",
            }}
          >
            {data?.Course.short_desc}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "8px", md: "12px" },
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={mentorAvatar}
              sx={{
                width: "25px",
                height: "25px",
              }}
            />
            <Box
              sx={{
                fontWeight: { xs: 600, md: 400 },
                fontSize: "20px",
                textTransform: "capitalize",
              }}
            >
              {dataMentor}
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "20px", md: "24px" },
              marginTop: { xs: "18px", md: 0 },
            }}
          >
            {data?.Course.price}
          </Typography>
        </Box>
        <Button
          sx={{ height: "50px", display: "flex", alignItems: "center" }}
          onClick={() => handleClickOpen()}
        >
          <DeleteIcon sx={{ color: "red" }} />
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Anda Yakin ingin Menghapus {data.Course.title}?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => deleteHandler(data.id)} autoFocus>
              Ya
            </Button>
            <Button onClick={() => handleClose}>Tidak</Button>
          </DialogActions>
        </Dialog>
      </Box>
      <PositionedSnackbar valueAlert={Delete} />
    </Box>
  );
}
