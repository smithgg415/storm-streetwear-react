import { ChevronRight } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white" id="about">

            <section className="pt-32 pb-16 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">SOBRE NÓS</h1>
                    <div className="w-20 h-1 bg-white/30 mx-auto mb-8"></div>
                </div>
            </section>

            <section className="py-16 px-4 ">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl font-bold mb-6">STORM STREETWEAR</h2>
                            <p className="text-lg text-white/80 mb-6">
                                A Storm surgiu da necessidade de trazer mais grafite e arte de rua para o streetwear, fugindo das estampas genéricas que saturam o mercado. Com essa ideia resgatada do passado, a marca nasceu para entregar originalidade em cada estampa, aliando estilo e qualidade nos tecidos.
                            </p>
                            <p className="text-lg text-white/80 mb-6">
                                Com designs exclusivos e materiais de qualidade excepcional, buscamos criar peças que não apenas vestem, mas também contam histórias.
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

            <section id="values" className="py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-16">NOSSOS VALORES</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-zinc-900/50 p-8 rounded-md">
                            <h3 className="text-xl font-bold mb-4">QUALIDADE</h3>
                            <p className="text-white/70">
                                Utilizamos apenas materiais premium e processos de fabricação cuidadosamente supervisionados para garantir a excelência em cada peça.
                            </p>
                        </div>
                        <div className="bg-zinc-900/50 p-8 rounded-md">
                            <h3 className="text-xl font-bold mb-4">EXPRESSÃO</h3>
                            <p className="text-white/70">
                                Acreditamos que a moda é uma forma poderosa de expressar sua identidade e visão de mundo. Cada peça é projetada para manter uma essência.
                            </p>
                        </div>
                        <div className="bg-zinc-900/50 p-8 rounded-md">
                            <h3 className="text-xl font-bold mb-4">ORIGINALIDADE</h3>
                            <p className="text-white/70">
                                Cada estampa é uma obra de arte única, criada para se destacar e contar uma história. Não seguimos tendências, nós as criamos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
