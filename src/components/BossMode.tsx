const BossMode = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[1300px]">
      <img
        src="/img/background-5.png"
        alt="Boss Background"
        className="w-full h-[1000px] object-cover absolute top-0 left-0 z-0"
      />
      <div className="bg-black/70 w-full h-full absolute top-0 left-0 z-10"></div>
      <img
        src="/img/background-4.png"
        alt="Boss Mode"
        className="w-full h-[850px] absolute bottom-0 left-0 z-20"
      />
      <div className="flex flex-col items-center justify-start w-full h-full z-30 mt-32">
        <p className="max-w-[1190px] w-full text-white press-start text-[55px] leading-[80px] text-center uppercase">
          mode: boss & assasins now in game!
        </p>
        <p className="max-w-[400px] w-full text-white text-[9px] text-center press-start mt-12">
          You can find bosses in locations and complete orders for player
          online.
        </p>
        <div className="flex w-full justify-center mx-auto gap-11">
          <img
            src="/img/boss-1.gif"
            alt="Boss"
            className="w-[188px] h-[188px]"
          />
          <img
            src="/img/arrow-1.png"
            alt="Boss"
            className="w-[287px] h-[90px] mt-36"
          />
          <img
            src="/img/knife.png"
            alt="Boss"
            className="w-[63px] h-[158px] mt-28"
          />
          <img
            src="/img/arrow-2.png"
            alt="Boss"
            className="w-[287px] h-[90px] mt-36"
          />
          <img src="/img/boss.png" alt="Boss" className="w-[149px] h-[149px]" />
        </div>
      </div>
    </div>
  );
};

export default BossMode;
