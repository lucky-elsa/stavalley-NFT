import Link from "next/link";

const PlayJoin = () => {
  return (
    <div className="flex flex-col relative justify-start items-center w-full h-[1272px] mt-28 bg-[url('/img/background-1.png')] bg-cover bg-center bg-no-repeat z-0">
      <p className="text-white quantico text-base text-center max-w-[534px] mx-auto -mt-16">
        Make your desert in a world of unlimited adventrue. Master skills and
        play with friends. Build new communities.
      </p>
      <div className="flex justify-center gap-8 mt-14">
        <Link
          href="/download"
          className="flex w-60 h-[50px] items-center justify-center bg-[url('/img/btn-back.png')] bg-cover bg-center bg-no-repeat text-black press-start text-[11px] text-center"
        >
          PLAY FOR FREE
        </Link>
        <button className="w-60 h-[50px] bg-[url('/img/btn-back.png')] bg-cover bg-center bg-no-repeat text-black press-start text-[11px]">
          JOIN OUR COMMUNITY
        </button>
      </div>
      <div className="absolute top-[270px] left-[300px] w-[100px] h-[100px] rounded-full bg-[#FFAD5D] blur-[100.2px]" />
    </div>
  );
};

export default PlayJoin;
