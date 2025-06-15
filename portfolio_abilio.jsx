import React from 'react';

export default function App() {
  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      <header className="bg-gray-900 text-white py-10 text-center">
        <img
          src="https://i.imgur.com/0jC1exW.jpg"
          alt="Abílio Trinta"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold">Abílio Trinta</h1>
        <p className="text-xl mt-2">Empreendedor | CFO da GoSweet | Fundador do App O Biscatus</p>
      </header>

      <section className="py-10 px-6 md:px-20">
        <h2 className="text-2xl font-semibold mb-4">Sobre</h2>
        <p className="text-lg leading-relaxed">
          Sou um empreendedor angolano, especialista em gestão estratégica, tecnologia e marketing digital. Atuo como CFO da GoSweet Industry, empresa focada na produção de chocolates e gelados artesanais, e também sou fundador do aplicativo O Biscatus, que conecta prestadores de serviços a clientes de forma prática e segura.
          <br /><br />
          Minha trajetória é marcada por decisões difíceis, muita resiliência e vontade de construir algo relevante. Desde cedo entendi que riqueza começa com visão, disciplina e compromisso com a excelência.
          <br /><br />
          Também sou instrutor de Excel e fundador da Wagnet, uma agência de marketing digital que ajuda negócios a crescerem na internet com impacto.
        </p>
      </section>

      <section className="bg-gray-100 py-10 px-6 md:px-20">
        <h2 className="text-2xl font-semibold mb-4">Projetos em Destaque</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-xl font-bold">📱 O Biscatus App</h3>
            <p>App que conecta clientes a prestadores de serviços como canalizadores, eletricistas, professores e enfermeiros, com sistema de pagamento seguro.</p>
          </li>
          <li>
            <h3 className="text-xl font-bold">🍫 GoSweet Industry</h3>
            <p>Fábrica de doces e gelados artesanais com gestão eficiente e controle de estoque integrado.</p>
          </li>
          <li>
            <h3 className="text-xl font-bold">💡 Wagnet</h3>
            <p>Agência digital remota especializada em marketing, automação e presença online.</p>
          </li>
          <li>
            <h3 className="text-xl font-bold">📊 Aulas & E-book de Excel</h3>
            <p>Método direto e visual para dominar o Excel. Do básico ao avançado com vídeos e recursos interativos.</p>
          </li>
        </ul>
      </section>

      <section className="py-10 px-6 md:px-20">
        <h2 className="text-2xl font-semibold mb-4">Contato</h2>
        <ul className="text-lg space-y-2">
          <li>📧 abilotrinta@biscatus.com</li>
          <li>📱 +244 927 351 775</li>
          <li>🌐 <a href="https://gosweet.org" className="text-blue-600 underline">gosweet.org</a></li>
          <li>📸 Instagram: <a href="https://instagram.com/abiliotrinta" className="text-blue-600 underline">@abiliotrinta</a></li>
          <li>💼 LinkedIn: <a href="https://linkedin.com/in/abiliotrinta" className="text-blue-600 underline">linkedin.com/in/abiliotrinta</a></li>
        </ul>
      </section>

      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Abílio Trinta. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
