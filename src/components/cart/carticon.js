import React, { useEffect, useState } from "react";
import Container from "../UI/Card/Container";
import { IoIosCart } from "react-icons/io";
import "./cart.css";
import FlexRow from "../UI/Card/FlexRow";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Redux/cartSlice";

export default function Carticon({ cartitems }) {

  const Dispatch = useDispatch();

  useEffect(() => {}, []);

  const clickHandler = () => {
    Dispatch(cartActions.cartModel({ data: true }));
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
