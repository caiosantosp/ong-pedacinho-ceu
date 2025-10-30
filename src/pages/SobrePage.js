import { Users, BookOpen, Heart, Target } from 'lucide-react'; // (Exemplo de ícones, caso você use)
import acolhedor from '../assets/projeto4.png';

export default function SobreNos() {
  return (
    <>
    <br></br>
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
                A Pedacinho do Céu nasceu do coração de um grupo de colegas que acreditaram que cada criança merece amor genuíno, cuidados e oportunidade para crescer saudável de forma física, emocional, mental e principalmente profissional, dando seguimento em suas vidas no futuro. Inspirados pela fé e pelo desejo de transformar vidas, começaram abraçando as famílias da comunidade da região, distribuindo cesta básica, itens de higiene, roupas, calçados, brinquedos e tudo que esteve em seu alcance financeiro para se fazer. 
                Hoje, a Pedacinho do Céu é um espaço de esperança e acolhimento através do sorriso de cada criança e adolescente atendidos.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A Pedacinho do Céu está apenas no início de um grande sonho, pois, apenas em Junho de 2025 o nosso CNPJ se tornou uma realidade após diversos desafios enfrentados. Temos como meta acolhermos crianças e adolescentes de 0 -17 anos vítimas de maus tratos e vulnerabilidade em nosso próprio espaço ofertando amor, dedicação, educação e oportunidades melhores de vida no futuro a partir da adoção. Entendemos que este é um caminho longo a ser seguido, mas, que estamos desde então nos preparando para este grande momento onde vidas poderão ser transformadas através de nosso trabalho e dedicação.
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
              {/* AJUSTE AQUI: Mudei de "sm:grid-cols-2 md:grid-cols-4" 
                para "sm:grid-cols-3 md:grid-cols-5" para acomodar os 5 itens de forma harmônica.
              */}
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8">
                
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
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">Visão de Futuro</h4>
                  {/* AJUSTE AQUI: Sugestão de texto mais curto para manter o equilíbrio 
                  */}
                  <p className="text-gray-600">Melhoria contínua para o indivíduo e a comunidade.</p>
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