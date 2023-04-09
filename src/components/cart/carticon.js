import React from "react";
import Container from "../UI/Card/Container";
import { IoIosCart } from "react-icons/io";
import "./cart.css";

export default function carticon() {
  let pp;

  const clickHandler = () => {
    console.log("click handler", pp);
  };
  return (
    <Container className="carticonContainer">
      <IoIosCart
        color="white"
        size={30}
        style={{ paddingRight: "15px" }}
        onClick={clickHandler}
      />
      <h2>{pp}</h2>
    </Container>
  );
}
