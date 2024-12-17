import React from "react";

interface CommonPlayCardProps {
  image: string;
  title: string;
  width: number;
  height: number;
}

const CommonPlayCard: React.FC<CommonPlayCardProps> = ({
  image,
  title,
  width,
  height,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-[282px] h-[282px] rounded-lg border border-white/70 gap-6">
      <img src={image} alt={title} width={width} height={height} />
      <p className="text-white text-base press-start text-center">{title}</p>
    </div>
  );
};

export default CommonPlayCard;
