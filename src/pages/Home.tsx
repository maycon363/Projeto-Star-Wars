import { Link } from "react-router-dom";
import { FaJediOrder, FaGlobe } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-yellow-400 overflow-x-hidden">
      <div className="flex items-center justify-center px-4 py-12 relative">
        <img
          src="/vid/GifTelahome.gif"
          alt="Star Wars GIF"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 bg-black bg-opacity-80 backdrop-blur-sm p-8 sm:p-10 rounded-xl text-center space-y-6 w-full max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-widest drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]">
            Explorador Galáctico
          </h1>
          <p className="text-base sm:text-xl text-gray-300">
            Embarque em uma jornada pelo universo de Star Wars. Conheça os Jedi, descubra planetas e muito mais.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              to="/pages/Jedi"
              className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold hover:bg-yellow-500 transition hover:scale-105 shadow-md flex items-center gap-2"
            >
              <FaJediOrder /> Conhecer os Jedi
            </Link>
            <Link
              to="/planetas"
              className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-2xl font-bold hover:bg-yellow-500 hover:text-black transition hover:scale-105 shadow-md flex items-center gap-2"
            >
              <FaGlobe /> Ver Planetas
            </Link>
          </div>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://assets1.ignimgs.com/2015/11/24/everyjedi1280jpg-c72e67_160w.jpg?width=1280"
            alt="Jedi"
            className="rounded-3xl shadow-lg w-full"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-yellow-300">Jedi</h2>
            <p className="text-gray-300">
              Descubra os guardiões da paz e da justiça na galáxia. Veja suas habilidades, histórias e rivalidades.
            </p>
            <Link
              to="/pages/Jedi"
              className="inline-block mt-2 bg-yellow-400 text-black px-5 py-2 rounded-xl font-bold hover:bg-yellow-500 transition"
            >
              Acessar Jedi
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          <img
            src="https://images.steamusercontent.com/ugc/2351510977210497310/15427147A5B49D7532EA30C3B4A39D704389178D/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
            alt="Planetas"
            className="rounded-3xl shadow-lg w-full"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-yellow-300">Planetas</h2>
            <p className="text-gray-300">
              Explore os planetas mais icônicos de Star Wars. Veja o clima, terreno e os seres que habitam esses mundos.
            </p>
            <Link
              to="/pages/Planetas"
              className="inline-block mt-2 border border-yellow-400 text-yellow-400 px-5 py-2 rounded-xl font-bold hover:bg-yellow-500 hover:text-black transition"
            >
              Acessar Planetas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
