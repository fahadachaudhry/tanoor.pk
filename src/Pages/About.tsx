import React from "react";
import officeCafe from "../assets/office-cafe.avif";
import MenuCard from "../components/MenuCard";
import menu from "../MenuItems";

function About() {
  return (
    <div>
      <div className="container mx-auto px-4 mb-20">
        <h1 className="uppercase text-red-500 mb-2 font-sans">Our Menu</h1>
        <p className="uppercase text-2xl lg:text-4xl text-white mb-20 lg:mb-36 lg:w-8/12">
          What happens when you bring together the passion for cleanliness and
          an urge for traditional goodness together?
        </p>
      </div>
      <div className="flex items-start justify-start flex-wrap">
        {menu.map((menuItem, i) => (
          <MenuCard key={menuItem.name + "_" + i} menuItem={menuItem} />
        ))}
      </div>
    </div>
  );
}

export default About;
