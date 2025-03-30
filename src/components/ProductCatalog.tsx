
import { useState, useEffect } from 'react';
import { Filter, ListIcon, ShoppingBag } from 'lucide-react';
import GraffitOrb from '../assets/img/graffitorb.png';
import GraffitThree from '../assets/img/graffitthree.png';
import GraffitThreeWhite from '../assets/img/graffitthreewhite.png';
import GraffitDash from '../assets/img/graffitdash.png';
import GraffitBlastWhite from '../assets/img/graffitdashwhite.png';
import GraffitBlast from '../assets/img/graffitblast.png';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Camiseta Storm Graffit Orb',
    price: 85.90,
    image: GraffitOrb,
    category: 'T-Shirts',
    isNew: true,
    link: 'https://lusfernandomachadorodrigue.mercadoshops.com.br/MLB-5325793538-camiseta-storm-graffit-orb-_JM',
    tamanhos: ['G'],
  },
  {
    id: 2,
    name: 'Camiseta Storm Graffit Three',
    price: 85.90,
    image: GraffitThree,
    category: 'T-Shirts',
    isNew: true,
    link: 'https://lusfernandomachadorodrigue.mercadoshops.com.br/MLB-5329174134-camiseta-storm-graffit-three-_JM',
    tamanhos: ['M'],
  },
  {
    id: 3,
    name: 'Camiseta Storm Graffit Three White',
    price: 85.90,
    image: GraffitThreeWhite,
    category: 'T-Shirts',
    isNew: true,
    link: 'https://lusfernandomachadorodrigue.mercadoshops.com.br/MLB-5329174134-camiseta-storm-graffit-three-_JM',
    tamanhos: ['M'],
  },
  {
    id: 4,
    name: 'Camiseta Storm Graffit Blast',
    price: 85.90,
    image: GraffitBlast,
    category: 'T-Shirts',
    isNew: true,
    link: 'https://lusfernandomachadorodrigue.mercadoshops.com.br/MLB-5329313694-camiseta-storm-graffit-blast-_JM',
    tamanhos: ['G'],
  },
  {
    id: 5,
    name: 'Camiseta Storm Graffit Dash',
    price: 85.90,
    image: GraffitDash,
    category: 'T-Shirts',
    isNew: true,
    link: 'https://produto.mercadolivre.com.br/MLB-4013125147-camiseta-storm-graffit-dash-_JM',
    tamanhos: ['GG'],
  },

  {
    id: 6,
    name: 'Camiseta Storm Graffit Dash White',
    price: 85.90,
    image: GraffitBlastWhite,
    category: 'T-Shirts',
    isNew: true,
    link: 'https://produto.mercadolivre.com.br/MLB-4013125147-camiseta-storm-graffit-dash-_JM',
    tamanhos: ['G'],
  },
];

const categories = ["T-Shirts"];

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
          <h2 className="catalog-heading">Compre nossos produtos
            <Link to="/tamanhos"><p className="text-lg text-white/80 mb-4 md:mb-0 text-center md:text-left">
              Tabela de tamanhos
              <ListIcon size={25} className="inline ml-1" />
            </p>
            </Link>
          </h2>


          <div className="mt-6 md:mt-0">
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

            <div className="hidden md:flex space-x-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 text-sm transition-colors ${selectedCategory === category
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

        <div className="product-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
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
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  {/* <span className="text-lg font-semibold">R${product.price}</span> */}
                  {/* <span className="text-sm text-white/60">Disponível no tamanho: {product.tamanhos}</span> */}
                </div>
                {/* <button className="button-primary mt-4 w-full flex items-center justify-center gap-2" onClick={() => window.open(product.link, '_blank')}> */}
                <button className="button-primary mt-4 w-full flex items-center justify-center gap-2">
                  <ShoppingBag size={16} />
                  Vendas não liberadas ainda
                  <br />
                  Aguarde até 04/04
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
