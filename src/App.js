import './App.css';

import NavBar from "./Components/NavBar/NavBar.jsx";
import SobreNos from "./Components/SobreNos/SobreNos.jsx";
import Pedidos from "./Components/Pedidos/Pedidos.jsx";
import Produtos from "./Components/Produtos/Produtos.jsx";
import Artigos from "./Components/Artigos/Artigos.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
        <div className="conteiner">

          <NavBar />

          <section className="section-about">
            <SobreNos />
          </section>

          <section className="section-pedidos">
            <Pedidos />
          </section>

          <section className="section-produtos">
              <Produtos />
          </section>

          <section className="section-artigos">
            <Artigos />
          </section>

          <Footer />
        </div>
  );
}

export default App;