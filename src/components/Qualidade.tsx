import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Tecido from '../assets/img/tecido.png';
import Estampa from '../assets/img/estampa_unica.png';

const Qualidade = () => {
    return (
        <section className="relative w-full overflow-hidden bg-black text-white py-16 md:py-24">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute w-full h-full bg-[radial-gradient(circle_500px_at_70%_20%,#ffffff,transparent)]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-xl mx-auto text-center mb-16 space-y-6">
                    <div className="h-px w-20 bg-white/50 mx-auto"></div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                        Padrão de Qualidade
                    </h2>
                    <p className="text-md md:text-lg text-gray-400">
                        Na STORM STREETWEAR, cada peça é produzida com materiais de qualidade e atenção meticulosa aos detalhes,
                        garantindo durabilidade, conforto e estilo incomparáveis.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6 order-2 md:order-1">
                        <h3 className="text-2xl font-bold">Nossos Materiais</h3>
                        <p className="text-gray-400">
                            Utilizamos uma malha peruana de alta qualidade, feita de algodão 100%, fio 40.1 e elastano, pronta para garantir conforto, durabilidade e estilo,
                            com tecidos resistentes e agradáveis ao toque, pensados para oferecer a melhor
                            experiência ao vestir.
                        </p>
                        <div className="h-px w-12 bg-white/30"></div>
                        <p className="text-gray-500 text-sm">
                            Cada peça passa por rigorosos testes de qualidade antes de chegar às suas mãos.
                        </p>
                    </div>
                    <div className="overflow-hidden rounded-xl order-1 md:order-2">
                        <img
                            src={Tecido}
                            alt="Materiais Premium"
                            className="w-full h-64 md:h-80 object-cover filter grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src={Estampa}
                            alt="Estampas Exclusivas"
                            className="w-full h-64 md:h-80 object-cover filter grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
                        />
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold">Estampas Próprias</h3>
                        <p className="text-gray-400">
                            Nossas estampas são desenvolvidas por nossa equipe, tornando-as únicas e inéditas,
                            refletindo a essência do streetwear, garantindo que cada peça seja única e autêntica.
                        </p>
                        <div className="h-px w-12 bg-white/30"></div>
                        <p className="text-gray-500 text-sm">
                            Arte urbana e cultura de rua traduzidas em designs exclusivos para você.
                        </p>
                    </div>
                </div>

                <div className="text-center">

                    <Button
                        variant="outline"
                        className="mt-8 border-white text-white hover:bg-white hover:text-black transition-all group"
                    >
                        <a href="#shop" className="flex items-center justify-center">
                            Veja nossos produtos
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Qualidade;
