import React from "react";
import Hero from "../components/Hero";
import CarElem from "../components/CarElem";

function HomePage() {
  return (
    <div>
      <div className="z-10">
        <Hero />
      </div>
      <div className="w-screen h-screen absolute z-0 top-0 left-0">
        <CarElem />
      </div>
    </div>
  );
}

export default HomePage;
