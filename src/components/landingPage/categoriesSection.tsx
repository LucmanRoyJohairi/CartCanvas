import LivingRoom from "@/assets/landingPage/living.png";
import BedRoom from "@/assets/landingPage/bedroom.png";
import DiningRoom from "@/assets/landingPage/diner.png";
const CategoriesSection = () => {
  return (
    <div className="flex flex-col items-center space-y-4 h-[685px]">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-[#333333] font-bold text-[32px] text-center text-2xl w-[559px] h-[76.71]">
          Browse the Range
        </p>
        <p className="text-center text-[20px] text-[#666666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing eli
        </p>
      </div>
      <div className="flex flex-row px-5 py-10 justify-center space-x-10">
        <div className="flex flex-col space-y-5 text-center ">
          <img
            src={DiningRoom}
            alt="living room"
            className="hover:cursor-pointer w-[381px] h-[480px] rounded-[10px]"
          />
          <p className="font-semibold text-[24px] text-[#333333] hover:cursor-pointer">
            Dining
          </p>
        </div>
        <div className="flex flex-col space-y-5 text-center ">
          <img
            src={BedRoom}
            alt="living room"
            className="hover:cursor-pointer w-[381px] h-[480px] rounded-[10px]"
          />
          <p className="font-semibold text-[24px] text-[#333333] hover:cursor-pointer">
            Bedroom
          </p>
        </div>
        <div className="flex flex-col space-y-5 text-center ">
          <img
            src={LivingRoom}
            alt="living room"
            className="hover:cursor-pointer w-[381px] h-[480px] rounded-[10px]"
          />
          <p className="font-semibold text-[24px] text-[#333333] hover:cursor-pointer">
            Living
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
