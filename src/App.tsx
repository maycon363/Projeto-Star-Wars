import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Jedi from './pages/personagensvisual/Jedi.tsx';
import Planetas from './pages/Planetas';
import Facoes from "./pages/facoes.tsx";
import ScrollToTopButton from './components/ScrollToTopButton.tsx';
import Footer from "./components/Footer.tsx";
import NavesImperial from './pages/naves/NavesImperial.tsx';
import NavesRepublica from './pages/naves/NavesRepublica.tsx';
import RemantImperial from './pages/naves/RemantImperial.tsx';
import NavesRebelde from './pages/naves/NavesRebelde.tsx';
import NavesSeparatista from './pages/naves/NavesSeparatista.tsx';
import NovaRepublica from './pages/naves/NovaRepublica.tsx';
import NavesResistencia from './pages/naves/Resistencia.tsx';
import OrdemFinal from './pages/naves/OrdemFinal.tsx';
import PrimeiraOrdem from './pages/naves/PrimeiraOrdem.tsx';
import Sith from './pages/personagensvisual/Sith.tsx';


function App() {
  return (
    <>
      <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/pages/Jedi" element={<Jedi />} />
          <Route path="/personagens/sith" element={<Sith />} />
          <Route path="/naves/imperio-galactico" element={<NavesImperial />} />
          <Route path="/pages/Planetas" element={<Planetas />} />      
          <Route path="/facoes" element={<Facoes />} />
          <Route path="/naves/republica-galactica" element={<NavesRepublica/>} />
          <Route path="/naves/remanescentes-imperiais" element={< RemantImperial/>} />
          <Route path="/naves/alianca-rebelde" element={< NavesRebelde/>} />
          <Route path="/naves/separatistas" element={< NavesSeparatista/>} />
          <Route path="/naves/nova-republica" element={< NovaRepublica/>} />
          <Route path="/naves/resistencia" element={< NavesResistencia/>} />
          <Route path="/naves/ordem-final" element={< OrdemFinal/>} />
          <Route path="/naves/primeira-ordem" element={< PrimeiraOrdem/>} />
        </Routes>
        <ScrollToTopButton />
      <Footer/>
    </>
  );
}

export default App;
