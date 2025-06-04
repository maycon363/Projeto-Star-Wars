import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LinearProgress from "@mui/material/LinearProgress";
import { sith } from "../../data/personagens/sith";

export default function Sith() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black p-8 text-white">
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 6,
          backgroundColor: "#1a1a1a",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#dc2626", 
          },
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,
        }}
      />

      <h1 className="text-5xl font-extrabold text-center mb-10 text-red-600 drop-shadow-[0_0_10px_red]">
        Sith
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {sith.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-zinc-950 bg-opacity-80 rounded-2xl p-4 shadow-lg border border-red-700 group hover:shadow-red-600 hover:scale-105 transition-all duration-300"
          >
            <div className="relative w-full h-64 overflow-hidden rounded-xl mb-4">
              <img
                src={s.imagem}
                alt={s.nome}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 group-hover:filter group-hover:brightness-125"
              />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 shadow-[0_0_15px_red] animate-pulse" />
            </div>
            <h2 className="text-2xl font-semibold text-red-500">{s.nome}</h2>
            <p><span className="text-red-400">Gênero:</span> {s.genero}</p>
            <p><span className="text-red-400">Espécie:</span> {s.especie}</p>
            <p><span className="text-red-400">Planeta Natal:</span> {s.planetaNatal}</p>
            <p><span className="text-red-400">Altura:</span> {s.altura}m</p>
            <p><span className="text-red-400">Peso:</span> {s.peso}kg</p>
            <p><span className="text-red-400">Afiliação:</span> {s.afiliacao}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
