import React from "react";
import "./courses.css";
import Card from "../UI/Card/card";
import FlexRow from "../UI/Card/FlexRow";
import Container from "../UI/Card/Container";
import Button from "../UI/button/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/cartSlice";

const Coursedetails = ({ myFood }) => {
  const foodCart = useSelector((state) => state.cart.foodCart);

  console.log("foodCart__", foodCart);
  const Dispatch = useDispatch();

  const addToCartHandler = (id, title, url, price) => {
    Dispatch(
      cartActions.addToCart({ id: id, title, url: url, quant: 1, price: price })
    );
  };

  const removeToCartHandler = (id) => {
    Dispatch(cartActions.removeToCart({ id: id }));
  };

  return (
    <React.Fragment>
      {myFood &&
        myFood.map((item) => {
          const imageUrl = `https://spoonacular.com/recipeImages/${item.image}`;
          const price = item.servings * 4;
          const foodCartitems =
            foodCart && foodCart.find((e) => e.id === item.id);

          return (
            <Card className="coursecCard">
              <Container className="imgContainer">
                <img src={imageUrl} alt="pic" />
              </Container>
              <Container className="titlecontainer">
                <h2>{item.title}</h2>
              </Container>
              <FlexRow className="primaryflex">
                <Container className="titlecontainer">
                  <p>Ready : {item.readyInMinutes}min</p>
                </Container>
                <Container className="titlecontainer">
                  <p>Price: ${price}</p>
                </Container>
              </FlexRow>
              <Container className="titlecontainer">
                <FlexRow className="primaryflex1">
                  <Button
                    style={{
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                    onClick={removeToCartHandler.bind(this, item.id)}
                  >
                    -
                  </Button>
                  <p style={{ fontSize: "20px" }} className="p1">
                    {foodCartitems ? foodCartitems.quant : 0}
                  </p>
                  <Button
                    style={{
                      borderTopRightRadius: "25px",
                      borderBottomRightRadius: "25px",
                    }}
                    onClick={addToCartHandler.bind(
                      this,
                      item.id,
                      item.title,
                      imageUrl,
                      price
                    )}
                  >
                    +
                  </Button>
                </FlexRow>
              </Container>
            </Card>
          );
        })}
    </React.Fragment>
  );
};

export default Coursedetails;
