import { Star } from 'lucide-react';

// Depoimentos fictícios
const testimonials = [
  {
    id: 1,
    name: "João Silva",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    date: "12/07/2023",
    text: "As roupas da Storm são incríveis! Compro há anos e a qualidade é sempre consistente. O Urban Oversized Tee é minha peça favorita, uso toda semana."
  },
  {
    id: 2,
    name: "Amanda Costa",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    date: "03/05/2023",
    text: "Adoro o estilo único que a Storm traz. As peças têm ótimo caimento e o tecido é super confortável. Só acho que poderiam ter mais opções de cores."
  },
  {
    id: 3,
    name: "Gabriel Mendes",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 5,
    date: "22/09/2023",
    text: "A Street Culture Hoodie é simplesmente perfeita! Já é a terceira peça que compro da marca e nunca decepciona. Atendimento excelente também!"
  },
  {
    id: 4,
    name: "Juliana Alves",
    avatar: "https://randomuser.me/api/portraits/women/59.jpg",
    rating: 5,
    date: "14/10/2023",
    text: "Descobri a Storm recentemente e já sou fã! As peças são autênticas e o acabamento é impecável. Vale cada centavo investido."
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">O que nossos clientes dizem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-card border border-border p-6 rounded-md hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-white/60">{testimonial.date}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i}
                    size={16}
                    className={`${i < testimonial.rating ? 'fill-white text-white' : 'fill-white/30 text-white/30'}`}
                  />
                ))}
              </div>
              
              <p className="text-white/80">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;