import Background from "../assets/img/graffitorb.png";
import FivePanel from "../assets/img/fivepanel.png";
import Shorts from "../assets/img/shorts.png";
const categories = [
  {
    name: "Camisetas",
    image: Background,
    emBreve: false,
    text: "Qualidade Premium em nossas Camisetas"
  },
  {
    name: "Bonés",
    image: FivePanel,
    emBreve: true,
    text: "Estilo e Conforto em Cada Detalhe"
  },
  {
    name: "Shorts",
    image:  Shorts,
    emBreve: true,
    text: "Presente em todas as peças"
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="catalog-heading">Categorias</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="relative h-[400px] overflow-hidden group cursor-pointer"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                <p className="text-white/70 mb-4">{category.emBreve ? "Em Breve" : "Disponível"}</p>
                <span className="inline-block bg-white text-black px-4 py-2 text-sm font-medium mt-2 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {category.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
