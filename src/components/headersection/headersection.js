import React from "react";
import "./headersec.css";
import Card from "../UI/Card/card";
import pic from "../../assets/Image2/thesherisk1.png";
import Container from "../UI/Card/Container";
import FlexCard from "../UI/Card/FlexCard";

export default function headersection() {
  return (
    <Card className="headsectionCard">
      <FlexCard className="headerMainContainer">
        <FlexCard className="headsectionContainer">
          <h1>Food You Love </h1>
          <h2>Delivered to you</h2>

          <p>Just tap and place order and enjoy at meal at your home</p>
        </FlexCard>
        <Container className="imageContainer">
          <img src={pic} alt="" />
        </Container>
      </FlexCard>
    </Card>
  );
}
