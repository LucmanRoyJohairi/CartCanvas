import LivingRoom from '../../assets/landingPage/living.png'
import BedRoom from '../../assets/landingPage/bedroom.png'
import DiningRoom from '../../assets/landingPage/diner.png'
const CategoriesSection = () => {
  return (
    <div className="flex flex-col space-y-4 w-full ">
        <p className="font-extrabold text-center text-2xl">Browse the Range</p>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
        <div className="flex flex-row px-5 py-10 justify-center space-x-10">
            <div className="flex flex-col space-y-5 text-center">
                <img src={DiningRoom} alt="living room" className='hover:cursor-pointer' />
                <p className='font-bold text-lg hover:cursor-pointer'>Dining</p>
            </div>
            <div className="flex flex-col space-y-5 text-center">
                <img src={BedRoom} alt="living room" className='hover:cursor-pointer'/>
                <p className='font-bold text-lg hover:cursor-pointer'>Bedroom</p>
            </div>
            <div className="flex flex-col space-y-5 text-center">
                <img src={LivingRoom} alt="living room" className='hover:cursor-pointer'/>
                <p className='font-bold text-lg hover:cursor-pointer'>Living</p>
            </div>
        </div>
    </div>
  )
}

export default CategoriesSection