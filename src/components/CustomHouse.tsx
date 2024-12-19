const CustomHouse = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-[790px] bg-[#ffad5d] bg-[url('/img/background-2.png')] bg-cover bg-center bg-no-repeat">
      <p
        style={{ textShadow: "0px 8px black" }}
        className="max-w-[962px] w-full text-center text-white text-[54px] leading-[80px] uppercase -mt-24 z-10"
      >
        create a personal custom house
      </p>
      <div className="flex relative -top-10 left-[620px] justify-center items-center w-[196px] h-[117px] bg-[url('/img/bubble.png')] bg-cover bg-center bg-no-repeat px-10 pr-5">
        <p className="press-start text-start text-black text-xs uppercase -mt-5">
          create your house right now!!!
        </p>
      </div>
    </div>
  );
};

export default CustomHouse;
