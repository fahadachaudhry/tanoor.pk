import React from "react";
import naan2 from "../assets/hero/naan2.avif";
import naan from "../assets/hero/naan.avif";
import hero from "../assets/hero/hero.jpg";

function Hero() {
  return (
    <div className="flex items-start justify-start flex-wrap lg:flex-nowrap mb-32">
      <div className="w-full lg:w-12/12">
        <div
          className="bg-cover bg-no-repeat bg-top w-full min-h-screen"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        >
          <div className="flex items-center flex-wrap justify-between w-full min-h-screen bg-gradient-to-tr from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.2)]">
            <div className="container mx-auto w-full lg:w-1/2 p-10">
              <h1 className="uppercase text-5xl lg:text-8xl text-white font-semibold">
                Experience a <span className="text-red-500">unique</span> taste!
              </h1>
              <p className="mb-6 mt-6 text-xl font-sans">
                A traditional mud oven bakery (tandoor) with a prime focus on
                hygiene, health, and freshness.
                <br /> Hygiene is, and shall always be, our first priority.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
