import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WebFont from "webfontloader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import NewPaciente from "./components/Paciente/NewPaciente";
import EditPaciente from "./components/Paciente/EditPaciente";
import PacienteList from "./components/Paciente/PacienteList";
import Contenedor from "./elements/Contenedor";
import InicioSesion from "./components/InicioSesion";
import RutaPrivada from "./components/RutaPrivada";

import "bootstrap/dist/css/bootstrap.min.css";
import PDFVisualization from "./components/Paciente/PDFVIsualization";

WebFont.load({
  google: {
    // Work+Sans:wght@400;500
    families: ["Work Sans: 400,500, 700", "sans-serif"],
  },
});

const Index = () => {
  return (
    <>
      <AuthProvider>
        <Contenedor>
          <BrowserRouter>
            <Switch>
              <Route path="/iniciar-sesion" component={InicioSesion} />
              <Route path="/form" component={NewPaciente} />
              <RutaPrivada path="/pacientes/edit/:id">
                <EditPaciente />
              </RutaPrivada>
              <RutaPrivada path="/pacientes/pdf/:id">
                <PDFVisualization />
              </RutaPrivada>
              <RutaPrivada path="/pacientes">
                <PacienteList />
              </RutaPrivada>
              <Route path="/" component={App} />
            </Switch>
          </BrowserRouter>
        </Contenedor>
      </AuthProvider>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
