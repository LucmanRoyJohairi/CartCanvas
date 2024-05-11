import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Logo from "@/assets/logo.png";
import { Link } from "wouter";

const NavBar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center py-5 px-10 border-b h-[100px]">
        {/* logo */}
        <div className="flex flex-row space-x-3 items-center w-[285px] h-[41px] ">
          <img src={Logo} alt="logo" width={30} height={30} />
          <Link className="font-medium text-[22px]" href="/">
            Cart Canvas
          </Link>
        </div>
        {/* navlinks */}
        <div className="flex flex-row justify-between items-center w-[430px] h-[34px] ">
          <Link href="/home" className="font-medium text-base">
            Home
          </Link>
          <Link href="/shop" className="text-base font-medium">
            Shop
          </Link>
          <Link href="/about" className="text-base font-medium">
            About
          </Link>
          <Link href="/contact" className="text-base font-medium">
            Contact
          </Link>
        </div>

        {/* nav-actions */}
        <div className="flex flex-row justify-between space-x-10 items-center">
          <User size={28} className="hover:cursor-pointer" />
          <Search size={28} className="hover:cursor-pointer" />
          <Heart size={28} className="hover:cursor-pointer" />
          <ShoppingCart size={28} className="hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
