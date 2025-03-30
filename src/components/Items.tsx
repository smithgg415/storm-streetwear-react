import { FaCreditCard, FaGift, FaCheck } from 'react-icons/fa'; // Para os ícones
import MercadoLivreLogo from '../assets/img/mercadolivre.png'; // Importando o logo do Mercado Livre

const Items = () => {
  return (
    <div className="items py-12">
      <h2 className="text-2xl font-semibold text-center mb-6">Prezamos sua compra e sua satisfação!</h2>
      <ul className="flex flex-wrap justify-center space-x-6">
        <li className="flex items-center space-x-3">
          <FaCreditCard className="text-xl" />
          <h3 className="text-lg font-medium">Pagamento seguro e controlado</h3>
        </li>
        <li className="flex items-center space-x-3">
          <FaGift className="text-xl" />
          <h3 className="text-lg font-medium">Brindes exclusivos da marca</h3>
        </li>
        <li className="flex justify-center">
          <img src={MercadoLivreLogo} alt="Mercado Livre" width="120" />
        </li>
        <li className="flex items-center space-x-3">
          <FaCreditCard className="text-xl" />
          <h3 className="text-lg font-medium">Parcelamento em até 12x</h3>
        </li>
        <li className="flex items-center space-x-3">
          <FaCheck className="text-xl" />
          <h3 className="text-lg font-medium">Qualidade garantida</h3>
        </li>
      </ul>
    </div>
  );
};

export default Items;
