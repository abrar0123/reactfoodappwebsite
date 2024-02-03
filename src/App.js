import React, { useState, useEffect } from "react";
// import Mainpage from "./sections/Mainpage/Mainpage";
import Card from "./components/UI/Card/card";
import Mainpage from "./sections/Mainpage/mainpage";
import Tailwind from "./pages/Tailwind";

function App() {
  return (
    // <Card
    //   style={{
    //     background:
    //       "linear-gradient(to right, rgb(54, 54, 241), rgb(207, 50, 243))",
    //   }}
    // >
    //   {/* <Mainpage /> */}
    // <Tailwind />
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline">Hello, Tailwind CSS 1!</h1>
      <h1 className="text-2xl font-bold text-center text-blue-500">
        Hello, Tailwind CSS 1!
      </h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-red font-bold py-2 px-4 rounded">
        Click Me
      </button>
    </div>
    // </Card>
  );
}

export default App;
