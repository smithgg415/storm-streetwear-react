
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User, Search, Instagram } from 'lucide-react';
import Logo from '../assets/img/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
        </a>
        <a href="https://stormstreetwear.store" className="text-2xl font-bold tracking-tighter">STORM STREET<span className="font-light">WEAR</span></a>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="nav-link uppercase text-sm tracking-wider">Home</a>
          <a href="#shop" className="nav-link uppercase text-sm tracking-wider">Produtos</a>
          <a href="#about" className="nav-link uppercase text-sm tracking-wider">Sobre nós</a>
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <button className="text-foreground/80 hover:text-foreground transition-colors flex items-center space-x-2">
          <p className="hidden md:block text-sm font-semibold">Acesse nosso instagram</p>
            <Instagram size={20} />
          </button>

        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black absolute top-full left-0 w-full py-4 px-6 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors py-2 uppercase text-sm tracking-wider"
              onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#shop" className="text-foreground/80 hover:text-foreground transition-colors py-2 uppercase text-sm tracking-wider"
              onClick={() => setIsMenuOpen(false)}>Produtos</a>
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors py-2 uppercase text-sm tracking-wider"
              onClick={() => setIsMenuOpen(false)}>Sobre nós</a>
          </nav>
          <div className="flex items-center space-x-6 mt-6">
            <button className="text-foreground/80 hover:text-foreground transition-colors">
              <Instagram size={20} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
