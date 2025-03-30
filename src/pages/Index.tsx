
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedCategories from '../components/FeaturedCategories';
import ProductCatalog from '../components/ProductCatalog';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import About from '@/components/About';
import Items from '../components/Items';
import Region from '@/components/Region';
import Qualidade from '@/components/Qualidade';
import Tamanhos from '@/pages/Tamanhos';

const Index = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedCategories />
      <ProductCatalog />
      <Items />
      <Region />
      <Qualidade />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
