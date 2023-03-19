import React from "react";
import naan2 from "../assets/hero/naan2.avif";
import naan from "../assets/hero/naan.avif";

function Hero() {
  return (
    <div className="flex items-start justify-start flex-wrap lg:flex-nowrap mb-32">
      <div className="w-full lg:w-8/12">
        <div
          className="cover bg-top w-full"
          style={{
            height: "600px",
            backgroundImage: `url(${naan2})`,
          }}
        />
      </div>
      <div className="w-full lg:w-4/12">
        <div
          className="cover bg-center w-full"
          style={{
            height: "600px",
            backgroundImage: `url(${naan})`,
          }}
        />
      </div>
    </div>
  );
}

export default Hero;
