import Prod1 from '@/assets/landingPage/products/prod1.png'
import Prod2 from '@/assets/landingPage/products/prod2.png'
import Prod3 from '@/assets/landingPage/products/prod3.png'
import Prod4 from '@/assets/landingPage/products/prod4.png'


const ProductsSection = () => {
  return (
    <div className="flex flex-col space-y-4 w-full ">
        <p className="font-extrabold text-center text-2xl">Our Products</p>
        <div className="flex flex-row px-5 py-10 justify-center space-x-10">
            <div className="flex flex-col space-y-5 border rounded-lg">
                <img src={Prod1} alt="living room" className='hover:cursor-pointer' />
                
                <div className='flex flex-col space-y-1 px-5 pb-10'>
                    <p className='font-semibold text-xl text-[#3A3A3A] hover:cursor-pointer'>Slytherine</p>
                    <p className='text-xs text-[#898989] hover:cursor-pointer'>Stylish Cafe Chair</p>
                    <p className='font-bold text-xl text-[#3A3A3A] hover:cursor-pointer pt-3'>$1,000.00</p>
                </div>
            </div>
            <div className="flex flex-col space-y-5 border rounded-lg">
                <img src={Prod2} alt="living room" className='hover:cursor-pointer'/>
                 <div className='flex flex-col space-y-1 px-5 pb-10'>
                    <p className='font-semibold text-xl text-[#3A3A3A] hover:cursor-pointer'>Slytherine</p>
                    <p className='text-xs text-[#898989] hover:cursor-pointer'>Stylish Cafe Chair</p>
                    <p className='font-bold text-xl text-[#3A3A3A] hover:cursor-pointer pt-3'>$1,000.00</p>
                </div>
            </div>
            <div className="flex flex-col space-y-5 border rounded-lg">
                <img src={Prod3} alt="living room" className='hover:cursor-pointer'/>
                 <div className='flex flex-col space-y-1 px-5 pb-10'>
                    <p className='font-semibold text-xl text-[#3A3A3A] hover:cursor-pointer'>Slytherine</p>
                    <p className='text-xs text-[#898989] hover:cursor-pointer'>Stylish Cafe Chair</p>
                    <p className='font-bold text-xl text-[#3A3A3A] hover:cursor-pointer pt-3'>$1,000.00</p>
                </div>
            </div>
            <div className="flex flex-col space-y-5 border rounded-lg">
                <img src={Prod4} alt="living room" className='hover:cursor-pointer'/>
                <div className='flex flex-col space-y-1 px-5 pb-10'>
                    <p className='font-semibold text-xl text-[#3A3A3A] hover:cursor-pointer'>Slytherine</p>
                    <p className='text-xs text-[#898989] hover:cursor-pointer'>Stylish Cafe Chair</p>
                    <p className='font-bold text-xl text-[#3A3A3A] hover:cursor-pointer pt-3'>$1,000.00</p>
                </div>
            </div>
        </div>
        <div className="flex flex-row px-5 pb-10 justify-center space-x-10">
            <div className="flex flex-col space-y-5 border rounded-lg">
                <img src={Prod1} alt="living room" className='hover:cursor-pointer' />
                
                <div className='flex flex-col space-y-1 px-5 pb-10'>
                    <p className='font-semibold text-xl text-[#3A3A3A] hover:cursor-pointer'>Slytherine</p>
                    <p className='text-xs text-[#898989] hover:cursor-pointer'>Stylish Cafe Chair</p>
                    <p className='font-bold text-xl text-[#3A3A3A] hover:cursor-pointer pt-3'>$1,000.00</p>
                </div>
            </div>
            <div className="flex flex-col space-y-5 border rounded-lg">
                <img src={Prod2} alt="living room" className='hover:cursor-pointer'/>
                 <div className='flex flex-col space-y-1 px-5 pb-10'>
                    <p className='font-semibold text-xl text-[#3A3A3A] hover:cursor-pointer'>Slytherine</p>
                    <p className='text-xs text-[#898989] hover:cursor-pointer'>Stylish Cafe Chair</p>
                    <p className='font-bold text-xl text-[#3A3A3A] hover:cursor-pointer pt-3'>$1,000.00</p>
                </div>
            </div>
            <div className="flex flex-col space-y-5 border rounded-lg">
                <img src={Prod3} alt="living room" className='hover:cursor-pointer'/>
                 <div className='flex flex-col space-y-1 px-5 pb-10'>
                    <p className='font-semibold text-xl text-[#3A3A3A] hover:cursor-pointer'>Slytherine</p>
                    <p className='text-xs text-[#898989] hover:cursor-pointer'>Stylish Cafe Chair</p>
                    <p className='font-bold text-xl text-[#3A3A3A] hover:cursor-pointer pt-3'>$1,000.00</p>
                </div>
            </div>
            <div className="flex flex-col space-y-5 border rounded-lg">
                <img src={Prod4} alt="living room" className='hover:cursor-pointer'/>
                <div className='flex flex-col space-y-1 px-5 pb-10'>
                    <p className='font-semibold text-xl text-[#3A3A3A] hover:cursor-pointer'>Slytherine</p>
                    <p className='text-xs text-[#898989] hover:cursor-pointer'>Stylish Cafe Chair</p>
                    <p className='font-bold text-xl text-[#3A3A3A] hover:cursor-pointer pt-3'>$1,000.00</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <button className='border border-[#B88E2F] text-[#B88E2F] px-20 py-3'>Show More</button>
        </div>
    </div>
  )
}

export default ProductsSection