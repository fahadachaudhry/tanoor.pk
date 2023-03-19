import React from "react";
import Thumb1 from "../assets/1.png";
import Thumb2 from "../assets/2.png";
import Thumb3 from "../assets/3.png";
import Thumb4 from "../assets/4.png";

function Principles() {
  const principles = [
    {
      title: "Define the Strategy",
      thumb: Thumb1,
      description:
        "We work in partnership with the world's leading venture capital firms to identify the opportunities not visible to most.",
    },
    {
      title: "Build new business",
      thumb: Thumb2,
      description:
        "We incubate new propositions and rapidly scale emerging budinesses that disrupt the status quo.",
    },
    {
      title: "Improve performance",
      thumb: Thumb3,
      description:
        "We use emerging technology and identity game-changing partnerships to set new performance benchmarks.",
    },
    {
      title: "Software Development",
      thumb: Thumb4,
      description:
        "Are you ready to take up the modern frontier of the web? Our team is possessed with exceptional skills and can be at your disposal at once!",
    },
  ];

  return (
    <div className="bg-zinc-800 px-10 lg:px-20 pt-96 lg:pt-60 mb-32">
      <div className="container mx-auto mb-20">
        <h1 className="uppercase text-red-500 mb-2">Principles</h1>
        <p className="uppercase text-4xl text-white mb-20">
          The challenger Consultancy
        </p>
        <div className="flex overflow-x-scroll w-full pb-4">
          {principles.map((principle, index) => (
            <div
              key={principle + "_" + index}
              style={{
                height: "450px",
                marginLeft: index !== 0 ? "20px" : undefined,
              }}
              className="w-full lg:w-3/12 bg-zinc-700 flex-shrink-0 rounded-md flex flex-col justify-between items-start p-6"
            >
              <p className="text-zinc-400">/0{index + 1}</p>
              <img src={principle.thumb} />
              <div>
                <p className="text-white mb-4">{principle.title}</p>
                <p className="text-zinc-400 h-32">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Principles;
