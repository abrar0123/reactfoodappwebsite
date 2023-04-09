import React from "react";
import styles from "./style.module.css";
import Button from "../UI/button/PrimaryButton";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/cartSlice";
import FlexRow from "../UI/Card/FlexRow";
import Container from "../UI/Card/Container";

const CartModel = () => {
  const foodCart = useSelector((e) => e.cart.foodCart);

  let filteredFood = foodCart;
  let totalprice = 0;

  for (let items of filteredFood) {
    totalprice += items.subtotal;
  }

  const Dispatch = useDispatch();

  const getIDIncrement = (id) => {
    Dispatch(cartActions.addToCart({ id: id }));
  };
  const getIDDecrement = (id) => {
    Dispatch(cartActions.removeToCart({ id: id }));
  };

  const getIDDelete = (id) => {
    Dispatch(cartActions.deleteProduct({ id: id }));
  };

  const hidehandler = () => {
    Dispatch(cartActions.cartModel({ data: false }));
  };

  const orderHandler = () => {
    // props.orderHandler();
  };

  return (
    <div className={styles.customContainer}>
      <h2>Cart Items</h2>

      {filteredFood.length > 0 &&
        filteredFood.map((e, i) => {
          return (
            <>
              <FlexRow className={styles.mainCartFlex} key={i}>
                <Container className={styles.subCartFlex}>
                  <FlexRow className={styles.sub2CartFlex}>
                    <Container>
                      <p style={{ width: "200px" }}>{e.title}</p>
                    </Container>
                    <Container className={styles.primarycard}>
                      ${e.price} *
                      <p style={{ display: "inline" }}> {e.quant} =</p>{" "}
                      <p style={{ display: "inline" }}> ${e.subtotal}</p>{" "}
                    </Container>
                  </FlexRow>
                </Container>

                <FlexRow className={styles.subCartFlex}>
                  <Container>
                    <button onClick={() => getIDDecrement(e.id, i)}>-</button>
                    <button onClick={() => getIDIncrement(e.id, i)}>+</button>
                    {/* <button}>x</button> */}
                  </Container>
                  <div>
                    <button
                      style={{ marginTop: "15px" }}
                      onClick={() => getIDDelete(e.id)}
                    >
                      delete
                    </button>
                  </div>
                </FlexRow>
              </FlexRow>
              <div className={styles.hrstyle}>
                <hr />
              </div>
            </>
          );
        })}
      <div className={styles.btncontainer}>
        <FlexRow className={styles.mainCartFlex}>
          <h3 style={{ color: "white" }}>Total Amount </h3>
          <h3 style={{ color: "white" }}>${totalprice}</h3>
        </FlexRow>

        {/* <h4>pkr. {props.GrandTotal}</h4> */}
      </div>
      <div className={styles.btncontainer}>
        <Button custombtnStyle={styles.customBtn} onclick={hidehandler}>
          Cancel
        </Button>
        <Button onclick={orderHandler}>Order... </Button>
      </div>
      {/* <button>click me</button> */}
    </div>
  );
};

export default CartModel;
