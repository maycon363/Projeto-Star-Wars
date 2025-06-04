import { resistencia } from "../../data/naves/resistencia";

export default function NavesResistencia() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-orange-500">
        Naves da Resistência
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {resistencia.map((nave, index) => (
          <div
            key={index}
            className="bg-orange-950 bg-opacity-30 rounded-2xl p-4 shadow-lg hover:scale-105 transition-transform border border-orange-600"
          >
            <h2 className="text-2xl font-semibold text-orange-400 mb-2">
              {nave.nome}
            </h2>
            <img
                src={nave.imagem}
                alt={nave.nome}
                className="rounded-xl object-cover mx-auto mb-4 w-full h-60"
            />
            <p><strong>Classe:</strong> {nave.classe}</p>
            <p><strong>Fabricante:</strong> {nave.fabricante}</p>
            <p><strong>Comprimento:</strong> {nave.comprimento}</p>
            <p><strong>Tripulação:</strong> {nave.tripulacao}</p>
            <p><strong>Capacidade:</strong> {nave.capacidade}</p>
            <p className="mt-2"><strong>Descrição:</strong> {nave.descricao}</p>
            <div className="mt-2">
              <strong>Armamento:</strong>
              <ul className="list-disc list-inside">
                {nave.armamento.map((arma, i) => (
                  <li key={i}>{arma}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}