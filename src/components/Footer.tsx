import { Instagram, ListCheck } from 'lucide-react';
import desenvolvedorLogo from '../assets/img/giacomellidevs.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <a href="/" className="text-2xl font-bold tracking-tighter mb-6 inline-block">STORM STREET<span className="font-light">WEAR</span>
            </a>
            <p className="text-white/70 mt-4 max-w-xs">
              Streetwear premium para quem aprecia um design único e estética urbana.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com/storm__streetwear" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Revendedores</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Revenda a Storm Streetwear na sua loja!</a></li>
              <li><a href="/revendedores" className="text-white/70 hover:text-white transition-colors" style={{ textDecoration: "underline" }}>
                Seja um revendedor <ListCheck size={20} className="ml-1 inline" />
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Informações</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Sobre Nós</a></li>
              <li className='text-white/70 hover:text-white transition-colors'>E-mail: stormstree@gmail.com</li>
              <li className='flex text-white/70 hover:text-white transition-colors'>
                Instagram: @storm__streetwear
              </li>

            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-center">Desenvolvido por:</h3>
            <img
              src={desenvolvedorLogo}
              alt="Logo ou imagem do desenvolvedor"
              className="mt-4 mx-auto" width={180} height={180}
            />
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {currentYear} STORM STREETWEAR. Todos os Direitos Reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Mastercard" className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196539.png" alt="PayPal" className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="American Express" className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
