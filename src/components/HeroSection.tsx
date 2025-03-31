
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[url('https://images.unsplash.com/photo-1523398002811-999ca8dec234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1405&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative container mx-auto h-full flex flex-col justify-center px-4 z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            STORM <br />STREETWEAR <br /><span className="text-4xl md:text-6xl font-light">Aproveite a pré-venda no dia 03/04</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
            Se destaque usando a Storm!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#shop" className="button-primary flex items-center justify-center gap-2 group">
              Comprar agora
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 w-full text-center">
        <div className="animate-bounce inline-block">
          <a href="#shop" className="inline-flex flex-col items-center text-sm text-white/80 hover:text-white">
            <span className="mb-1">Scroll</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1" />
              <circle cx="8" cy="7" r="2" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
