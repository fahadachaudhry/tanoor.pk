import React from "react";
import Logo from "../components/Logo";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import kneed from "../assets/hero/kneed2.avif";

function Footer() {
  return (
    <div className="bg-white">
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          height: "600px",
          backgroundImage: `url(${kneed})`,
        }}
      ></div>
      <div className="container mx-auto px-4 py-20 flex items-start justify-between flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-3/12">
          <p className="text-sm text-zinc-400">Copyright ©Tanoor 2023</p>
          <p className="text-sm text-zinc-400 mb-4">All rights reserved</p>
          <div className="inline-block">
            <a
              href="https://web.facebook.com/tanoor.pk"
              className="mb-4 flex items-center p-3 border border-blue-400 text-center justify-start text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
            >
              <FaFacebookF />
              <span className="pl-6">Order on Facebook</span>
            </a>
            <a
              href="https://instagram.com/tanoor.pk"
              className="flex items-center p-3 border border-purple-400 text-center justify-start text-purple-400 hover:bg-purple-500 hover:text-white transition-all"
            >
              <FaInstagram />
              <span className="pl-6">Check out our Instagram</span>
            </a>
          </div>
        </div>
        <div className="w-full pb-10 lg:w-3/12">
          <p className="text-sm text-zinc-500 mb-4 uppercase">Contact</p>
          <a href="#" className="text-sm text-zinc-400 mb-4 block">
            +92 309 0093999{" "}
          </a>
          <a href="#" className="text-sm text-zinc-400 mb-4 block">
            132B, Jasmine Block, Commercial Area Sector C, Beside Kayseria,
            Behind Butt Karahi, Bahria Town, Lahore, Pakistan{" "}
          </a>
        </div>
        <div className="w-full pb-10 lg:w-3/12 ">
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default Footer;
