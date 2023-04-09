import React from "react";
import "./courses.css";
import Card from "../UI/Card/card";
import FlexRow from "../UI/Card/FlexRow";
import Container from "../UI/Card/Container";
import Button from "../UI/button/Button";

const Coursedetails = ({ myFood }) => {
  return (
    <React.Fragment>
      {myFood &&
        myFood.map((item, i) => {
          const imageUrl = `https://spoonacular.com/recipeImages/${item.image}`;

          return (
            <Card className="coursecCard">
              <Container className="imgContainer">
                <img src={imageUrl} />
              </Container>
              <Container className="titlecontainer">
                <h2>{item.title}</h2>
              </Container>
              <FlexRow className="primaryflex">
                <Container className="titlecontainer">
                  <p>Ready : {item.readyInMinutes}min</p>
                </Container>
                <Container className="titlecontainer">
                  <p>Price: ${item.servings * 4}</p>
                </Container>
              </FlexRow>
              <Container className="titlecontainer">
                <FlexRow className="primaryflex1">
                  <Button
                    style={{
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  >
                    -
                  </Button>
                  <p style={{ fontSize: "20px" }} className="p1">
                    10
                  </p>
                  <Button
                    style={{
                      borderTopRightRadius: "25px",
                      borderBottomRightRadius: "25px",
                    }}
                  >
                    +{" "}
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
