import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Product from "./Main/Product";
import Pricing from "./Main/Pricing";
import Sidebar2 from "./Sidebar2";
import Setting from "./Main/Setting";
import { Features, Home } from "../pages";

const HeaderCmp = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Features />
      {/* <Setting/> */}
      {/* <Pricing /> */}
      {/* <SideBar /> */}
      {/* <Sidebsar2 /> */}
    </React.Fragment>
  );
};

export default HeaderCmp;
