import React from "react";
import { Helmet } from "react-helmet";
import Menu from "./components/Menu";
import ContenedorIndex from "./elements/ContenedorIndex";
import Boton from "./elements/Boton";

const App = () => {
  return (
    <>
      <Menu />

      <div>
        <Helmet>
          <title>Anamnesis pacientes nuevos</title>
          <link rel="icon" href="/favicon.ico" />
        </Helmet>

        <ContenedorIndex>
          <h1 className="font-bold" style={{ marginLeft: '20px' }}>
            Bienvenidos/as, soy su nutricionista{' '}
            <span style={{ color: '#D8D2EB' }}>Mariela Ojeda</span>
          </h1>

          <p
            className="mt-3"
            style={{ marginLeft: '5px', marginRight: '10px' }}
          >
            Favor completar el siguiente formulario antes de su consulta
          </p>
          <Boton to="/form" primario="true">
            Siguiente
          </Boton>
        </ContenedorIndex>
      </div>
    </>
  );
};

export default App;
