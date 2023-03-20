import React from "react";

function MenuCard({ menuItem }: any) {
  return (
    <div className="w-full lg:w-4/12">
      <div style={{ height: "600px" }} className="overflow-hidden ">
        <div
          className="bg-cover bg-center bg-no-repeat w-full bg-red-200 h-full transition-all cursor-pointer"
          style={{
            backgroundImage: `url(${menuItem.image})`,
          }}
        >
          <div className="h-full w-full bg-gradient-to-t from-zinc-900 flex flex-col items-center justify-end px-10 pb-10 hover:pb-20 transition-all">
            <h1 className="font-semibold text-2xl text-white text-center mb-2">
              {menuItem.name}
            </h1>
            <p className="text-center text-sm text-white font-sans">
              {menuItem.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
