import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./start/Start.jsx";
// import { Catalog } from "./Catalog/Catalog.jsx";
// import { AboutCar } from "./AboutCar/AboutCar.jsx";

export const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        {/* <Route path="/catalog" element={<Catalog />} />
        <Route path="/contact" element={<AboutCar />} />  */}
      </Routes>
    </Router>
  );
};

export default App;
