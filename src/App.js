import React, { useState, useEffect } from "react";
// import Mainpage from "./sections/Mainpage/Mainpage";
import { Home, Features, NoPage } from "./pages";
import Feature2 from "./pages/Features/Feature2";
import { Routes, Route } from "react-router-dom";
import Faqs from "./pages/Faqs/Faqs";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Features} />
      <Route path="/Home" Component={Home} />

      <Route path="/Features2" Component={Feature2} />
      <Route path="/Faqs" Component={Faqs} />

      <Route path="*" Component={NoPage} />
    </Routes>
  );
}

export default App;
