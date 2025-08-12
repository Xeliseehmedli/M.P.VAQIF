import { useState } from "react";

import "./App.css";
import "./component/Home.scss";
import "./component/About.scss";
import "./component/Timeline.scss";

import Home from "./component/Home";
import About from "./component/About";
import Timeline from "./component/Timeline";
function App() {
  return (
    <>
      <Home />
      <About />
      <Timeline />
    </>
  );
}

export default App;
