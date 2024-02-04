import React, { useState, useEffect } from "react";
// import Mainpage from "./sections/Mainpage/Mainpage";
import { Home, Features, NoPage } from "./pages";
import Feature2 from "./pages/Features/Feature2";
import { Routes, Route } from "react-router-dom";
import Faqs from "./pages/Faqs/Faqs";
import NavBar from "./components/NavBar";
import { Product, SideBar } from "./components";
import HeaderCmp from "./components/HeaderCmp";

function App() {
  return (
    <Routes>
      <Route path="/" Component={HeaderCmp} />
      <Route path="/Home" Component={Home} />
      <Route path="/Product" Component={Product} />
      <Route path="/Features2" Component={Feature2} />
      <Route path="/Faqs" Component={Faqs} />

      <Route path="*" Component={NoPage} />
    </Routes>
  );
}

export default App;
