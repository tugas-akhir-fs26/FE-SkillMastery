// @ts-nocheck
import { Typography } from "@mui/material";
import Style from "./footer.module.css";

export default function LinkSection() {
  return (
    <div className="col-md-4 align-items-center d-flex justify-content-center">
      <div className={`${Style.footer_link}`}>
        <ul>
          <li>
            <Typography sx={{fontSize : {xs: "18px", md :"20px"}}}>Course</Typography>
          </li>
          <li>
            <Typography sx={{fontSize : {xs: "18px", md :"20px"}}}>Testimoni</Typography>
          </li>
          <li>
            <Typography sx={{fontSize : {xs: "18px", md :"20px"}}}>Workshop</Typography>
          </li>
        </ul>
        <ul>
          <li>
            <Typography sx={{fontSize : {xs: "18px", md :"20px"}}}>Tentang kami</Typography>
          </li>
          <li>
            <Typography sx={{fontSize : {xs: "18px", md :"20px"}}}>Hubungi Kami</Typography>
          </li>
          <li>
            <Typography sx={{fontSize : {xs: "18px", md :"20px"}}}>Bantuan</Typography>
          </li>
        </ul>
      </div>
    </div>
  );
}
