import { novaRepublica } from "../../data/naves/novarepublica";

export default function NovaRepublica() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-12 px-4 md:px-10">
      <h1 className="text-5xl text-blue-300 font-extrabold text-center mb-16 tracking-widest uppercase animate-pulse drop-shadow-[0_0_8px_rgba(0,191,255,0.7)]">
        Nova República
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {novaRepublica.map((nave, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-black border border-blue-400/20 rounded-3xl overflow-hidden shadow-lg shadow-blue-300/20 ring-1 ring-blue-500/10 transition-all duration-500 hover:scale-[1.04] group hover:shadow-blue-400/40 transform hover:translate-y-2"
          >
            <div
              className="w-full h-64 overflow-hidden relative"
              style={{
                boxShadow: `inset 0 0 30px rgba(0,191,255,0.3)`,
              }}
            >
              <img
                src={nave.imagem}
                alt={nave.nome}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3 group-hover:filter group-hover:brightness-125"
              />

              <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
              </div>
            </div>

            <div className="p-6 text-white space-y-3 text-center z-20 relative">
              <h2 className="text-2xl font-bold text-blue-300 tracking-wider uppercase drop-shadow-md">
                {nave.nome}
              </h2>
              <ul className="text-sm text-gray-300 space-y-1 font-mono tracking-wide">
                <li><span className="text-blue-300 font-semibold">Classe:</span> {nave.classe}</li>
                <li><span className="text-blue-300 font-semibold">Fabricante:</span> {nave.fabricante}</li>
                <li><span className="text-blue-300 font-semibold">Comprimento:</span> {nave.comprimento}</li>
                <li><span className="text-blue-300 font-semibold">Armamento:</span> {nave.armamento.join(", ")}</li>
                <li><span className="text-blue-300 font-semibold">Tripulação:</span> {nave.tripulacao}</li>
                <li><span className="text-blue-300 font-semibold">Capacidade:</span> {nave.capacidade}</li>
                <li><span className="text-blue-300 font-semibold">Descrição:</span> {nave.descricao}</li>
              </ul>
            </div>

            <div
              className="absolute inset-0 blur-3xl opacity-20 z-10"
              style={{
                background: `radial-gradient(circle, rgba(0,191,255,0.4), transparent 70%)`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
