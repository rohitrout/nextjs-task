import { Button } from "./ui/button";
const SemiCircularBanner = ({ image, text, bgColor }: any) => {
  return (
    <div
      className="w-[350px] bg-gray-800 h-[138px] rounded-s-full flex justify-between gap-8 my-10 mx-6"
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div>
        <img src={image} className="rounded-full h-full" alt="bitfins" />
      </div>

      <div className="flex flex-col py-5 pr-5 gap-5">
        <div className="text-3xl text-white font-extrabold">{text}</div>
        <Button className="underline text-white">shop now</Button>
      </div>
    </div>
  );
};

export default SemiCircularBanner;
