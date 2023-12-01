import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

export default function DetailInstruktur() {
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
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px", p:2}}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />

        <Box>
          <Typography sx={{fontSize : "24px", fontWeight : 600}}>M Farel</Typography>
        </Box>
      </Box>
      <ul>
        <li>
          Sebagai seorang instruktur, saya berkomitmen untuk memandu siswa dalam
          perjalanan mereka memahami dan menguasai dunia pengembangan web. Saya
          percaya bahwa keterampilan pengembangan web adalah salah satu kunci
          keberhasilan dalam era digital ini, dan saya bersemangat untuk
          membagikan pengetahuan dan pengalaman saya kepada siswa-siswa saya.
          Dengan pengalaman praktis dalam pengembangan web, saya telah bekerja
          pada berbagai proyek yang melibatkan teknologi terbaru, termasuk HTML,
          CSS, JavaScript, kerangka kerja (frameworks) front-end seperti React
          dan Angular, serta bahasa pemrograman back-end seperti Node.js,
          Python, atau Ruby on Rails. Saya memiliki keahlian dalam merancang dan
          mengembangkan aplikasi web responsif, menciptakan antarmuka pengguna
          yang menarik, dan memecahkan tantangan teknis yang mungkin muncul
          selama proses pengembangan.
        </li>
      </ul>
    </Box>
  );
}
