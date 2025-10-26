import { Users, BookOpen, Heart, Target } from 'lucide-react'; // (Exemplo de ícones, caso você use)
import acolhedor from '../assets/projeto4.jpeg';

export default function SobreNos() {
  return (
    <>
      {/* SEÇÃO "SOBRE NÓS" */}
      <section id="sobre" className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Título */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa História</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Como um pequeno gesto de acolhimento se tornou uma força para "reescrever futuros".
            </p>
          </div>

          {/* O Começo */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">O Início de Tudo</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                A ONG "Pedacinho do Céu" nasceu em 2010, não como uma organização, mas como um impulso. Ana Clara, nossa fundadora e ex-professora da rede pública, via diariamente crianças de sua comunidade com um potencial imenso, mas sem um lugar seguro para ficar após a escola.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ela começou com o que tinha: sua própria garagem, alguns livros usados e uma grande vontade de oferecer um "pedacinho do céu" – um refúgio de paz e aprendizado. O que era uma simples roda de leitura e ajuda com o dever de casa para cinco crianças, logo chamou a atenção de outros voluntários.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src={acolhedor}
                alt="Crianças lendo livros em um ambiente acolhedor" 
                className="rounded-lg shadow-xl object-cover h-80 w-full"
              />
            </div>
          </div>

          {/* Missão e Visão */}
          <div className="bg-gray-50 rounded-lg p-10 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Missão */}
              <div>
                <div className="flex items-center mb-4">
                  <Target className="text-teal-500 w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-800">Nossa Missão</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Promover o acolhimento, a educação e o desenvolvimento integral de crianças e adolescentes em situação de vulnerabilidade social, oferecendo ferramentas e oportunidades para que possam reescrever seus próprios futuros e impactar positivamente suas comunidades.
                </p>
              </div>

              {/* Visão */}
              <div>
                <div className="flex items-center mb-4">
                  <BookOpen className="text-teal-500 w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-800">Nossa Visão</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Ser um centro de referência em transformação social, reconhecido por criar um ambiente seguro, inspirador e educativo, onde cada criança descobre seu potencial e se torna protagonista de sua história.
                </p>
              </div>
            </div>
          </div>

          {/* Valores */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-semibold text-gray-800 mb-10">Nossos Valores</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              
              <div className="flex flex-col items-center">
                <div className="bg-teal-600 p-4 rounded-full mb-3">
                  <Heart className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Acolhimento</h4>
                <p className="text-gray-600">Um lugar de escuta, afeto e segurança.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-teal-600 p-4 rounded-full mb-3">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Respeito</h4>
                <p className="text-gray-600">Valorizamos a história de cada indivíduo.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-teal-600 p-4 rounded-full mb-3">
                  <span className="font-bold text-xl text-black">E</span> {/* Simbolizando Educação */}
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Educação</h4>
                <p className="text-gray-600">A principal ferramenta de transformação.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-teal-600 p-4 rounded-full mb-3">
                  <span className="font-bold text-xl text-black">T</span> {/* Simbolizando Transparência */}
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Transparência</h4>
                <p className="text-gray-600">Clareza em nossas ações e uso de recursos.</p>
              </div>

            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center bg-gray-900 text-white p-12 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">Faça Parte Desta História</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Hoje, a "garagem" da Dona Ana Clara é uma sede que atende mais de 150 crianças com programas de educação, arte, esporte e apoio psicossocial. Mas para continuar reescrevendo futuros, precisamos de você.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/doar" className="bg-teal-600 text-black px-6 py-3 rounded-md font-semibold transform transition-transform hover:scale-105">
                Quero Ajudar Agora
              </a>
              <a href="/" className="border border-white text-white px-6 py-3 rounded-md font-semibold transform transition-transform hover:scale-105">
                Conheça os Projetos
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}