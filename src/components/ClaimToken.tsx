const ClaimToken = () => {
  return (
    <div className="flex w-full h-[1000px] bg-black">
      <div className="flex flex-col relative w-full h-full justify-center bg-[url('/img/space.png')] bg-cover bg-center bg-no-repeat">
        <p className="max-w-[660px] w-full press-start text-white text-[54px] leading-[80px] text-center mx-auto">
          Claim our token $STRL
        </p>
        <p className="max-w-[480px] w-full press-start text-white text-[9px] leading-[22px] text-center mx-auto">
          To get it, you need to complete daily tasks, kill bosses, complete
          kill orders, be an active player, or simply take part in events.
        </p>
      </div>
    </div>
  );
};

export default ClaimToken;
