import React from "react";
import "./header.css";
import Logo1 from "../../assets/Icons/logo4.png";
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
