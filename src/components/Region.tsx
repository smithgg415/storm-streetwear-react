import React from 'react';
import MapImage from '../assets/img/mapa.png';

const Region = () => {
  return (
    <div className="bg-gray-900 text-white py-8 px-4 rounded-md shadow-lg max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-6">
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">Atenção, clientes de Piquerobi, Presidente Venceslau e Santo Anastácio!</h2>
        <p className="text-gray-400 mb-6">
          Se você está na região de Presidente Venceslau, por favor, selecione a opção de "Retirar com o vendedor" ao realizar sua compra no Mercado Livre.
        </p>
        <p className="text-gray-400 mb-4">
          Isso garantirá que você tenha a melhor experiência de compra e entrega possível.
        </p>
        <p className="text-gray-400">
          Agradecemos pela sua compreensão e preferência!
        </p>
        <p className="text-gray-400 mt-4">
          <strong>Equipe Storm Streetwear!</strong>
        </p>
      </div>
      <div className="flex-1">
        <img src={MapImage} alt="Mapa da Região" className="w-full h-auto rounded-xl shadow-md" />
        <p className="text-gray-400 text-sm mt-2 text-center">
          Região de Piquerobi
        </p>
      </div>
    </div>
  );
};

export default Region;
