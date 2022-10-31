import React from "react";
import video from "./Homepagehintergrund.mp4";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import arrow from ''

const Header = () => {
  return (
    <div>
      <div className="main">
        <video className="videoTag" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="content">

      </div>
      <a href="#about-id"><FontAwesomeIcon className="icon-arrow-down" icon={faAngleDown} /></a>
    </div>
  );
};

export default Header;
