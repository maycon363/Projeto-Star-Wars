import { navesRebeldes } from "../../data/naves/rebelde";

export default function NavesRebelde() {
  return (
    <section className="bg-black min-h-screen text-white py-10 px-4">
      <h1 className="text-4xl font-bold text-yellow-400 text-center mb-10">
        Naves da Aliança Rebelde
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {navesRebeldes.map((nave, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-yellow-500"
          >
            <img
              src={nave.imagem}
              alt={nave.nome}
              className="w-full h-64 object-cover"
            />

            <div className="p-6 space-y-2">
              <h2 className="text-2xl font-bold text-yellow-400">{nave.nome}</h2>
              <p><span className="font-semibold text-yellow-300">Classe:</span> {nave.classe}</p>
              <p><span className="font-semibold text-yellow-300">Fabricante:</span> {nave.fabricante}</p>
              <p><span className="font-semibold text-yellow-300">Comprimento:</span> {nave.comprimento}</p>
              <p><span className="font-semibold text-yellow-300">Tripulação:</span> {nave.tripulacao}</p>
              <p><span className="font-semibold text-yellow-300">Capacidade:</span> {nave.capacidade}</p>
              <p className="text-sm text-gray-300">{nave.descricao}</p>

              <div>
                <p className="font-semibold text-yellow-300">Armamento:</p>
                <ul className="list-disc list-inside text-sm text-gray-300">
                  {nave.armamento.map((arma, i) => (
                    <li key={i}>{arma}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
