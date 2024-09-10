import React from "react";
import Faq from "./components/Faq/Faq";
import Carousel from "./components/Carousel/Carousel"
function App() {
  return (
    <div>
      <h1 className="text-3xl">Team Hackers</h1>
      <Carousel/>
      <Faq/>
    </div>
  );
}

export default App;
