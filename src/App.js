// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Identity from "./identity/home";
import Paper from "./paper/home";
import Cabul from "./paper/cabul";

import Lawsuit from "./lawsuit/home";
import ContohPidana from "./lawsuit/contohpidana";
import ContohPerdata from "./lawsuit/contohperdata";
import ContohPembatalanPerjanjian from "./lawsuit/contohpembatalanperjanjian";

import SmartContract from "./smartcontract/home";
import ContohPerjanjian from "./smartcontract/contohperjanjian";

function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <NavBar />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Identity />} />   {/* Home page */}
        <Route path="/paper" element={<Paper />} />
        <Route path="/paper/cabul" element={<Cabul />} />

        <Route path="/lawsuit" element={<Lawsuit />} />
        <Route path="/lawsuit/contohpidana" element={<ContohPidana />} />
        <Route path="/lawsuit/contohperdata" element={<ContohPerdata />} />
        <Route path="/lawsuit/contohpembatalanperjanjian" element={<ContohPembatalanPerjanjian />} />

        <Route path="/smartcontract" element={<SmartContract />} />
        <Route path="/smartcontract/contohperjanjian" element={<ContohPerjanjian />} />
      </Routes>
    </Router>
  );
}

export default App;
