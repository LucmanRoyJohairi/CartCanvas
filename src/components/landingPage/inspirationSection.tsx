import featuredImage from "@/assets/landingPage/inspiration/inspo1.png";
import subImage1 from "@/assets/landingPage/inspiration/inspo2.png";
import subImage2 from "@/assets/landingPage/inspiration/inspo3.png";

const InspirationSection = () => {
  return (
    <div className="bg-[#fcf8f3] w-[1140] h-[670px] py-5 pl-10">
      <div className="flex flex-row items-center space-x-10">
        {/* content */}
        <div className="flex flex-none flex-col pl-[147px] justify-center place-items-start h-[670px] w-[564px] space-y-5 gap-5">
          <div className="w-[422px] h-[151px] ">
            <p className="font-bold text-[40px] text-[#3A3A3A]">
              50+ Beautiful rooms inspiration
            </p>
            <p className="text-[16px] text-[#616161] text-medium w-[368px]">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
          </div>
          <button className="px-5 py-3 bg-[#B88E2F] text-white font-semibold text-[16px]">
            Explore More
          </button>
        </div>

        <div className="flex flex-one flex-row space-x-10 w-[1196] items-start justify-end">
          <img
            src={featuredImage}
            alt="featured image"
            className="w-[404px] h-[582px]"
          />
          <div className="flex flex-col justify-around overflow-clip gap-10">
            <div className="flex flex-row justify-start space-x-5">
              <img
                src={subImage1}
                alt="sub image"
                className="w-[372px] h-[486px]"
              />
              <img
                src={subImage2}
                alt="sub image 2"
                className="w-[372px] h-[486px]"
              />
            </div>
            <div className="flex flex-row space-x-5">
              <div className="rounded-full w-3 h-3 bg-[#B88E2F] hover:cursor-pointer"></div>
              <div className="rounded-full w-3 h-3 bg-[#D8D8D8] hover:cursor-pointer"></div>
              <div className="rounded-full w-3 h-3 bg-[#D8D8D8] hover:cursor-pointer"></div>
              <div className="rounded-full w-3 h-3 bg-[#D8D8D8] hover:cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationSection;
