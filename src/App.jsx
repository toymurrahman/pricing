import { useState } from "react";

import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
    </>
  );
}

export default App;
