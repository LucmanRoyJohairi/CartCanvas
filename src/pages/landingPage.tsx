import CategoriesSection from "@/components/landingPage/categoriesSection";
import HeaderSection from "@/components/landingPage/headerSection";
import ProductsSection from "@/components/landingPage/productsSection";
import NavBar from "@/components/navBar";

const LandingPage = () => {
  return (
    <div>
      <NavBar/>
      <div className="flex flex-col space-y-20 relative w-full mb-10">
        <HeaderSection/>
        <CategoriesSection/>
        <ProductsSection />
      </div>
    </div>
  )
}

export default LandingPage