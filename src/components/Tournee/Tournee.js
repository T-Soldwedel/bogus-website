import React from "react";
import "./Tournee.css";

const Tournee = () => {
  return (
    <div className="container">
      <section className="termine-section">
        <h1>Termine 2022</h1>

        <container className="termine">
          {/* Maybe take the information from different data sheet and map through them? Easier to handle for client on his own */}
          <div>
            <h4>Datum</h4>
            <p>12.03.2022</p>
            <p>24.11.2022</p>
            <p>04.05.2022</p>
            <p>21.03.2022</p>
            <p>04.05.2022</p>
            <p>21.03.2022</p>
          </div>

          <div>
            <h4>Ensemble</h4>
            <p>Trio Mio</p>
            <p>Mellinka</p>
            <p>Trio Mio</p>
            <p>Mellinka</p>
            <p>Trio Mio</p>
            <p>Trio Mio</p>
          </div>

          <div>
            <h4>Wo?</h4>
            <p>Bremen</p>
            <p>Hamburg</p>
            <p>Düsseldorf</p>
            <p>Göttingen</p>
            <p>Bremen</p>
            <p>Hamburg</p>
          </div>
        </container>
      </section>
    </div>
  );
};

export default Tournee;
