
import { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock product data
const products = [
  {
    id: 1,
    name: 'Urban Oversized Tee',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1566374010196-e78515e6a34a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'T-Shirts',
    isNew: true,
  },
  {
    id: 2,
    name: 'Street Culture Hoodie',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80',
    category: 'Hoodies',
    isNew: false,
  },
  {
    id: 3,
    name: 'Cargo Pants Black',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1594042931706-a659fea5649e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    category: 'Pants',
    isNew: true,
  },
  {
    id: 4,
    name: 'Essential Cap',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=804&q=80',
    category: 'Accessories',
    isNew: false,
  },
  {
    id: 5,
    name: 'Urban Bomber Jacket',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80',
    category: 'Jackets',
    isNew: false,
  },
  {
    id: 6,
    name: 'Minimalist Backpack',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    category: 'Accessories',
    isNew: true,
  },
  {
    id: 7,
    name: 'Streetwear Sneakers',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'Footwear',
    isNew: false,
  },
  {
    id: 8,
    name: 'Graphic Print Tee',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'T-Shirts',
    isNew: false,
  }
];

const categories = ["All", "T-Shirts", "Hoodies", "Pants", "Jackets", "Footwear", "Accessories"];

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section id="shop" className="bg-black py-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="catalog-heading">Shop Our Products</h2>
          
          <div className="mt-6 md:mt-0">
            {/* Mobile filter button */}
            <div className="md:hidden">
              <button 
                className="flex items-center space-x-2 border border-white/20 px-4 py-2"
                onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
              >
                <Filter size={16} />
                <span>Filter: {selectedCategory}</span>
              </button>
              
              {isFilterMenuOpen && (
                <div className="absolute z-20 mt-2 bg-black border border-white/20 w-48">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`block w-full text-left px-4 py-2 hover:bg-white/10 ${selectedCategory === category ? 'bg-white/20' : ''}`}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsFilterMenuOpen(false);
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Desktop category tabs */}
            <div className="hidden md:flex space-x-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 text-sm transition-colors ${
                    selectedCategory === category
                      ? 'text-white border-b-2 border-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} state={{ product }} className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-white text-black text-xs font-medium px-2 py-1">
                    NEW
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="button-primary w-full">Ver detalhes</button>
                </div>
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`} state={{ product }}>
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-semibold">${product.price}</span>
                    <span className="text-sm text-white/60">{product.category}</span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="button-outline">Load More Products</button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
