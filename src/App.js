import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Navigation from "./components/Main/Navigation";
import Program from "./components/Program";
import About from "./components/Main/About";
import Contact from "./components/Main/Contact";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/program" element={<Program />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
