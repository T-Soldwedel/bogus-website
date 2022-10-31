import React from "react";
import "./Footer.css";
import footer1 from "./Bundesarbeitsgemeinschaft.png";
import footer2 from "./Kultur und Medien.jpg";
import footer3 from "./Neu Start Kultur.jpg";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1>Gefördert werden wir durch:</h1>

      <div className="footer-image-container">
        <a href="www.google.de">
          <img src={footer3} alt=""></img>
        </a>

        <a href="www.google.de">
          <img src={footer1} alt=""></img>
        </a>

        <a href="www.google.de">
          <img src={footer2} alt=""></img>
        </a>
      </div>

    </div>
  );
};

export default Footer;
