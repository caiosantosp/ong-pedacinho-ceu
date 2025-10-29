import { 
  ClipboardList, // Ícone para Projetos
  BookOpen,      // Ícone para Educação
  Palette,       // Ícone para Arte/Cultura
  HeartHandshake // Ícone para Apoio Social
} from 'lucide-react';
// Você pode precisar importar 'acolhedor' ou outras imagens para os cards
// import imgProjeto1 from '../assets/projeto1.jpeg';
// import imgProjeto2 from '../assets/projeto2.jpeg';
// import imgProjeto3 from '../assets/projeto3.jpeg';

export default function ProjetosPage() {
  return (
    <>
      {/* O <br></br> que você usou na outra página para pular o navbar */}
      <br></br>

      {/* SEÇÃO HERO PROJETOS */}
      <section id="projetos-hero" className="py-20 bg-teal-500 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          
          {/* Ícone com borda laranja */}
          <div className="flex justify-center mb-6">
            <div className="border-2 border-orange-400 rounded-full p-5">
              <ClipboardList className="w-12 h-12 text-white" />
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-6">Nossos Projetos</h2>
          
          <p className="text-lg text-teal-100 max-w-3xl mx-auto mb-6">
            Conheça as iniciativas que transformam doações e voluntariado em ações concretas de impacto social.
          </p>
          <p className="text-lg text-teal-50 font-semibold max-w-3xl mx-auto">
            Cada projeto é um pilar fundamental no nosso trabalho de acolhimento, educação e desenvolvimento de crianças e adolescentes.
          </p>
        </div>
      </section>

      {/* SEÇÃO LISTAGEM DE PROJETOS (Cards) */}
      <section id="projetos-lista" className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Título */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Iniciativas em Ação</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubra como atuamos em diferentes frentes para garantir um futuro melhor.
            </p>
          </div>

          {/* Grid de Cards de Projetos */}
          {/* Usando 'space-y-12' para espaçamento em vez de grid, para um layout de blog */}
          <div className="flex flex-col items-center space-y-16">
            
            {/* Card Projeto 1 - Reforço Escolar */}
            <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-lg overflow-hidden w-full max-w-5xl">
              {/* Imagem (Use um 'import' ou uma URL) */}
              <div className="md:w-1/3">
                <img 
                  // src={imgProjeto1} 
                  src="http://googleusercontent.com/images.google.com/9" // Placeholder
                  alt="Crianças em sala de aula de reforço" 
                  className="object-cover h-64 w-full md:h-full" 
                />
              </div>
              {/* Conteúdo */}
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-3">
                  <div className="bg-teal-600 p-2 rounded-full mr-3">
                    <BookOpen className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Projeto Sementes do Saber</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Nosso programa de reforço escolar e apoio pedagógico no contraturno. Oferecemos ajuda com deveres, aulas de leitura e matemática lúdica para garantir que nenhuma criança fique para trás em seu desenvolvimento educacional.
                </p>
                <a 
                  href="#" // Link para a página do projeto (se houver)
                  className="text-green-600 font-semibold hover:underline w-fit"
                >
                  Saber mais (em breve)
                </a>
              </div>
            </div>

            {/* Card Projeto 2 - Oficinas de Arte */}
            <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-lg overflow-hidden w-full max-w-5xl">
              {/* Imagem */}
              <div className="md:w-1/3">
                <img 
                  // src={imgProjeto2} 
                  src="http://googleusercontent.com/images.google.com/10" // Placeholder
                  alt="Crianças pintando e desenhando" 
                  className="object-cover h-64 w-full md:h-full" 
                />
              </div>
              {/* Conteúdo */}
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-3">
                  <div className="bg-teal-600 p-2 rounded-full mr-3">
                    <Palette className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Oficinas de Arte e Expressão</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Acreditamos na arte como ferramenta de expressão e desenvolvimento da autoestima. Este projeto oferece oficinas de teatro, música (violão e coral) e artes plásticas, abrindo novos horizontes e descobrindo talentos.
                </p>
                <a 
                  href="#" 
                  className="text-green-600 font-semibold hover:underline w-fit"
                >
                  Saber mais (em breve)
                </a>
              </div>
            </div>

            {/* Card Projeto 3 - Apoio Psicossocial */}
            <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-lg overflow-hidden w-full max-w-5xl">
              {/* Imagem */}
              <div className="md:w-1/3">
                <img 
                  // src={imgProjeto3} 
                  src="http://googleusercontent.com/images.google.com/11" // Placeholder
                  alt="Profissional conversando com família" 
                  className="object-cover h-64 w-full md:h-full" 
                />
              </div>
              {/* Conteúdo */}
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-3">
                  <div className="bg-teal-600 p-2 rounded-full mr-3">
                    <HeartHandshake className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Acolher e Cuidar</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Oferecemos apoio psicossocial para as crianças e suas famílias. Contamos com psicólogos e assistentes sociais voluntários que fazem atendimentos individuais e em grupo, fortalecendo vínculos e promovendo a saúde mental.
                </p>
                <a 
                  href="#" 
                  className="text-green-600 font-semibold hover:underline w-fit"
                >
                  Saber mais (em breve)
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* SEÇÃO CTA - APOIE OS PROJETOS */}
      <section id="apoie-projetos-cta" className="py-20 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Apoie Nossas Iniciativas</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
              Nossos projetos só existem graças ao apoio de pessoas como você. Sua doação financia materiais, alimentação e os profissionais envolvidos.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="/doar" // Linkando para a página de Doação
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-lg">Quero Doar Agora</span>
              </a>
              <a 
                href="/contato" // Linkando para a página de Contato (para voluntariado)
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
              >
                <span className="text-lg">Quero ser Voluntário</span>
              </a>
            </div>

        </div>
      </section>
    </>
  );
}