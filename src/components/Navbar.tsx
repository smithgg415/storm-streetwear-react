
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <Link to="/" className="text-2xl font-bold tracking-tighter">STREET<span className="font-light">WEAR</span></Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link uppercase text-sm tracking-wider">Home</Link>
          <a href="#shop" className="nav-link uppercase text-sm tracking-wider">Shop</a>
          <a href="#collections" className="nav-link uppercase text-sm tracking-wider">Collections</a>
          <Link to="/about" className="nav-link uppercase text-sm tracking-wider">Sobre</Link>
        </nav>
        
        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-foreground/80 hover:text-foreground transition-colors">
            <Search size={20} />
          </button>
          <button className="text-foreground/80 hover:text-foreground transition-colors">
            <User size={20} />
          </button>
          <button className="text-foreground/80 hover:text-foreground transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-white text-black text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black absolute top-full left-0 w-full py-4 px-6 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors py-2 uppercase text-sm tracking-wider" 
               onClick={() => setIsMenuOpen(false)}>Home</Link>
            <a href="#shop" className="text-foreground/80 hover:text-foreground transition-colors py-2 uppercase text-sm tracking-wider"
               onClick={() => setIsMenuOpen(false)}>Shop</a>
            <a href="#collections" className="text-foreground/80 hover:text-foreground transition-colors py-2 uppercase text-sm tracking-wider"
               onClick={() => setIsMenuOpen(false)}>Collections</a>
            <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors py-2 uppercase text-sm tracking-wider"
               onClick={() => setIsMenuOpen(false)}>Sobre</Link>
          </nav>
          <div className="flex items-center space-x-6 mt-6">
            <button className="text-foreground/80 hover:text-foreground transition-colors">
              <Search size={20} />
            </button>
            <button className="text-foreground/80 hover:text-foreground transition-colors">
              <User size={20} />
            </button>
            <button className="text-foreground/80 hover:text-foreground transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-white text-black text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
