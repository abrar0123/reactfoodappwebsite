import React, { useEffect, useState } from "react";
import Coursedetails from "./coursedetails";
import "./courses.css";
import Card from "../UI/Card/card";
import Container from "../UI/Card/Container";
import FlexRow from "../UI/Card/FlexRow";
import SearchBar from "./searchBar";
import Carticon from "../cart/carticon";
import { useSelector } from "react-redux";
import CartModel from "../CartModel/CartModel";

const CourseSection = () => {
  const [myFood, setmyFood] = useState("");
  const userfoodCart = useSelector((state) => state.cart.foodCart);

  let cartitems = 0;
  for (let items of userfoodCart) {
    cartitems += items.quant;
  }
  const showModel = useSelector((state) => state.cart.showModel);

  useEffect(() => {
    const myFoodData = async () => {
      try {
        const res = await fetch(
          "https://api.spoonacular.com/recipes/search?apiKey=01f6f4375b1a4cf5b57fac91d2e1b8fd&query=pizza&number=15"
        );

        const data = await res.json();
        setmyFood(data.results);
        // console.log("Apidata__", data.categories);
      } catch (error) {
        console.log("Api Data Error ", error);
      }
    };
    myFoodData();
  }, []);

  return (
    <Card className="section">
      <FlexRow className="primaryflexContainer">
        <h1>Restaurants </h1>
        <Carticon cartitems={cartitems} />
        <SearchBar />
      </FlexRow>
      <Container>{showModel && <CartModel />}</Container>
      <Container className="coursecontainer">
        <Coursedetails myFood={myFood} />
      </Container>

      <Container className="coursecontainer"></Container>
    </Card>
  );
};

export default CourseSection;
