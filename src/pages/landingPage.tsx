import NavBar from "@/components/landingPage/navBar";
import HeaderPhoto from '../assets/header-photo.png';

const LandingPage = () => {
  return (
    <div>
      <NavBar/>
      <div className="relative w-full mb-10">
        <img src={HeaderPhoto} alt="header photo" className="w-full h-1/2 z-0" />
       
        <div className="absolute bottom-[350px] right-1/2 transform translate-x-full translate-y-1/2 flex flex-col space-y-5 p-10 m-5 w-[600px] bg-[#FFF3E3]">
          <p className="font-semibold tracking-wider text-md">New Arrival</p>
          <p className="font-extrabold text-5xl text-[#B88E2F]">Discover Our New Collection</p>
          <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button className="text-white font-bold bg-[#B88E2F] p-5 w-1/4">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage