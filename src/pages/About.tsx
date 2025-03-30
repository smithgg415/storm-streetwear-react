
import { ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SOBRE NÓS</h1>
          <div className="w-20 h-1 bg-white/30 mx-auto mb-8"></div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">STORM STREETWEAR</h2>
              <p className="text-lg text-white/80 mb-6">
                A STORM STREETWEAR é uma marca de moda urbana que combina estilo e conforto. Nossa missão é oferecer roupas de alta qualidade que expressem a individualidade de cada um.
              </p>
              <p className="text-lg text-white/80 mb-6">
                Com designs exclusivos e materiais sustentáveis, buscamos criar peças que não apenas vestem, mas também contam histórias.
              </p>
              <p className="text-lg text-white/80 mb-8">
                Fundada em 2023, nossa marca nasceu da paixão pela cultura urbana e pelo desejo de criar roupas autênticas que representam o espírito das ruas.
              </p>
              <a href="#values" className="inline-flex items-center text-white hover:text-white/70 transition-colors">
                NOSSOS VALORES <ChevronRight className="ml-1" size={16} />
              </a>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN0cmVldHdlYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                alt="STORM STREETWEAR" 
                className="w-full h-[400px] object-cover rounded-md shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section id="values" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">NOSSOS VALORES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 p-8 rounded-md">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">QUALIDADE</h3>
              <p className="text-white/70">
                Utilizamos apenas materiais premium e processos de fabricação cuidadosamente supervisionados para garantir a excelência em cada peça.
              </p>
            </div>
            
            <div className="bg-zinc-900/50 p-8 rounded-md">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">EXPRESSÃO</h3>
              <p className="text-white/70">
                Acreditamos que a moda é uma forma poderosa de expressar sua identidade e visão de mundo. Cada peça é projetada para contar uma história.
              </p>
            </div>
            
            <div className="bg-zinc-900/50 p-8 rounded-md">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">SUSTENTABILIDADE</h3>
              <p className="text-white/70">
                Comprometidos com práticas sustentáveis, utilizamos materiais eco-friendly e processos que minimizam o impacto ambiental em nossa produção.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">NOSSO TIME</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="h-[300px] mb-4 rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Lucas Silva</h3>
              <p className="text-white/70">Fundador & Designer Chefe</p>
            </div>
            
            <div>
              <div className="h-[300px] mb-4 rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="Creative Director" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Ana Santos</h3>
              <p className="text-white/70">Diretora Criativa</p>
            </div>
            
            <div>
              <div className="h-[300px] mb-4 rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="Marketing Director" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Carlos Mendes</h3>
              <p className="text-white/70">Diretor de Marketing</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
