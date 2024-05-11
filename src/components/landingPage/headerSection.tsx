import HeaderPhoto from "@/assets/landingPage/header-photo.png";

const HeaderSection = () => {
  return (
    <div>
      <img src={HeaderPhoto} alt="header photo" className="w-full h-1/2 z-0" />

      <div className="absolute top-12 right-1/2 transform translate-x-full translate-y-1/2 flex flex-col space-y-5 p-10 m-5 w-[643px] h-[443px] bg-[#FFF3E3] rounded-[10px]">
        <p className="font-semibold tracking-wider text-base">New Arrival</p>
        <p className="font-bold text-[52px] text-[#B88E2F] w-[559px] h-[127px]">
          Discover Our New Collection
        </p>
        <p className="text-md w-[546px] h-[52px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="text-base text-white font-bold bg-[#B88E2F] p-5 w-[222px] h-[74px]">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default HeaderSection;
