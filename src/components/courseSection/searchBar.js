import React from "react";
import Card from "../UI/Card/card";
import Container from "../UI/Card/Container";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";

export default function searchBar() {
  return (
    <Card>
      <Container className="courseSearch">
        <input type="text" placeholder="Search Meal" />
        <IoIosSearch color="white" size={30} style={{ paddingRight: "15px" }} />
      </Container>
    </Card>
  );
}
