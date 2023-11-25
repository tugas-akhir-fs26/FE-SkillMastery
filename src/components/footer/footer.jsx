// @ts-nocheck
import React from "react";
import Style from "./footer.module.css"
// import { SvgIcon } from "@mui/material";
import SvgIcons from "./iconsvg";

export default function Footer() {
  return (
    <footer>
      <div className={`${Style.footer_ct} p-3 mt-5`}>
        <div className={`row ${Style.footer_main}`}>
          <div className="col-md-4 align-items-center d-flex justify-content-center">
            <div className={`${Style.footer_logo}`}>
              <span className={`${Style.main_logo}`}>Skill</span>
              <span>Mastery</span>
              <div className={`${Style.team}`}>&copy;2023 by FS-26</div>
            </div>
          </div>
          <SvgIcons />
          <div className="col-md-4 align-items-center d-flex justify-content-center">
            <div className={`${Style.footer_link}`}>
              <ul>
                <li>
                  <a href="">Kategori</a>
                </li>
                <li>
                  <a href="">Testimoni</a>
                </li>
                <li>
                  <a href="">Workshop</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">Tentang Kami</a>
                </li>
                <li>
                  <a href="">Hubungi Kami</a>
                </li>
                <li>
                  <a href="">Bantuan</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
