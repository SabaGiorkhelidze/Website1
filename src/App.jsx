import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="p-10 lg:p-2 max-fold:">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
