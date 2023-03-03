import React from "react";
import { Icon } from "../components/Icons";
import Navbar from "../components/Navbar";
import "../style/home.css";

export default function About() {
  const visible = true;
  return (
    <div className={`about ${visible && "visible"}`}>
      <Navbar />
      <div className="a_top">
        <div>
          <span className="circle"></span>
          <span className="triangle"></span>
          <span className="square"></span>
          <span className="square2"></span>
          <h1 className="h_h1">Jr. Full Stack Developer</h1>
          <a href="./about/cv_zaursharifov.pdf" target={"_blank"} className="a_btn">
            RESUME <span className="span">→</span>
          </a>
        </div>
        <div className="a_bottom">
          <a href="/" className="a_img">
            <Icon name={"linkedin"} size={34} />
          </a>
          <a href="/" className="a_img">
            <Icon name={"github"} size={34} />
          </a>
          <a href="/" className="a_img">
            <Icon name={"instagram"} size={34} />
          </a>
          <a href="/" className="a_img">
            <Icon name={"spotify"} size={34} />
          </a>
          <a href="/" className="a_img">
            <Icon name={"whatsapp"} size={34} />
          </a>
          <a href="/" className="a_img">
            <Icon name={"telegram"} size={34} />
          </a>
          <a href="/" className="a_img">
            <Icon name={"twitter"} size={34} />
          </a>
          <a href="/" className="a_img">
            <Icon name={"mail"} size={34} />
          </a>
          <a href="/" className="a_img">
            <Icon name={"discord"} size={34} />
          </a>
          <a href="/" className="a_img">
            <Icon name={"codepen"} size={34} />
          </a>
          <a href="/" className="a_img">
            <Icon name={"upwork"} size={34} />
          </a>
          <a href="/" className="a_img">
            <Icon name={"steam"} size={34} />
          </a>
        </div>
      </div>
    </div>
  );
}
