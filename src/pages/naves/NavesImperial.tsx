import { navesImperiaiss } from '../../data/naves/navesimperial';

export default function NavesImperial() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-6">
      <h1 className="text-5xl text-yellow-400 font-extrabold text-center mb-16 tracking-widest uppercase animate-pulse drop-shadow-[0_0_8px_rgba(255,255,0,0.7)]">
        Naves Imperiais
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {navesImperiaiss.map((nave, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-b from-gray-800/60 to-gray-900/90 backdrop-blur-lg border border-gray-700 rounded-3xl p-6 shadow-2xl transform hover:scale-105 hover:shadow-yellow-500/30 transition duration-300 group"
          >

            <div className="absolute inset-0 rounded-3xl bg-yellow-400 opacity-10 blur-2xl z-0"></div>

            <div className="relative z-10">
              <div className="w-full h-48 overflow-hidden rounded-xl mb-4 border border-yellow-400/10">
                <img
                  src={nave.imagem}
                  alt={nave.nome}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-yellow-300 drop-shadow">
                {nave.nome}
              </h2>
              <p className="text-gray-300 text-sm mb-1">
                <strong>Classe:</strong> {nave.classe}
              </p>
              <p className="text-gray-300 text-sm mb-1">
                <strong>Fabricante:</strong> {nave.fabricante}
              </p>
              <p className="text-gray-300 text-sm mb-1">
                <strong>Comprimento:</strong> {nave.comprimento}
              </p>
              <p className="text-gray-300 text-sm mb-1">
                <strong>Tripulação:</strong> {nave.tripulacao}
              </p>
              <p className="text-gray-400 text-sm mt-2">{nave.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
