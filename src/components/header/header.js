import React from "react";
import "./header.css";
import Logo1 from "../../assets/Icons/logo4.png";
import { Link } from "react-router-dom";
export default function header() {
  return (
    <header>
      <div className="headercontainer">
        <div className="imgcontainer">
          <img src={Logo1} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home </Link>
            </li>
            <li>
              <Link to={"/Cartpage"}>Cartpage </Link>
            </li>
            <li>{/* <Link to={"/Headersection"}>Headersection </Link> */}</li>
          </ul>
        </nav>
        <nav>
          <ul>
            {/* course */}
            <li>
              <a href="#"> Sign in</a>
            </li>
            <li>
              <a href="#"> Register </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
