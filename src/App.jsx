import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Properites from "./Properties";
import Review from './Review'
import Design from "./Design";
import Variations from "./Variations";
import Setup from "./Setup";
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Home />

      <Properites />

      <Review />

      <Design />

      <Variations />

      <Setup />

      <Footer />
    </>
  );
}

export default App;
