import React from "react";
import Link from "next/link";
import Image from "next/image";

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
            <Image src="/img/icon.png" alt="home" width={35} height={31} />
          </a>
          <a href="">
            <Image src="/img/discord.png" alt="discord" width={36} height={27} />
          </a>
          <a href="">
            <Image src="/img/twitter.png" alt="twitter" width={27} height={27} />
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
