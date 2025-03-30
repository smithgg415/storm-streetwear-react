import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TabelaDeTamanhos from '../assets/img/tabela_tamanhos.png';

const TamanhosPage = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />

            <section className="pt-32 pb-16 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">GUIA DE TAMANHOS</h1>
                    <div className="w-20 h-1 bg-white/30 mx-auto mb-8"></div>
                    <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
                        Escolher o tamanho certo é essencial para garantir o máximo de conforto e estilo. Confira nossa tabela de tamanhos e descubra qual é o ideal para você.
                    </p>
                </div>
            </section>

            <section className="pb-24 px-4">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <img src={TabelaDeTamanhos} alt="Tabela de Tamanhos" className="w-full rounded-md shadow-xl" />
                    </div>
                    <div className="order-1 md:order-2 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-6">Como Escolher o Tamanho Correto</h2>
                        <p className="text-lg text-white/80 mb-4">
                            Meça o seu corpo seguindo as orientações da tabela e compare com as medidas indicadas. Caso esteja em dúvida, recomendamos optar por um tamanho maior.
                        </p>
                        <p className="text-lg text-white/80">
                            Nossa equipe está sempre disponível para tirar qualquer dúvida que você possa ter. Não hesite em entrar em contato!
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TamanhosPage;
