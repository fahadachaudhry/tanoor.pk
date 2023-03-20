import React from "react";
import logo from "../assets/logo.svg";

function Logo() {
  return (
    <div className="flex flex-col justify-center w-full items-center">
      <img className="h-20 mr-3 mb-6" src={logo} />
      <div className="flex items-center justify-center text-white">
        <p className="pr-5 mr-5 border-r border-zinc-300">Clean</p>
        <p className="pr-5 mr-5 border-r border-zinc-300">Healthy</p>
        <p>Fresh</p>
      </div>
    </div>
  );
}

export default Logo;
