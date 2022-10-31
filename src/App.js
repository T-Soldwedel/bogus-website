import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Shows from "./routes/Shows";
import Ladida from "./components/Shows/Ladida";
import { Dings } from "./components/Shows/Dings";
import Triomio from "./components/Shows/Triomio";
import Gallery from "./routes/Gallery";
import Error from "./routes/Error";
import SharedLayout from "./routes/NavLinks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="shows" element={<Shows />} />
          <Route path="shows/ladida" element={<Ladida />} />
          <Route path="shows/dings" element={<Dings />} />
          <Route path="shows/triomio" element={<Triomio />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
