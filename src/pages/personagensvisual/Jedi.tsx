import { jedi } from "../../data/personagens/jedi";

export default function Jedi() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-12 px-4 md:px-10">
      <h1 className="text-5xl text-yellow-400 font-extrabold text-center mb-10 tracking-widest uppercase animate-pulse drop-shadow-[0_0_8px_rgba(255,255,0,0.7)]">
        Ordem Jedi
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {jedi.map((j, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-black border border-yellow-400/20 rounded-3xl overflow-hidden shadow-lg shadow-yellow-300/20 ring-1 ring-yellow-500/10 transition-all duration-500 hover:scale-[1.04] group hover:shadow-yellow-400/40 transform hover:translate-y-2"
          >
            
            <div
              className="w-full h-64 overflow-hidden relative"
              style={{
                boxShadow: `inset 0 0 30px ${j.sabreCor}`,
              }}
            >
              <img
                src={j.imagem}
                alt={j.nome}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3 group-hover:filter group-hover:brightness-125"
              />

              <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              </div>
            </div>

           
            <div
              className="absolute top-0 left-0 w-full h-1"
              style={{
                background: `linear-gradient(90deg, transparent, ${j.sabreCor}, transparent)`,
              }}
            />

            <div className="p-6 text-white space-y-3 text-center z-20 relative">
              <h2 className="text-2xl font-bold text-yellow-400 tracking-wider uppercase drop-shadow-md">
                {j.nome}
              </h2>
              <ul className="text-sm text-gray-300 space-y-1 font-mono tracking-wide">
                <li><span className="text-yellow-300 font-semibold">Gênero:</span> {j.genero}</li>
                <li><span className="text-yellow-300 font-semibold">Espécie:</span> {j.especie}</li>
                <li><span className="text-yellow-300 font-semibold">Planeta:</span> {j.planetaNatal}</li>
                <li><span className="text-yellow-300 font-semibold">Altura:</span> {j.altura} m</li>
                <li><span className="text-yellow-300 font-semibold">Peso:</span> {j.peso} kg</li>
                <li><span className="text-yellow-300 font-semibold">Afiliação:</span> {j.afiliacao}</li>
              </ul>
            </div>

            <div
              className="absolute inset-0 blur-3xl opacity-20 z-10"
              style={{
                background: `radial-gradient(circle, ${j.sabreCor}, transparent 70%)`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
