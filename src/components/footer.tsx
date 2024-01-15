const Footer = () => {
  return (
    <div className="h-[505px]">
        <div className="flex flex-row justify-between border-b mx-20 p-5 h-full">
            <div className="flex flex-col space-y-5 justify-between h-1/2">
                <p className="font-extrabold text-2xl">CartCartel</p>
                <div className="flex flex-col text-[#9F9F9F] text-base space-y-2">
                    <p>400 University Drive Suite 200 Coral</p>
                    <p>Gabies</p>
                    <p>FL 33134 USA</p>
                </div>
            </div>
            <div className="flex flex-col text-base justify-between py-5 h-5/6 font-medium">
                <p className="font-medium text-[#9F9F9F]">Links</p>
                <p>Home</p>
                <p>About</p>
                <p>Shop</p>
                <p>Contact</p>
            </div>
            <div className="flex flex-col text-base justify-between py-5 h-4/6 font-medium">
                <p className="font-medium text-[#9F9F9F]">Help</p>
                <p>Payment Options</p>
                <p>Returns</p>
                <p>Privacy Policies</p>
            </div>
            <div className="flex flex-col justify-between h-2/5 py-5 font-medium">
                <p>Newsletter</p>
                <div className="flex flex-row space-x-3">
                    <input type="text" name="" id="" placeholder="Enter your email address" className="font-normal border-b-2 outline-0 border-b"/>
                    <button className="border-b-2">Subscribe</button>
                </div>


            </div>
        </div>
        <p className="px-20 py-10">2023 furino. All rights reverved</p>
    </div>
  )
}

export default Footer