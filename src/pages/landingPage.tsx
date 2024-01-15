import Footer from "@/components/footer";
import CategoriesSection from "@/components/landingPage/categoriesSection";
import HeaderSection from "@/components/landingPage/headerSection";
import InspirationSection from "@/components/landingPage/inspirationSection";
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
        <InspirationSection />
        <Footer/>
      </div>
    </div>
  )
}

export default LandingPage