import Navbar from "@/components/NavBarRevendedores";
import logo from "@/assets/img/logo_redondo.png";
import Footer from "@/components/Footer";

const Revendedores = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen">
            <Navbar />
            <section className="pt-32 pb-16 px-4">
                <div className="container mx-auto text-center">
                    <img src={logo} alt="Logo da Storm" className="mx-auto mb-6" width={400} height={400} />
                    <h1 className="text-5xl font-extrabold mb-6">Tenha a Storm em sua Loja!</h1>
                    <div className="w-24 h-1 bg-indigo-500 mx-auto mb-12"></div>
                </div>
            </section>

            <section className="px-4">
                <div className="container mx-auto text-center">
                    <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                        Torne-se um parceiro da Storm e aproveite nossos benefícios exclusivos. Envie um email para <a href="mailto:stormstree@gmail.com" style={{ textDecoration: "underline" }}>stormstree@gmail.com</a> e vamos fechar negócio!
                    </p>
                    <a href="https://instagram.com/storm__streetwear" target="_blank" rel="noopener noreferrer" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full transition-all">
                        Entre em contato pelo Instagram
                    </a>
                </div>
            </section>

            <section className="py-20 px-4 bg-zinc-900">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-10">VANTAGENS DE SER UM REVENDEDOR</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-zinc-700 p-6 rounded-2xl shadow-md">
                            <div className="flex items-center justify-center mb-4">
                                <i className="fas fa-percent text-indigo-500 text-3xl mr-4"></i>
                                <p className="text-lg">Condições especiais para revendedores, garantindo excelentes margens de lucro</p>
                            </div>
                        </div>
                        <div className="bg-zinc-700 p-6 rounded-2xl shadow-md">
                            <div className="flex items-center justify-center mb-4">
                                <i className="fas fa-gift text-indigo-500 text-3xl mr-4"></i>
                                <p className="text-lg">Acesso antecipado a novas coleções e lançamentos.</p>
                            </div>
                        </div>
                        <div className="bg-zinc-700 p-6 rounded-2xl shadow-md">
                            <div className="flex items-center justify-center mb-4">
                                <i className="fas fa-image text-indigo-500 text-3xl mr-4"></i>
                                <p className="text-lg">Autorização do uso e divulgação de nossas logos e imagens.</p>
                            </div>
                        </div>
                        <div className="bg-zinc-700 p-6 rounded-2xl shadow-md">
                            <div className="flex items-center justify-center mb-4">
                                <i className="fas fa-headset text-indigo-500 text-3xl mr-4"></i>
                                <p className="text-lg">Suporte dedicado para revendedores.</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-xl text-white/80 mt-12 max-w-3xl mx-auto">
                        Junte-se a nós e faça parte da nossa comunidade de revendedores!
                    </p>
                </div>
            </section>
            <Footer />
        </div >
    );
}

export default Revendedores;
