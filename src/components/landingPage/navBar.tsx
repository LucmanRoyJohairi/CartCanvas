import { Heart, Search, ShoppingCart, User } from 'lucide-react';
import Logo from '../../assets/logo.png';
import { Link } from 'wouter';

const NavBar = () => {
  return (
    <div>
        <div className="flex flex-row justify-between p-5 border-b">
            {/* logo */}
            <div className="flex flex-row space-x-3 items-center">
                <img src={Logo} alt="logo" width={30} height={30}/>
                <p className='font-bold '>Cart Canvas</p>
            </div>
            {/* navlinks */}
            <div className='flex flex-row justify-between space-x-10 items-center'>
                <Link href='/'>Home</Link>
                <Link href='/shop'>Shop</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
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