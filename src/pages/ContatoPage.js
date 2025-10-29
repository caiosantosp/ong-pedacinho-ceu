import { 
  MessageCircle, // Para WhatsApp
  Phone, 
  Mail, 
  MapPin     // Novo ícone para Localização
} from 'lucide-react';

export default function ContatoPage() {
  return (
    <>
    <br></br>
      {/* SEÇÃO PRINCIPAL DE CONTATO */}
      <section id="contato-cta" className="py-20 bg-teal-500 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          
          <h2 className="text-4xl font-bold mb-6">Fale Conosco</h2>
          
          <p className="text-lg text-teal-100 max-w-3xl mx-auto mb-6">
            Tem alguma dúvida, sugestão ou quer saber mais sobre nossos projetos e como se tornar um parceiro?
          </p>
          <p className="text-lg text-teal-50 font-semibold max-w-3xl mx-auto mb-16">
            Estamos aqui para ajudar! Escolha o melhor canal para falar com a equipe da Pedacinho do Céu.
          </p>

          {/* Grid de Contato */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/5511912345678" // <-- TROCAR PELO SEU NÚMERO
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center group"
            >
              <div className="border-2 border-orange-400 rounded-full p-5 mb-4 transform transition-transform group-hover:scale-110">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">WhatsApp</h3>
              <span className="text-xl text-teal-100 group-hover:text-white group-hover:underline">
                (11) 91234-5678
              </span>
            </a>

            {/* Telefone */}
            <a 
              href="tel:1145678901" // <-- TROCAR PELO SEU NÚMERO
              className="flex flex-col items-center group"
            >
              <div className="border-2 border-orange-400 rounded-full p-5 mb-4 transform transition-transform group-hover:scale-110">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Telefone</h3>
              <span className="text-xl text-teal-100 group-hover:text-white group-hover:underline">
                (11) 4567-8901
              </span>
            </a>

            {/* E-mail */}
            <a 
              href="mailto:contato@pedacinhodoceu.org.br" // <-- TROCAR PELO SEU EMAIL
              className="flex flex-col items-center group"
            >
              <div className="border-2 border-orange-400 rounded-full p-5 mb-4 transform transition-transform group-hover:scale-110">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">E-mail</h3>
              <span className="text-xl text-teal-100 group-hover:text-white group-hover:underline">
                contato@pedacinhodoceu.org.br
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* SEÇÃO DE LOCALIZAÇÃO (COM ENDEREÇO REAL E MAPA ATUALIZADO) */}
      <section id="localizacao" className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Título */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Localização</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Faça-nos uma visita! Estamos de portas abertas para receber você, sua família e sua doação.
            </p>
          </div>

          {/* Grid de Endereço e Mapa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Coluna do Endereço (ATUALIZADO) */}
            <div className="flex flex-col justify-center">
              <div className="flex items-start mb-6">
                <div className="bg-teal-600 p-4 rounded-full mr-4 mt-1">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Nosso Endereço</h3>
                  {/* --- ENDEREÇO REAL INSERIDO AQUI --- */}
                  <p className="text-lg text-gray-700 leading-relaxed mt-2">
                    <strong>Associação Para Crianças e Adolescentes Pedacinho do Céu</strong><br />
                    Rua Celestial, 234<br />
                    Jardim Celeste<br />
                    Santana de Parnaíba - SP, 06528-160
                  </p>
                  {/* --- FIM DO ENDEREÇO REAL --- */}
                </div>
              </div>
              <div className="pl-20"> {/* Alinhado com o texto acima */}
                <h4 className="text-xl font-semibold text-gray-800">Horário de Atendimento:</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Segunda a Sexta, das 8h às 17h
                </p>
              </div>
            </div>

            {/* Coluna do Mapa (ATUALIZADO) */}
            <div className="w-full">
              {/* Link do Google Maps Embed API apontando para o endereço real */}
              <iframe 
                src="https://www.google.com/maps/embed/v1/place?key=SUA_API_KEY_AQUI&q=Rua+Celestial,234,Jardim+Celeste,Santana+de+Parnaiba,SP,06528-160"
                width="100%" 
                height="400" 
                style={{ border:0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-xl"
                title="Mapa da Localização da ONG"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}