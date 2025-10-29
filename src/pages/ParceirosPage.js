import { 
  Handshake,  // Ícone para Parceria
  ArrowRight  // Ícone para o botão CTA
} from 'lucide-react';

export default function ParceirosPage() {
  return (
    <>
    <br></br>
      {/* O <br></br> que você usou na outra página para pular o navbar */}
      <br></br>

      {/* SEÇÃO HERO PARCEIROS */}
      <section id="parceiros-hero" className="py-20 bg-teal-500 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          
          {/* Usando o mesmo estilo de ícone de borda laranja */}
          <div className="flex justify-center mb-6">
            <div className="border-2 border-orange-400 rounded-full p-5">
              <Handshake className="w-12 h-12 text-white" />
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-6">Quem Caminha Conosco</h2>
          
          <p className="text-lg text-teal-100 max-w-3xl mx-auto mb-6">
            Acreditamos que a união de forças é o principal motor para a transformação social.
          </p>
          <p className="text-lg text-teal-50 font-semibold max-w-3xl mx-auto">
            Conheça as empresas e organizações que investem em nosso impacto e ajudam a reescrever o futuro de centenas de crianças e adolescentes.
          </p>
        </div>
      </section>

      {/* SEÇÃO GALERIA DE PARCEIROS (Logos) */}
      <section id="parceiros-grid" className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Título */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Parceiros</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empresas que acreditam e apoiam a nossa causa.
            </p>
          </div>

          {/* Grid de Logos Falsos (substitua os <span> por <img>) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 items-center justify-items-center">
            
            {/* Parceiro Falso 1 */}
            <div className="text-center opacity-70 hover:opacity-100 transition-opacity" title="Parceiro TechCorp">
              {/* <img src="/logos/techcorp.png" alt="TechCorp" className="h-12" /> */}
              <span className="text-2xl font-bold text-gray-500">TechCorp</span>
            </div>

            {/* Parceiro Falso 2 */}
            <div className="text-center opacity-70 hover:opacity-100 transition-opacity" title="Parceiro InovaSoluções">
              {/* <img src="/logos/inovasolucoes.png" alt="InovaSoluções" className="h-12" /> */}
              <span className="text-2xl font-bold text-gray-500">InovaSoluções</span>
            </div>

            {/* Parceiro Falso 3 */}
            <div className="text-center opacity-70 hover:opacity-100 transition-opacity" title="Parceiro EcoVerde">
              {/* <img src="/logos/ecoverde.png" alt="EcoVerde" className="h-12" /> */}
              <span className="text-2xl font-bold text-gray-500">EcoVerde</span>
            </div>

            {/* Parceiro Falso 4 */}
            <div className="text-center opacity-70 hover:opacity-100 transition-opacity" title="Parceiro Grupo Valor">
              {/* <img src="/logos/grupovalor.png" alt="Grupo Valor" className="h-12" /> */}
              <span className="text-2xl font-bold text-gray-500">Grupo Valor</span>
            </div>
            
            {/* Parceiro Falso 5 */}
            <div className="text-center opacity-70 hover:opacity-100 transition-opacity" title="Parceiro Sinergia">
              {/* <img src="/logos/sinergia.png" alt="Sinergia" className="h-12" /> */}
              <span className="text-2xl font-bold text-gray-500">Sinergia</span>
            </div>

            {/* Parceiro Falso 6 */}
            <div className="text-center opacity-70 hover:opacity-100 transition-opacity" title="Parceiro Raízes Sul">
              {/* <img src="/logos/raizessul.png" alt="Raízes Sul" className="h-12" /> */}
              <span className="text-2xl font-bold text-gray-500">Raízes Sul</span>
            </div>

            {/* Parceiro Falso 7 */}
            <div className="text-center opacity-70 hover:opacity-100 transition-opacity" title="Parceiro Aliança">
              {/* <img src="/logos/alianca.png" alt="Aliança" className="h-12" /> */}
              <span className="text-2xl font-bold text-gray-500">Aliança</span>
            </div>

            {/* Parceiro Falso 8 */}
            <div className="text-center opacity-70 hover:opacity-100 transition-opacity" title="Parceiro Futuro Digital">
              {/* <img src="/logos/futurodigital.png" alt="Futuro Digital" className="h-12" /> */}
              <span className="text-2xl font-bold text-gray-500">Futuro Digital</span>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO CTA - SEJA UM PARCEIRO */}
      <section id="seja-parceiro-cta" className="py-20 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Faça Parte Dessa Rede de Transformação</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
              Quer ver a sua marca aqui e associá-la a um projeto de impacto social real? 
              Entre em contato conosco para descobrir as formas de parceria e patrocinar nossos projetos.
            </p>
            
            <a 
              href="/contato" // Linkando para a página de Contato
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-lg">Quero Ser um Parceiro</span>
              <ArrowRight className="w-5 h-5" />
            </a>

        </div>
      </section>
    </>
  );
}