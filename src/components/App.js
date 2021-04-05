import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <NavBar />
      <Home name="Linda"/>
      <Home city="New York"/>
      <About />
    </div>
  );
}

export default App;
