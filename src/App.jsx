import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ODS12 from "./components/ODS12.jsx";
import Beneficios from "./components/Beneficios.jsx";
import Residuos from "./components/Residuos.jsx";
import ComoAjudar from "./components/ComoAjudar.jsx";
import Consulta from "./components/Consulta.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ODS12 />
        <Beneficios />
        <Residuos />
        <ComoAjudar />
        <Consulta />
      </main>

      <Footer />
    </>
  );
}

export default App;