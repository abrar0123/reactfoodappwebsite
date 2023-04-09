import React, { useState } from "react";
import Card from "../UI/Card/card";
import Container from "../UI/Card/Container";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartActions } from "../../Redux/cartSlice";
export default function SearchBar() {
  const [textserach, settext] = useState("");
  const [searched, setsearched] = useState();

  const myFood = useSelector((e) => e.cart.foodapi);
  // console.log("foodapi___", myFood);

  const Dispatch = useDispatch();

  const searchHandler = () => {
    Dispatch(cartActions.searchProduct(searched));

    // console.log("searched___", searched);
  };
  const textHandler = (event) => {
    settext(event.target.value);

    const searched1 = myFood.filter((item) => {
      const name = item.title.toLowerCase();
      const searchword = textserach.toLowerCase();
      return name.includes(searchword);
    });
    // console.log("searched1___", searched1);

    setsearched(searched1);
  };
  return (
    <Card>
      <Container className="courseSearch">
        <input type="text" placeholder="Search Meal " onChange={textHandler} />
        <IoIosSearch
          color="white"
          size={30}
          style={{ paddingRight: "15px" }}
          onClick={searchHandler}
        />
      </Container>
    </Card>
  );
}
