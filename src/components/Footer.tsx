const Footer = () => {
  return (
    <div className="w-full h-96 bg-black justify-center pt-12 pb-[71px]">
      <div className="flex max-w-[930px] w-full h-full justify-between items-center px-5 border-t border-b border-white/20 mx-auto">
        <div className="flex-1 flex flex-col gap-9">
          <p className="text-white press-start text-2xl uppercase">
            starvalley
          </p>
          <span className="flex gap-5 items-center">
            <img
              src="/img/discord-1.png"
              alt="discord"
              className="w-[37px] h-[39px]"
            />
            <img src="/img/x.png" alt="discord" className="w-[34px] h-[31px]" />
            <img
              src="/img/icon.png"
              alt="discord"
              className="w-[35px] h-[31px]"
            />
          </span>
        </div>
        <div className="flex flex-col gap-4 justify-start">
          <a className="text-white press-start text-[14px]" href="">
            About
          </a>
          <a className="text-white press-start text-[14px]" href="">
            The Game
          </a>
          <a className="text-white press-start text-[14px]" href="">
            NFTs
          </a>
          <a className="text-white press-start text-[14px]" href="">
            Roadmap
          </a>
          <a className="text-[#E3FF37] press-start text-[14px]" href="">
            DOWNLOAD GAME
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
