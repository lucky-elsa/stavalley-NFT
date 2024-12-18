import CommonPlayCard from "./CommonPlayCard";
import Marquee from "react-fast-marquee";

interface PlayCardsInfo {
  image: string;
  title: string;
  width: number;
  height: number;
}

const PlayCardsInfo: PlayCardsInfo[] = [
  {
    image: "/img/card-guns.png",
    title: "A lot of guns",
    width: 210,
    height: 175,
  },
  {
    image: "/img/card-characters.png",
    title: "Characters",
    width: 201,
    height: 140,
  },
  {
    image: "/img/card-house.png",
    title: "Custom Houses",
    width: 212,
    height: 148,
  },
  {
    image: "/img/card-pvp.png",
    title: "PVP & PVE",
    width: 125,
    height: 130,
  },
];

const JoinCommunity = () => {
  return (
    <div className="flex flex-col w-full bg-black pt-[140px]">
      <div className="flex w-full justify-center items-center gap-6 mx-auto">
        {PlayCardsInfo.map((card, index) => {
          return (
            <CommonPlayCard
              key={index}
              image={card.image}
              title={card.title}
              width={card.width}
              height={card.height}
            />
          );
        })}
      </div>
      <div className="flex flex-col relative w-full justify-center items-center mt-10">
        <div className="flex w-full justify-center items-center gap-2 z-10">
          <div className="flex flex-col max-w-[572px] w-full items-start justify-center gap-10">
            <p className="text-[#E3FF37] text-3xl press-start leading-9 text-start uppercase">
              we create the best experience for our players
            </p>
            <div className="flex flex-col gap-7 items-start justify-center">
              <p className="text-white text-[9px] text-start press-start">
                STARVALLEY is building a platform where users can build games
                that natively integrate digital collectibles.
              </p>
              <p className="text-white text-[9px] text-start press-start">
                STARVALLEY is building a platform where users can build games
                that natively integrate digital collectibles.
              </p>
            </div>
          </div>
          <img src="/img/je.png" alt="Je" className="w-[338px] h-[420px]" />
        </div>

        <button className="w-60 h-[50px] bg-[url('/img/btn-back.png')] bg-cover bg-center bg-no-repeat text-black press-start text-[11px]">
          JOIN OUR COMMUNITY
        </button>
        <img
          src="/img/cloud.png"
          alt="Cloud"
          className="w-[82px] h-[42px] absolute left-1/2 -translate-x-1/2 top-4"
        />
        <img
          src="/img/cloud-2.png"
          alt="Cloud"
          className="w-[231px] h-[93px] absolute top-16 left-5"
        />
        <img
          src="/img/cloud.png"
          alt="Cloud"
          className="w-[233px] h-[120px] absolute bottom-16 right-20"
        />
      </div>
      <img
        src="/img/background-3.png"
        alt="Background"
        className="w-full h-[1050px] -mt-32"
      />
      <Marquee
        speed={50}
        gradient={false}
        className="flex w-full h-[60px] bg-[#E3FF37]"
      >
        <div className="flex items-center mx-14">
          <p className="text-black text-[14px] press-start uppercase whitespace-nowrap">
            Update in game
          </p>
        </div>
        <div className="flex items-center mx-14">
          <p className="text-black text-[14px] press-start uppercase whitespace-nowrap">
            Update in game
          </p>
        </div>
        <div className="flex items-center mx-14">
          <p className="text-black text-[14px] press-start uppercase whitespace-nowrap">
            Update in game
          </p>
        </div>
        <div className="flex items-center mx-14">
          <p className="text-black text-[14px] press-start uppercase whitespace-nowrap">
            Update in game
          </p>
        </div>
        <div className="flex items-center mx-14">
          <p className="text-black text-[14px] press-start uppercase whitespace-nowrap">
            Update in game
          </p>
        </div>
        <div className="flex items-center mx-14">
          <p className="text-black text-[14px] press-start uppercase whitespace-nowrap">
            Update in game
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default JoinCommunity;
