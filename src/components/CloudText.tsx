const CloudText = () => {
  return (
    <div className="flex relative justify-center items-end w-full h-60 px-10 mt-40">
      <img
        src="/img/cloud.png"
        alt="cloud"
        className="absolute top-0 left-36"
      />
      <p className="max-w-[900px] text-white text-center text-[54px] leading-[80px] -start-1 z-50">
        Explore a New Type of gameplay
      </p>
      <img
        src="/img/cloud.png"
        alt="cloud"
        className="absolute bottom-0 right-32"
      />
    </div>
  );
};

export default CloudText;
