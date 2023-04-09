import React from "react";
import Container from "../UI/Card/Container";
import { IoIosCart } from "react-icons/io";
import "./cart.css";
import FlexRow from "../UI/Card/FlexRow";

export default function carticon({ cartitems }) {
  let pp;

  const clickHandler = () => {
    console.log("click handler", pp);
  };
  return (
    <Container className="carticonContainer">
      <FlexRow className="flexPrimary">
        <IoIosCart
          color="white"
          size={30}
          style={{ paddingRight: "15px" }}
          onClick={clickHandler}
        />
        <p>{cartitems ? cartitems : 0}</p>
      </FlexRow>
    </Container>
  );
}
