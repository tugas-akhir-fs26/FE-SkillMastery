import { Box, Typography } from "@mui/material";
import React from "react";

export default function DescriptionCourse() {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          fontSize: "24px",
          fontWeight: "600",
        }}
      >
        Tentang Course ini
      </Typography>

      <ul>
        <li>
          Kelas web developer akan membawa Anda ke dalam dunia pembuatan situs
          web modern. Anda akan mempelajari HTML, CSS, JavaScript, dan banyak
          lagi. Kelas ini akan membantu Anda memahami konsep dasar dan canggih
          dalam pengembangan web. Kenapa kamu mengambil kelas ini? Jika Anda
          tertarik untuk membangun situs web yang menarik dan fungsional, kelas
          ini akan membantu Anda menguasai keterampilan yang diperlukan. Kelas
          ini dibuat untuk siapa saja Orang yang ingin menjadi web developer,
          pemilik bisnis yang ingin memahami pengembangan web, atau siapa pun
          yang ingin memulai karir di dunia pemrograman web.
        </li>
      </ul>
    </Box>
  );
}
