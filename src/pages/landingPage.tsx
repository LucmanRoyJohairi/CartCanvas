import Footer from "@/components/footer";
import CategoriesSection from "@/components/landingPage/categoriesSection";
import HeaderSection from "@/components/landingPage/headerSection";
import InspirationSection from "@/components/landingPage/inspirationSection";
import ProductsSection from "@/components/landingPage/productsSection";
import NavBar from "@/components/navBar";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col space-y-20 w-full mb-10">
        <HeaderSection />
        <div className="w-full flex flex-col items-center space-y-10">
          <CategoriesSection />
          <ProductsSection />
        </div>
        <InspirationSection />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
