// @ts-nocheck
import React from "react";
import Style from "./footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SvgIcons() {
  return (
    <div className="col-md-4 align-items-center d-flex justify-content-center">
      <div
        className={`${Style.footer_icon} align-items-center d-flex justify-content-center`}
      >
        <FacebookIcon sx={{ color: "white" }} />
        <MailIcon sx={{ color: "white" }} />
        <InstagramIcon sx={{ color: "white" }} />
      </div>    
    </div>
  );
}
