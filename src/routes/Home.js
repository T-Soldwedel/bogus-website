import React from "react";
import Header from "../components/Header/Header";
import Tournee from "../components/Tournee/Tournee";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <div id="seperator3"></div>
      <Tournee />
      <div id="seperator"></div>
      <Contact />
      <div id="seperator2"></div>
      <Footer />
    </div>
  );
};

export default Home;
