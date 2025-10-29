import { 
  MessageCircle, // Para WhatsApp
  Phone, 
  Mail, 
  Shirt,     // Para Roupas
  Blocks,    // Para Brinquedos
  BookOpen,  // Para Livros
  Home       // Para Utensílios
} from 'lucide-react';

export default function DoarBrecho() {
  return (
    <>
    <br></br>
      {/* SEÇÃO CTA BRECHÓ (Baseada na Imagem) */}
      <section id="brecho-cta" className="py-20 bg-teal-500 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          
          <h2 className="text-4xl font-bold mb-6">Doar para o Brechó</h2>
          
          <p className="text-lg text-teal-100 max-w-3xl mx-auto mb-6">
            Você tem produtos de boa qualidade que você não precisa mais ou utiliza? Algo que possa trazer alegria ou utilidade para outra pessoa?
          </p>
          <p className="text-lg text-teal-50 font-semibold max-w-3xl mx-auto mb-16">
            Nós adoraríamos transformar sua doação em novos sorrisos! Aceitamos doações diversas, entre em contato e veja como doar.
          </p>

          {/* Grid de Contato (Estilo da Imagem)
            ATUALIZAÇÃO: Agora cada item é um <a> (link) e usa 'group-hover'
          */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/5511912345678" // <-- TROCAR PELO SEU NÚMERO
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center group" // 'group' para hover
            >
              <div className="border-2 border-orange-400 rounded-full p-5 mb-4 transform transition-transform group-hover:scale-110"> {/* 'group-hover' aqui */}
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">WhatsApp</h3>
              <span className="text-xl text-teal-100 group-hover:text-white group-hover:underline"> {/* 'group-hover' aqui */}
                (11) 91234-5678
              </span>
            </a>

            {/* Telefone */}
            <a 
              href="tel:1145678901" // <-- TROCAR PELO SEU NÚMERO
              className="flex flex-col items-center group" // 'group' para hover
            >
              <div className="border-2 border-orange-400 rounded-full p-5 mb-4 transform transition-transform group-hover:scale-110"> {/* 'group-hover' aqui */}
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Telefone</h3>
              <span className="text-xl text-teal-100 group-hover:text-white group-hover:underline"> {/* 'group-hover' aqui */}
                (11) 4567-8901
              </span>
            </a>

            {/* E-mail */}
            <a 
              href="mailto:contato@pedacinhodoceu.org.br" // <-- TROCAR PELO SEU EMAIL
              className="flex flex-col items-center group" // 'group' para hover
            >
              <div className="border-2 border-orange-400 rounded-full p-5 mb-4 transform transition-transform group-hover:scale-110"> {/* 'group-hover' aqui */}
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">E-mail</h3>
              <span className="text-xl text-teal-100 group-hover:text-white group-hover:underline"> {/* 'group-hover' aqui */}
                contato@pedacinhodoceu.org.br
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* SEÇÃO O QUE DOAR (Baseada na estrutura do SobreNos) */}
      <section id="o-que-doar" className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Título */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O que você pode doar?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Seu item sem uso pode ser o tesouro de outra pessoa. Aceitamos produtos em bom estado de conservação que serão vendidos em nosso brechó para financiar nossos projetos.
            </p>
          </div>

          {/* Grid de Itens (Estilo da Seção "Valores" do SobreNos) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-600 p-4 rounded-full mb-3">
                <Shirt className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Roupas e Calçados</h4>
              <p className="text-gray-600">Adulto e infantil, em bom estado.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-600 p-4 rounded-full mb-3">
                <Blocks className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Brinquedos e Jogos</h4>
              <p className="text-gray-600">Completos e funcionais.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-600 p-4 rounded-full mb-3">
                <BookOpen className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Livros e Mídia</h4>
              <p className="text-gray-600">Literatura, didáticos, CDs e DVDs.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-600 p-4 rounded-full mb-3">
                <Home className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Utensílios e Outros</h4>
              <p className="text-gray-600">Itens de casa, decoração, etc.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}