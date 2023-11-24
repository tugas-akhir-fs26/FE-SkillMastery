import { Box, Button, TextField } from "@mui/material";
import React from "react";

export default function StepOne() {
  return (
    <Box>
      <form>
        <TextField sx={{width : "100%", fontSize : "16px", marginBottom : "18px"}}
          id="outlined-multiline-static"
          label="Deskripsi Course"
          rows={4}
          multiline
          placeholder="Ceritakan kepada user mengenai course anda"
          required
        />

        <Button variant="contained" sx={{textTransform : "capitalize", px:3}}>Submit</Button>
      </form>
    </Box>
  );
}
