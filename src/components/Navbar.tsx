import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navesDropdownOpen, setNavesDropdownOpen] = useState(false);

  return (
    <nav className="bg-yellow-400 text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo e título */}
        <div className="flex items-center space-x-3">
          <img
            src="/img/logo.ass.png"
            className="h-16 md:h-16"
            alt="Logo Star Wars"
          />
          <span className="text-xl md:text-2xl font-bold tracking-widest">
            Projeto Star Wars
          </span>
        </div>

        {/* Botão mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6 font-semibold text-lg relative">
          <Link
            to="/"
            className="hover:bg-black hover:text-white transition duration-300 px-2 py-1 rounded-md"
          >
            Início
          </Link>

          {/* Dropdown Personagens */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:bg-black hover:text-white transition duration-300 px-2 py-1 rounded-md"
            >
              Personagens
            </button>

            {dropdownOpen && (
              <div className="absolute bg-white text-black mt-2 rounded-md shadow-md w-48 z-50">
                <Link
                  to="/pages/Jedi"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Jedi
                </Link>
                <Link
                  to="/personagens/sith"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Sith
                </Link>
              </div>
            )}
          </div>

          {/* Dropdown Naves */}
          <div className="relative">
            <button
              onClick={() => setNavesDropdownOpen(!navesDropdownOpen)}
              className="hover:bg-black hover:text-white transition duration-300 px-2 py-1 rounded-md"
            >
              Naves
            </button>

            {navesDropdownOpen && (
              <div className="absolute bg-white text-black mt-2 rounded-md shadow-md w-64 z-50">
                <Link to="/naves/republica-galactica" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setNavesDropdownOpen(false)}>República Galáctica</Link>
                <Link to="/naves/separatistas" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setNavesDropdownOpen(false)}>Separatistas</Link>
                <Link to="/naves/imperio-galactico" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setNavesDropdownOpen(false)}>Império Galáctico</Link>
                <Link to="/naves/alianca-rebelde" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setNavesDropdownOpen(false)}>Aliança Rebelde</Link>
                <Link to="/naves/nova-republica" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setNavesDropdownOpen(false)}>Nova República</Link>
                <Link to="/naves/remanescentes-imperiais" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setNavesDropdownOpen(false)}>Remanescentes Imperiais</Link>
                <Link to="/naves/primeira-ordem" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setNavesDropdownOpen(false)}>Primeira Ordem</Link>
                <Link to="/naves/resistencia" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setNavesDropdownOpen(false)}>Resistência</Link>
                <Link to="/naves/ordem-final" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setNavesDropdownOpen(false)}>Ordem Final</Link>
              </div>
            )}
          </div>

          <Link
            to="/pages/Planetas"
            className="hover:bg-black hover:text-white transition duration-300 px-2 py-1 rounded-md"
          >
            Planetas
          </Link>
          <Link
            to="/facoes"
            className="hover:bg-black hover:text-white transition duration-300 px-2 py-1 rounded-md"
          >
            facções 
          </Link>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4 text-lg font-semibold">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:bg-yellow-500 hover:text-black transition duration-300 px-2 py-1 rounded-md"
          >
            Início
          </Link>

          {/* Personagens mobile */}
          <div className="text-center">
            <span className="block font-semibold">Personagens</span>
            <div className="flex flex-col space-y-1 mt-1">
              <Link to="/pages/Jedi" onClick={() => setIsOpen(false)} className="text-sm hover:bg-yellow-500 px-2 py-1 rounded-md">Jedi</Link>
              <Link to="/personagens/sith" onClick={() => setIsOpen(false)} className="text-sm hover:bg-yellow-500 px-2 py-1 rounded-md">Sith</Link>
              <Link to="/personagens/imperiais" onClick={() => setIsOpen(false)} className="text-sm hover:bg-yellow-500 px-2 py-1 rounded-md">Soldados Imperiais</Link>
            </div>
          </div>

          {/* Naves mobile */}
          <div className="text-center">
            <span className="block font-semibold">Naves</span>
            <div className="flex flex-col space-y-1 mt-1">
              <Link to="/naves/republica-galactica" onClick={() => setIsOpen(false)} className="text-sm hover:bg-yellow-500 px-2 py-1 rounded-md">República Galáctica</Link>
              <Link to="/naves/separatistas" onClick={() => setIsOpen(false)} className="text-sm hover:bg-yellow-500 px-2 py-1 rounded-md">Separatistas</Link>
              <Link to="/naves/imperio-galactico" onClick={() => setIsOpen(false)} className="text-sm hover:bg-yellow-500 px-2 py-1 rounded-md">Império Galáctico</Link>
              <Link to="/naves/alianca-rebelde" onClick={() => setIsOpen(false)} className="text-sm hover:bg-yellow-500 px-2 py-1 rounded-md">Aliança Rebelde</Link>
              <Link to="/naves/nova-republica" onClick={() => setIsOpen(false)} className="text-sm hover:bg-yellow-500 px-2 py-1 rounded-md">Nova República</Link>
              <Link to="/naves/remanescentes-imperiais" onClick={() => setIsOpen(false)} className="text-sm hover:bg-yellow-500 px-2 py-1 rounded-md">Remanescentes Imperiais</Link>
              <Link to="/naves/primeira-ordem" onClick={() => setIsOpen(false)} className="text-sm hover:bg-yellow-500 px-2 py-1 rounded-md">Primeira Ordem</Link>
              <Link to="/naves/resistencia" onClick={() => setIsOpen(false)} className="text-sm hover:bg-yellow-500 px-2 py-1 rounded-md">Resistência</Link>
              <Link to="/naves/ordem-final" onClick={() => setIsOpen(false)} className="text-sm hover:bg-yellow-500 px-2 py-1 rounded-md">Ordem Final</Link>
            </div>
          </div>

          <Link
            to="/pages/Planetas"
            onClick={() => setIsOpen(false)}
            className="hover:bg-yellow-500 hover:text-black transition duration-300 px-2 py-1 rounded-md"
          >
            Planetas
          </Link>
          <Link
            to="/facoes"
            onClick={() => setIsOpen(false)}
            className="hover:bg-yellow-500 hover:text-black transition duration-300 px-2 py-1 rounded-md"
          >
            Fações
          </Link>
        </div>
      )}
    </nav>
  );
}
