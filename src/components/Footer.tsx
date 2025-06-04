import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="bg-black mb-0">
        <footer className="bg-gray-900 text-yellow-400 py-10 mt-0">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Explorador Galáctico</h2>
                    <p className="text-gray-400">
                        Uma jornada épica pelo universo de Star Wars. Conheça heróis, vilões e planetas que moldaram a galáxia.
                    </p>
                </div>

                <div className="space-y-2">
                <h3 className="text-xl font-semibold">Navegação</h3>
                    <ul className="space-y-1">
                        <li><Link to="/" className="hover:underline">Início</Link></li>
                        <li><Link to="/pages/Jedi" className="hover:underline">Jedi</Link></li>
                        <li><Link to="/planetas" className="hover:underline">Planetas</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                <h3 className="text-xl font-semibold">Contatos</h3>
                <p className="text-gray-400">mayconborges2025@gmail.com</p>
                    <div className="flex justify-center md:justify-start gap-4 text-xl">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} Maycon Borges. Todos os direitos reservados.
            </div>
        </footer>
    </section>
  );
}
