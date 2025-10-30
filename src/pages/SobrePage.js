// Garanta que todos estes ícones estão importados
import { 
  BookOpen, 
  Heart, 
  Target, 
  Handshake,
  TrendingUp,
  GraduationCap,
  Scale 
} from 'lucide-react';
import acolhedor from '../assets/projeto4.png';

export default function SobreNos() {
  return (
    <>
    <br></br>
      {/* MUDANÇA: Fundo principal da seção é um cinza bem claro */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Título (Fica no fundo cinza) */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-teal-700 mb-4">Nossa História</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Como um pequeno gesto de acolhimento se tornou uma força para "reescrever futuros".
            </p>
          </div>

          {/* MUDANÇA: "O Início" agora é um Card branco com sombra */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0">
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">O Início de Tudo</h3>
                <p className="mb-4 text-gray-700 leading-relaxed">
A Pedacinho do Céu nasceu do amor e da fé de um grupo de amigos que acreditam que toda criança merece cuidado, oportunidade e esperança. Inicialmente, o grupo ajudava famílias da comunidade com doações de alimentos, roupas e brinquedos. Hoje, a ONG se tornou um espaço de acolhimento e transformação para crianças e adolescentes.
                </p>
                <p className="text-gray-700 leading-relaxed">
Com o CNPJ oficializado em junho de 2025, a instituição dá início a um novo capítulo: o de acolher jovens de 0 a 17 anos em situação de vulnerabilidade, oferecendo amor, educação e oportunidades de um futuro melhor — incluindo a possibilidade da adoção. A Pedacinho do Céu segue firme na missão de transformar vidas com dedicação e propósito.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={acolhedor}
                  alt="Crianças lendo livros em um ambiente acolhedor" 
                  className="rounded-lg shadow-xl object-cover w-full aspect-[4/3]"
                />
              </div>
            </div>
          </div>

          {/* MUDANÇA: "Missão e Visão" em um Card de cor sólida escura */}
          <div className="bg-teal-700 text-white rounded-xl shadow-lg p-10 md:p-14 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Missão */}
              <div>
                <div className="flex items-center mb-4">
                  {/* Ícones brancos */}
                  <Target className="text-white w-8 h-8 mr-3 shrink-0" />
                  <h3 className="text-2xl font-semibold text-white">Nossa Missão</h3>
                </div>
                {/* Texto em tom claro (teal-100) para legibilidade */}
                <p className="text-teal-100 leading-relaxed">
                  Promover o acolhimento, a educação e o desenvolvimento integral de crianças e adolescentes em situação de vulnerabilidade social, oferecendo ferramentas e oportunidades para que possam reescrever seus próprios futuros e impactar positivamente suas comunidades.
                </p>
              </div>

              {/* Visão */}
              <div>
                <div className="flex items-center mb-4">
                  <BookOpen className="text-white w-8 h-8 mr-3 shrink-0" />
                  <h3 className="text-2xl font-semibold text-white">Nossa Visão</h3>
                </div>
                <p className="text-teal-100 leading-relaxed">
                  Ser um centro de referência em transformação social, reconhecido por criar um ambiente seguro, inspirador e educativo, onde cada criança descobre seu potencial e se torna protagonista de sua história.
                </p>
              </div>
            </div>
          </div>

          {/* Valores (Fica no fundo cinza para variar) */}
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-gray-900 mb-12">Nossos Valores</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              
              {/* Item 1: Acolhimento */}
              <div className="flex flex-col items-center p-4">
                {/* Ícones com fundo teal claro */}
                <div className="bg-teal-100 p-4 rounded-full mb-4">
                  <Heart className="w-7 h-7 text-teal-700" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">Acolhimento</h4>
                <p className="text-gray-600 text-sm">Um lugar de escuta, afeto e segurança.</p>
              </div>

              {/* Item 2: Respeito */}
              <div className="flex flex-col items-center p-4">
                <div className="bg-teal-100 p-4 rounded-full mb-4">
                  <Handshake className="w-7 h-7 text-teal-700" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">Respeito</h4>
                <p className="text-gray-600 text-sm">Valorizamos a história de cada indivíduo.</p>
              </div>

              {/* Item 3: Visão de Futuro */}
              <div className="flex flex-col items-center p-4">
                <div className="bg-teal-100 p-4 rounded-full mb-4">
                  <TrendingUp className="w-7 h-7 text-teal-700" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">Visão de Futuro</h4>
                <p className="text-gray-600 text-sm">Melhoria contínua para o indivíduo.</p>
              </div>

              {/* Item 4: Educação */}
              <div className="flex flex-col items-center p-4">
                <div className="bg-teal-100 p-4 rounded-full mb-4">
                  <GraduationCap className="w-7 h-7 text-teal-700" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">Educação</h4>
                <p className="text-gray-600 text-sm">A principal ferramenta de transformação.</p>
              </div>

              {/* Item 5: Transparência */}
              <div className="flex flex-col items-center p-4">
                <div className="bg-teal-100 p-4 rounded-full mb-4">
                  <Scale className="w-7 h-7 text-teal-700" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">Transparência</h4>
                <p className="text-gray-600 text-sm">Clareza em nossas ações e recursos.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}