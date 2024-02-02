import React, { useState, useEffect } from "react";
// import Mainpage from "./sections/Mainpage/Mainpage";
import Card from "./components/UI/Card/card";
import Mainpage from "./sections/Mainpage/mainpage";

function App() {
  // const [simple, setsimple] = useState([]);
  // const books = [
  //   {
  //     id: 1,
  //     title: "The Catcher in the Rye",
  //     author: "J.D. Salinger",
  //     genre: "Fiction",
  //   },
  //   {
  //     id: 2,
  //     title: "To Kill a Mockingbird",
  //     author: "Harper Lee",
  //     genre: "Fiction",
  //   },
  //   { id: 3, title: "1984", author: "George Orwell", genre: "Dystopian" },
  //   {
  //     id: 4,
  //     title: "The Great Gatsby",
  //     author: "F. Scott Fitzgerald",
  //     genre: "Fiction",
  //   },
  // ];

  // useEffect(() => {
  //   const sss = () => {
  //     const ss = books.filter((e) => {
  //       return e.genre === "Fiction";
  //     });
  //     setsimple(ss);
  //     console.log("sss", ss);
  //   };

  //   sss();
  // }, []);
  return (
    <Card
      style={{
        background:
          "linear-gradient(to right, rgb(54, 54, 241), rgb(207, 50, 243))",
      }}
    >
      <Mainpage />
    </Card>
  );
}

export default App;
