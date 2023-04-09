import React from "react";
import Mainpage from "./sections/Mainpage/mainpage";
import Card from "./components/UI/Card/card";
function App() {
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
