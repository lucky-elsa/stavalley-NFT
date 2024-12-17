import CommonPlayCard from "./CommonPlayCard";

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
    </div>
  );
};

export default JoinCommunity;
