import { FaCreditCard, FaGift, FaCheck } from 'react-icons/fa';
import MercadoLivreLogo from '../assets/img/mercadolivre.png';
import { Card, CardContent } from '@/components/ui/card';

const Items = () => {
  const items = [
    { icon: <FaCreditCard className="text-4xl text-blue-500 mb-2" />, title: 'Pagamento seguro e controlado' },
    { icon: <FaGift className="text-4xl text-yellow-500 mb-2" />, title: 'Brindes exclusivos da marca' },
    { icon: <img src={MercadoLivreLogo} alt="Mercado Livre" width="80" className="mb-2" />, title: 'Compra garantida pelo Mercado Livre' },
    { icon: <FaCreditCard className="text-4xl text-green-500 mb-2" />, title: 'Parcelamento em até 12x' },
    { icon: <FaCheck className="text-4xl text-green-500 mb-2" />, title: 'Qualidade garantida' },
  ];

  return (
    <div className="items py-12">
      <h2 className="text-2xl font-semibold text-center mb-6">Prezamos sua compra e sua satisfação!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
        {items.map((item, index) => (
          <Card key={index} className="p-4 shadow-lg rounded-2xl hover:shadow-xl transition-shadow flex items-center justify-center">
            <CardContent className="flex flex-col items-center text-center">
              {item.icon}
              <h3 className="text-lg font-medium mt-2">{item.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Items;
