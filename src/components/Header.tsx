import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 flex justify-between items-center bg-black w-full h-40 pl-20 pr-28 z-[9999]">
      <Link
        href="/"
        className="flex-1 press-start text-white text-2xl uppercase"
      >
        stavalley
      </Link>
      <div className="flex gap-11 items-center">
        <div className="flex gap-8 items-center">
          <a href="">
            <img src="/img/icon.png" alt="home" className="w-[35px] h-[31px]" />
          </a>
          <a href="">
            <img src="/img/discord.png" alt="home" className="w-9 h-[27px]" />
          </a>
          <a href="">
            <img
              src="/img/twitter.png"
              alt="home"
              className="w-[27px] h-[27px]"
            />
          </a>
        </div>
        <button className="text-black text-center text-[11px] uppercase bg-[url('/img/explore-btn.png')] bg-cover bg-center bg-no-repeat w-[245px] h-[52px]">
          explore dimensions
        </button>
      </div>
    </div>
  );
};

export default Header;
