import React from 'react';

export default function ContentPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans">
      
      {/* 1. Imagem de Fundo Fixa */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="images/eco-scan.png" 
          alt="Eco Scan Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>
      </div>

      {/* 2. Conteúdo Principal */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col gap-10">
        
        {/* Seção de Texto */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-emerald-900">How it Works</h2>
          <p className="text-lg text-gray-600">
            Our Waste Type Detector uses advanced machine learning algorithms to identify and classify different types of waste materials efficiently.
          </p>
        </section>

        {/* Seção Fluxograma da Equipe */}
        <section className="w-full flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-8 text-emerald-900 uppercase tracking-wide">Meet the Team</h2>
          
          <div className="flex flex-col items-center w-full">
            
            {/* NÍVEL 1: SPONSOR */}
            <div className="flex flex-col items-center">
              <div className="border-2 border-yellow-500 bg-yellow-50 p-4 rounded-xl shadow-lg w-72 text-center transform transition hover:-translate-y-1">
                <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-1 block">Project Sponsor</span>
                <h3 className="font-bold text-gray-900 text-lg">Dr. Renato Aragão (Didi)</h3>
              </div>
              {/* Linha Vertical */}
              <div className="h-8 w-0.5 bg-gray-300"></div>
            </div>

            {/* NÍVEL 2: PROJECT MANAGER */}
            <div className="flex flex-col items-center">
              <div className="border border-gray-200 bg-white p-3 rounded-lg shadow-md w-64 text-center z-10">
                <h3 className="font-bold text-emerald-700">Aarão Rocha</h3>
                <p className="text-sm text-gray-500">Project Manager</p>
              </div>
              {/* Linha Vertical Conectora para o grupo abaixo */}
              <div className="h-8 w-0.5 bg-gray-300"></div>
            </div>

            {/* NÍVEL 3: TIME OPERACIONAL (PO, BA, DEV, QA) */}
            {/* Container da linha horizontal (Branch) */}
            <div className="relative w-full max-w-4xl">
              
              {/* Linha Horizontal Grande (Conecta o primeiro ao último item) */}
              <div className="absolute top-0 left-4 right-4 h-6 border-t-2 border-l-2 border-r-2 border-gray-300 rounded-t-xl hidden md:block"></div>

              {/* Grid dos membros */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
                
                {/* 1. Product Owner */}
                <div className="flex flex-col items-center">
                  <div className="h-6 w-0.5 bg-gray-300 -mt-6 mb-0 hidden md:block"></div> {/* Conector vertical */}
                  <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md w-full text-center transition-all border-t-4 border-t-blue-500">
                    <h4 className="font-bold text-gray-800">Arthur Duarte</h4>
                    <p className="text-xs font-semibold text-blue-500 uppercase mt-1">Product Owner</p>
                  </div>
                </div>

                {/* 2. Business Analyst */}
                <div className="flex flex-col items-center">
                  <div className="h-6 w-0.5 bg-gray-300 -mt-6 mb-0 hidden md:block"></div>
                  <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md w-full text-center transition-all border-t-4 border-t-purple-500">
                    <h4 className="font-bold text-gray-800">Victor Ferraz</h4>
                    <p className="text-xs font-semibold text-purple-500 uppercase mt-1">Business Analyst</p>
                  </div>
                </div>

                {/* 3. AI Engineer */}
                <div className="flex flex-col items-center">
                  <div className="h-6 w-0.5 bg-gray-300 -mt-6 mb-0 hidden md:block"></div>
                  <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md w-full text-center transition-all border-t-4 border-t-emerald-500">
                    <h4 className="font-bold text-gray-800">Adelson Teodoro</h4>
                    <p className="text-xs font-semibold text-emerald-500 uppercase mt-1">AI Dev/AI Engineer</p>
                  </div>
                </div>

                {/* 4. QA */}
                <div className="flex flex-col items-center">
                  <div className="h-6 w-0.5 bg-gray-300 -mt-6 mb-0 hidden md:block"></div>
                  <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md w-full text-center transition-all border-t-4 border-t-red-500">
                    <h4 className="font-bold text-gray-800">Sávio Vitor</h4>
                    <p className="text-xs font-semibold text-red-500 uppercase mt-1">Quality Assurance</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}