import React from "react";
import Logo from "../components/Logo";

function Topnav() {
  return (
    <div className="container mx-auto px-4 mb-32">
      <div className="mb-20 py-10">
        <Logo />
      </div>
      <div className="flex items-start flex-wrap justify-between">
        <div className="w-full lg:w-9/12 pb-10 lg:pb-0">
          <h1 className="uppercase text-4xl lg:text-8xl text-zinc-800">
            Experience a unique taste!
          </h1>
        </div>
        <div className="md:w-full lg:w-3/12">
          <p className="mb-6">
            A traditional mud oven bakery (tandoor) with a prime focus on
            hygiene, health, and freshness
          </p>
          <p className="mb-6">
            Hygiene is, and shall always be, our first priority.
          </p>
          <p>Your health first!</p>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
