import { navesSeparatistas } from "../../data/naves/separatista";

export default function NavesSeparatista() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-6">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10">
            Naves Separatistas
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {navesSeparatistas.map((nave, index) => (
            <div
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-md border border-yellow-500 hover:scale-105 transition-transform duration-300"
            >
                <img
                src={nave.imagem}
                alt={nave.nome}
                className="w-full h-56 object-cover"
                />
                <div className="p-5 space-y-2">
                <h2 className="text-2xl text-yellow-400 font-semibold">{nave.nome}</h2>
                <p><span className="font-bold">Classe:</span> {nave.classe}</p>
                <p><span className="font-bold">Fabricante:</span> {nave.fabricante}</p>
                <p><span className="font-bold">Comprimento:</span> {nave.comprimento}</p>
                <p><span className="font-bold">Tripulação:</span> {nave.tripulacao}</p>
                <p><span className="font-bold">Capacidade:</span> {nave.capacidade}</p>
                <p><span className="font-bold">Armamento:</span></p>
                <ul className="list-disc list-inside pl-2 text-sm text-gray-300">
                    {nave.armamento.map((arma, i) => (
                    <li key={i}>{arma}</li>
                    ))}
                </ul>
                <p className="text-gray-400 text-sm">{nave.descricao}</p>
                </div>
            </div>
            ))}
        </div>
    </section>
  );
}