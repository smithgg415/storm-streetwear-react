import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ChevronLeft, Star, ShoppingCart, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import { toast } from '@/hooks/use-toast';

// Utilizando o mesmo array de produtos que temos em ProductCatalog
const products = [
  {
    id: 1,
    name: 'Urban Oversized Tee',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1566374010196-e78515e6a34a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'T-Shirts',
    isNew: true,
    description: 'Nosso Urban Oversized Tee é perfeito para o estilo urbano contemporâneo. Feito com algodão 100% orgânico que proporciona conforto durante todo o dia. O corte oversized oferece uma silhueta moderna e relaxada, ideal para combinar com qualquer peça de sua coleção streetwear.',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Preto', 'Branco', 'Cinza']
  },
  {
    id: 2,
    name: 'Street Culture Hoodie',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80',
    category: 'Hoodies',
    isNew: false,
    description: 'O Street Culture Hoodie é essencial para os dias mais frios. Com seu tecido de alta qualidade e forro macio, oferece calor e estilo ao mesmo tempo. Seu design streetwear autêntico com detalhes bordados representa a verdadeira cultura urbana.',
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    colors: ['Preto', 'Cinza Escuro', 'Azul Navy']
  },
  {
    id: 3,
    name: 'Cargo Pants Black',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1594042931706-a659fea5649e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    category: 'Pants',
    isNew: true,
    description: 'Nossa Cargo Pants Black combina funcionalidade com estilo urbano. Com múltiplos bolsos e design versátil, é perfeita para o dia a dia. O corte contemporâneo e o tecido resistente garantem conforto e durabilidade para qualquer ocasião.',
    sizes: ['38', '40', '42', '44', '46'],
    colors: ['Preto', 'Caqui', 'Verde Militar']
  },
  {
    id: 4,
    name: 'Essential Cap',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=804&q=80',
    category: 'Accessories',
    isNew: false,
    description: 'O Essential Cap é o acessório que completa qualquer visual urbano. Com ajuste snapback e bordado minimalista, esse boné traz personalidade e estilo para seu look. Feito com materiais premium para durabilidade e conforto o dia todo.',
    sizes: ['Único'],
    colors: ['Preto', 'Branco', 'Vermelho', 'Azul']
  },
  {
    id: 5,
    name: 'Urban Bomber Jacket',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80',
    category: 'Jackets',
    isNew: false,
    description: 'Nossa Urban Bomber Jacket combina o clássico design bomber com detalhes modernos. Perfeita para as entreestações, possui acabamento de alta qualidade e bolsos funcionais. O estilo versátil permite combinações tanto casuais quanto mais elaboradas.',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Preto', 'Verde Oliva', 'Burgundy']
  },
  {
    id: 6,
    name: 'Minimalist Backpack',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    category: 'Accessories',
    isNew: true,
    description: 'A Minimalist Backpack é perfeita para o dia a dia urbano. Com design clean e funcional, oferece espaço suficiente para seus essenciais sem comprometer o estilo. Feita com materiais resistentes à água e compartimentos organizados para máxima praticidade.',
    sizes: ['Único'],
    colors: ['Preto', 'Cinza', 'Azul Escuro']
  },
  {
    id: 7,
    name: 'Streetwear Sneakers',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'Footwear',
    isNew: false,
    description: 'Os Streetwear Sneakers são o calçado perfeito para completar seu visual urbano. Com design exclusivo e sola de borracha durável, combinam conforto e estilo. Perfeitos para o uso diário, adicionam personalidade ao seu estilo streetwear.',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: ['Preto', 'Branco', 'Preto/Branco']
  },
  {
    id: 8,
    name: 'Graphic Print Tee',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'T-Shirts',
    isNew: false,
    description: 'Nossa Graphic Print Tee apresenta arte original exclusiva criada pelos nossos designers. Feita com algodão premium que garante conforto e durabilidade. A estampa de alta qualidade resiste a múltiplas lavagens, mantendo as cores vivas por muito tempo.',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Preto', 'Branco', 'Cinza']
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const passedProduct = location.state?.product;
  const [product, setProduct] = useState<any>(passedProduct || null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    // Se não temos o produto dos parâmetros de state, buscamos do array
    if (!product) {
      const foundProduct = products.find(p => p.id === Number(id));
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedSize(foundProduct.sizes[0]);
        setSelectedColor(foundProduct.colors[0]);
      }
    } else if (selectedSize === '' && product.sizes) {
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0]);
    }
  }, [id, product, selectedSize]);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Carregando...</div>;
  }

  // Imagens adicionais simuladas (em um cenário real, viriam do produto)
  const additionalImages = [
    product.image,
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
  ];

  const handleAddToCart = () => {
    toast({
      title: "Adicionado ao carrinho",
      description: `${product.name} - ${selectedColor} - Tamanho: ${selectedSize}`,
    });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="py-4">
            <Link to="/" className="flex items-center text-white/60 hover:text-white transition-colors">
              <ChevronLeft size={16} />
              <span>Voltar para produtos</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden rounded-md">
                <img 
                  src={additionalImages[activeImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex space-x-4">
                {additionalImages.map((img, index) => (
                  <div 
                    key={index}
                    className={`aspect-square w-24 overflow-hidden rounded-md cursor-pointer border-2 ${activeImage === index ? 'border-white' : 'border-transparent'}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} view ${index+1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              {product.isNew && (
                <div className="inline-block bg-white text-black text-xs font-medium px-2 py-1 mb-2">
                  NOVO
                </div>
              )}
              
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-white/60 mt-1">{product.category}</p>
              </div>
              
              <div className="flex items-center space-x-1">
                <Star className="fill-white text-white" size={16} />
                <Star className="fill-white text-white" size={16} />
                <Star className="fill-white text-white" size={16} />
                <Star className="fill-white text-white" size={16} />
                <Star className="fill-white/30 text-white/30" size={16} />
                <span className="text-sm ml-2">(4.0) · 24 avaliações</span>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold">R$ {product.price.toFixed(2)}</h2>
                <p className="text-white/60 text-sm">Ou 3x de R$ {(product.price / 3).toFixed(2)} sem juros</p>
              </div>
              
              <p className="text-white/80 leading-relaxed">
                {product.description}
              </p>
              
              {/* Size Selection */}
              <div>
                <h3 className="text-sm font-medium mb-2">TAMANHO</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      className={`w-12 h-12 flex items-center justify-center border ${
                        selectedSize === size 
                          ? 'border-white bg-white text-black' 
                          : 'border-white/30 hover:border-white'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium mb-2">COR</h3>
                <div className="flex flex-wrap gap-4">
                  {product.colors.map((color: string) => (
                    <button
                      key={color}
                      className={`px-4 py-2 border ${
                        selectedColor === color 
                          ? 'border-white bg-white text-black' 
                          : 'border-white/30 hover:border-white'
                      }`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div>
                <h3 className="text-sm font-medium mb-2">QUANTIDADE</h3>
                <div className="flex items-center border border-white/30 w-32">
                  <button
                    className="px-3 py-2 text-lg font-bold"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <div className="flex-1 text-center">{quantity}</div>
                  <button
                    className="px-3 py-2 text-lg font-bold"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  className="button-primary flex-1 flex items-center justify-center gap-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart size={18} />
                  Adicionar ao carrinho
                </button>
                <button className="button-outline flex items-center justify-center gap-2">
                  <Heart size={18} />
                  Favoritar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Related Products section would go here */}
      
      {/* Testimonials */}
      <Testimonials />
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
