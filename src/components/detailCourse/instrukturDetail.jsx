// @ts-nocheck
import { Avatar, Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DetailInstruktur({ data }) {
  const [dataMentor, setDataMentor] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Pastikan data dan data.Mentor tidak undefined sebelum mengakses id
        if (data && data.Mentor && data.Mentor.id) {
          const response = await axios.get(
            `http://localhost:3000/mentors/${data.Mentor.id}`
          );
          setDataMentor(response.data.data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [data]);

  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          fontSize: "24px",
          fontWeight: "600",
        }}
      >
        Tentang Mentor
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px", p: 2 }}>
        <Avatar alt="Remy Sharp" src={dataMentor?.User?.avatar} />
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
            {dataMentor?.User?.Name}
          </Typography>
        </Box>
      </Box>
      <ul>
        <li style={{ listStyleType: "none" }}>
          {dataMentor?.Mentor_Profile?.bio}
        </li>
      </ul>
    </Box>
  );
}
