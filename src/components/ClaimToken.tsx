const ClaimToken = () => {
  return (
    <div className="flex w-full h-[1000px] bg-black">
      <div className="flex flex-col relative w-full h-full items-center bg-[url('/img/space.png')] bg-cover bg-center bg-no-repeat py-12">
        <p className="max-w-[660px] w-full press-start text-white text-[54px] leading-[80px] text-center mx-auto">
          Claim our token $STRL
        </p>
        <p className="max-w-[480px] w-full press-start text-white text-[9px] leading-[22px] text-center mx-auto mt-12">
          To get it, you need to complete daily tasks, kill bosses, complete
          kill orders, be an active player, or simply take part in events.
        </p>
        <div className="flex flex-col justify-center items-center mt-28">
          <img src="/img/coin.gif" alt="token" className="w-56 h-56 z-10" />
          <img
            src="/img/claim-cloud.png"
            alt="token"
            className="w-[400px] h-52 -mt-20"
          />
        </div>
      </div>
    </div>
  );
};

export default ClaimToken;
