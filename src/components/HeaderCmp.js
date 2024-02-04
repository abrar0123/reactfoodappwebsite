import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Product from "./Main/Product";
import Pricing from "./Main/Pricing";

const HeaderCmp = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Pricing />
      {/* <SideBar /> */}
    </React.Fragment>
  );
};

export default HeaderCmp;
