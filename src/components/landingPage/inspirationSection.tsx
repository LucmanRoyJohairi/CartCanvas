import featuredImage from '../../assets/landingPage/inspiration/inspo1.png';
import subImage1 from '../../assets/landingPage/inspiration/inspo2.png';
import subImage2 from '../../assets/landingPage/inspiration/inspo3.png';

const InspirationSection = () => {
  return (
    <div className="bg-[#fcf8f3] w-full h-full py-5 pl-10">
        <div className="flex flex-row">
            <div className="flex flex-col h-[670px] w-1/3 items-start justify-center space-y-5">
                <p className="font-extrabold text-4xl text-[#3A3A3A]">50+ Beautiful rooms inspiration</p>
                <p className="text-[#616161] text-lg w-3/4">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <button className="px-5 py-3 bg-[#B88E2F] text-white font-bold">Explore More</button>
            </div>

            <div className="flex flex-row space-x-10">
                <img src={featuredImage} alt="featured image" />
                <div className='flex flex-col justify-around overflow-clip'>
                    <div className="flex flex-row space-x-5">
                        <img src={subImage1} alt="sub image" />
                        <img src={subImage2} alt="sub image 2" className='h-[486px]'/>
                    </div>
                    {/* accordion btn */}
                    <div className='flex flex-row space-x-5'>
                        <div className='rounded rounded-full w-3 h-3 bg-[#B88E2F]'></div>
                        <div className='rounded rounded-full w-3 h-3 bg-[#D8D8D8]'></div>
                        <div className='rounded rounded-full w-3 h-3 bg-[#D8D8D8]'></div>
                        <div className='rounded rounded-full w-3 h-3 bg-[#D8D8D8]'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InspirationSection