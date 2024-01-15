import { Heart, Search, ShoppingCart, User } from 'lucide-react';
import Logo from '@/assets/logo.png';
import { Link } from 'wouter';

const NavBar = () => {
  return (
    <div>
        <div className="flex flex-row justify-between py-5 px-10 border-b h-[100px]">
            {/* logo */}
            <div className="flex flex-row space-x-3 items-center">
                <img src={Logo} alt="logo" width={30} height={30}/>
                <Link className='font-semibold' href='/'>Cart Canvas</Link>
            </div>
            {/* navlinks */}
            <div className='flex flex-row justify-between space-x-10 items-center'>
                <Link href='/home' className='text-sm font-medium'>Home</Link>
                <Link href='/shop' className='text-sm font-medium'>Shop</Link>
                <Link href='/about' className='text-sm font-medium'>About</Link>
                <Link href='/contact' className='text-sm font-medium'>Contact</Link>
            </div>

            {/* nav-actions */}
            <div className='flex flex-row justify-between space-x-10 items-center'>
                <User size={20} className='hover:cursor-pointer'/>
                <Search size={20}className='hover:cursor-pointer'/>
                <Heart size={20} className='hover:cursor-pointer'/>
                <ShoppingCart size={20} className='hover:cursor-pointer'/>
            </div> 
        </div>

    </div>
  )
}

export default NavBar