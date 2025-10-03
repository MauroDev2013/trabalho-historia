import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx"; // sua Home
import Canjica from "./pages/CanjicaPages.jsx";
import "./index.css";
import Pao from "./pages/PaoPages.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />   {/* Home */}
      <Route path="/canjica" element={<Canjica />} /> {/* Página da canjica */}
      <Route path="/pao" element={<Pao />}></Route> {/* Página do pão de acucor */}
    </Routes>
  </BrowserRouter>
);

//npm install react-router-dom