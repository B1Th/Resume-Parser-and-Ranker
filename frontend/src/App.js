import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Parser from "./components/Parser";
import PostJob from "./components/PostJob";
import Ranking from "./components/Ranking";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parser" element={<Parser />} />
          <Route path="/job" element={<PostJob />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
