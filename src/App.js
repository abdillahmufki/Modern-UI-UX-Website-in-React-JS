import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatBlack,
  Header,
} from "./containers";

import { Cta, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatBlack />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
