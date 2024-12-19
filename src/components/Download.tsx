import Image from "next/image";
import { DOWNLOAD_OPTIONS } from "@/constants";

const Download = () => {
  return (
    <div className="flex flex-col w-full h-full justify-start items-center pt-40">
      <Image src="/img/je-1.png" alt="download" width={75} height={60} />
      <h1 className="text-white 2xl:text-[55px] text-[40px] text-center mt-2">
        Download Our Launcher
      </h1>
      <p className="max-w-[534px] text-center text-white text-[15px] leading-[21px] quantico 2xl:mt-7 mt-5">
        Make your desert in a world of unlimited adventure. Master skills and
        play with friends. Build new communities.
      </p>
      <div className="flex flex-col max-w-[750px] w-full 2xl:h-[360px] h-[300px] justify-center 2xl:p-10 p-6 items-center bg-gradient-to-b from-[#272727]/0 to-[#212121]/10 backdrop-blur-xl border border-white/20 2xl:mt-12 mt-8 2xl:gap-7 gap-5">
        {DOWNLOAD_OPTIONS.map((option) => (
          <div
            key={option.platform}
            className="flex w-full gap-6 justify-between items-center"
          >
            <p className="max-w-[224px] w-full text-white text-center 2xl:text-2xl text-xl uppercase">
              {option.platform}
            </p>
            <hr className="w-[141px] h-[1px] border border-white/20" />
            <button className="2xl:w-[270px] w-[220px] 2xl:h-[50px] h-[40px] bg-[url('/img/btn-back.png')] bg-cover bg-center bg-no-repeat text-black press-start text-[11px] uppercase ml-4">
              {option.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Download;
