import React from "react";
import imran from "../assets/Imran.png";

function Team() {
  return (
    <div className="mx-auto px-4 bg-zinc-800">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full lg:w-2/3 text-white pr-0 lg:pr-20">
          <div className="relative">
            <p className="text-left text-9xl text-zinc-700">“</p>
            <div>
              <p className="uppercase text-3xl lg:text-5xl text-white mb-10">
                Tanoor is not just a{" "}
                <span className="text-red-300">business</span>, it is my{" "}
                <span className="font-semibold text-red-500">Passion</span>
              </p>
              <p className="text-xl text-white">
                Hi, may name is Imran, and I am the owner of Tanoor.
              </p>
              <p className="text-xl text-white mb-10">
                Shoot me a message directly in case you have a Complain or a
                Suggestion...
              </p>
              <p className="text-xl text-white text-right">- Imran Zafar</p>
            </div>
            <p className="text-right text-9xl text-zinc-700">“</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div
            className="bg-cover bg-center bg-no-repeat"
            style={{
              height: "600px",
              backgroundImage: `url(${imran})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Team;
