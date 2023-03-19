import React from "react";

function MenuCard({ menuItem }) {
  return (
    <div className="w-full lg:w-4/12 lg:pr-20 pb-20 lg:pb-10 mb-10">
      <div className="w-full">
        <div style={{ height: "400px" }} className="overflow-hidden mb-4">
          <div
            className="bg-cover bg-center bg-no-repeat w-full bg-red-200 mb-10 h-full hover:h-[120%] transition-all cursor-pointer"
            style={{
              backgroundImage: `url(${menuItem.image})`,
            }}
          ></div>
        </div>
        <h1 className="font-semibold text-2xl text-zinc-900 text-center mb-2">
          {menuItem.name}
        </h1>
        <p className="text-center text-sm text-zinc-500">
          {menuItem.description}
        </p>
      </div>
    </div>
  );
}

export default MenuCard;
