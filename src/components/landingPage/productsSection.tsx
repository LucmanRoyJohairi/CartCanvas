import Prod1 from "@/assets/landingPage/products/prod1.png";
import Prod2 from "@/assets/landingPage/products/prod2.png";
import Prod3 from "@/assets/landingPage/products/prod3.png";
import Prod4 from "@/assets/landingPage/products/prod4.png";

const ProductsSection = () => {
  return (
    <div className="flex flex-col items-reverse space-y-[50px] p-5 w-[1236px]">
      <p className="font-bold text-center text-[40px] text-[#3A3A3A]">
        Our Products
      </p>
      {/* 1st row */}
      <div className="flex flex-row px-5 py-10 justify-center items-center space-x-7 h-[446px]">
        <div className="flex flex-col border rounded-[10px]  w-[285px] h-[446px]">
          <img
            src={Prod1}
            alt="living room"
            className="hover:cursor-pointer "
          />

          <div className="flex flex-col space-y-2 px-5 pb-10 bg-[#F4F5F7] w-[285px] h-[446px] ">
            <div className="flex flex-col  gap-y-[8px] w-[249px] h-[99px] mt-4 round">
              <p className="font-semibold text-[24px] text-xl text-[#3A3A3A] hover:cursor-pointer">
                Slytherine
              </p>
              <p className="font-medium text-[16px] text-[#898989] hover:cursor-pointer">
                Stylish Cafe Chair
              </p>
              <p className="font-bold text-xl text-[#3A3A3A] hover:cursor-pointer">
                Rp 2.500.000
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-[10px]  w-[285px] h-[446px]">
          <img
            src={Prod2}
            alt="living room"
            className="hover:cursor-pointer "
          />

          <div className="flex flex-col space-y-2 px-5 pb-10 bg-[#F4F5F7] w-[285px] h-[446px] ">
            <div className="flex flex-col  gap-y-[8px] w-[249px] h-[99px] mt-4 round">
              <p className="font-semibold text-[24px] text-xl text-[#3A3A3A] hover:cursor-pointer">
                Slytherine
              </p>
              <p className="font-medium text-[16px] text-[#898989] hover:cursor-pointer">
                Stylish Cafe Chair
              </p>
              <p className="font-bold text-xl text-[#3A3A3A] hover:cursor-pointer">
                Rp 2.500.000
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-[10px]  w-[285px] h-[446px]">
          <img
            src={Prod3}
            alt="living room"
            className="hover:cursor-pointer "
          />

          <div className="flex flex-col space-y-2 px-5 pb-10 bg-[#F4F5F7] w-[285px] h-[446px] ">
            <div className="flex flex-col  gap-y-[8px] w-[249px] h-[99px] mt-4 round">
              <p className="font-semibold text-[24px] text-xl text-[#3A3A3A] hover:cursor-pointer">
                Slytherine
              </p>
              <p className="font-medium text-[16px] text-[#898989] hover:cursor-pointer">
                Stylish Cafe Chair
              </p>
              <p className="font-bold text-xl text-[#3A3A3A] hover:cursor-pointer">
                Rp 2.500.000
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-[10px]  w-[285px] h-[446px]">
          <img
            src={Prod4}
            alt="living room"
            className="hover:cursor-pointer "
          />

          <div className="flex flex-col space-y-2 px-5 pb-10 bg-[#F4F5F7] w-[285px] h-[446px] ">
            <div className="flex flex-col  gap-y-[8px] w-[249px] h-[99px] mt-4 round">
              <p className="font-semibold text-[24px] text-xl text-[#3A3A3A] hover:cursor-pointer">
                Slytherine
              </p>
              <p className="font-medium text-[16px] text-[#898989] hover:cursor-pointer">
                Stylish Cafe Chair
              </p>
              <p className="font-bold text-xl text-[#3A3A3A] hover:cursor-pointer">
                Rp 2.500.000
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd row */}
      <div className="flex flex-row px-5 py-10 justify-center items-center space-x-7 h-[446px]">
        <div className="flex flex-col border rounded-[10px]  w-[285px] h-[446px]">
          <img
            src={Prod1}
            alt="living room"
            className="hover:cursor-pointer "
          />

          <div className="flex flex-col space-y-2 px-5 pb-10 bg-[#F4F5F7] w-[285px] h-[446px] ">
            <div className="flex flex-col  gap-y-[8px] w-[249px] h-[99px] mt-4 round">
              <p className="font-semibold text-[24px] text-xl text-[#3A3A3A] hover:cursor-pointer">
                Slytherine
              </p>
              <p className="font-medium text-[16px] text-[#898989] hover:cursor-pointer">
                Stylish Cafe Chair
              </p>
              <p className="font-bold text-xl text-[#3A3A3A] hover:cursor-pointer">
                Rp 2.500.000
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-[10px]  w-[285px] h-[446px]">
          <img
            src={Prod2}
            alt="living room"
            className="hover:cursor-pointer "
          />

          <div className="flex flex-col space-y-2 px-5 pb-10 bg-[#F4F5F7] w-[285px] h-[446px] ">
            <div className="flex flex-col  gap-y-[8px] w-[249px] h-[99px] mt-4 round">
              <p className="font-semibold text-[24px] text-xl text-[#3A3A3A] hover:cursor-pointer">
                Slytherine
              </p>
              <p className="font-medium text-[16px] text-[#898989] hover:cursor-pointer">
                Stylish Cafe Chair
              </p>
              <p className="font-bold text-xl text-[#3A3A3A] hover:cursor-pointer">
                Rp 2.500.000
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-[10px]  w-[285px] h-[446px]">
          <img
            src={Prod3}
            alt="living room"
            className="hover:cursor-pointer "
          />

          <div className="flex flex-col space-y-2 px-5 pb-10 bg-[#F4F5F7] w-[285px] h-[446px] ">
            <div className="flex flex-col  gap-y-[8px] w-[249px] h-[99px] mt-4 round">
              <p className="font-semibold text-[24px] text-xl text-[#3A3A3A] hover:cursor-pointer">
                Slytherine
              </p>
              <p className="font-medium text-[16px] text-[#898989] hover:cursor-pointer">
                Stylish Cafe Chair
              </p>
              <p className="font-bold text-xl text-[#3A3A3A] hover:cursor-pointer">
                Rp 2.500.000
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-[10px]  w-[285px] h-[446px]">
          <img
            src={Prod4}
            alt="living room"
            className="hover:cursor-pointer "
          />

          <div className="flex flex-col space-y-2 px-5 pb-10 bg-[#F4F5F7] w-[285px] h-[446px] ">
            <div className="flex flex-col  gap-y-[8px] w-[249px] h-[99px] mt-4 round">
              <p className="font-semibold text-[24px] text-xl text-[#3A3A3A] hover:cursor-pointer">
                Slytherine
              </p>
              <p className="font-medium text-[16px] text-[#898989] hover:cursor-pointer">
                Stylish Cafe Chair
              </p>
              <p className="font-bold text-xl text-[#3A3A3A] hover:cursor-pointer">
                Rp 2.500.000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="border border-[#B88E2F] text-[#B88E2F] px-20 py-3">
          Show More
        </button>
      </div>
    </div>
  );
};

export default ProductsSection;
