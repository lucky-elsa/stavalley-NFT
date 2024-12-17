import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 flex justify-between items-center bg-black w-full h-40 pl-20 pr-28">
      <p className="flex-1 press-start text-white text-2xl uppercase">
        stavalley
      </p>
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
        <button>
          <img src="/img/explore.png" alt="home" className="w-60 h-[52px]" />
        </button> 
      </div>
    </div>
  );
};

export default Header;
