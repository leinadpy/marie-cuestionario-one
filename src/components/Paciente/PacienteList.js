import React, { useState, useEffect } from "react";
import { Header, Titulo, ContenedorHeader } from "./../../elements/Header";
import { Helmet } from "react-helmet";
import useGetPacientes from "./../../hooks/useGetPacientes";
import deletePaciente from "./../../firebase/pacientes/deletePaciente";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import ContenedorTabla from "./../../elements/ContenedorTabla";
import Menu from "./../Menu";
import { ReactComponent as IconoEditar } from "./../../images/editar.svg";
import { ReactComponent as IconoBorrar } from "./../../images/borrar.svg";
import { ReactComponent as IconoPDF } from "./../../images/pdf.svg";
import { MDBDataTable } from "mdbreact";
import Boton from "./../../elements/Boton";
import Buton from "./../../elements/Buton";
import { ContenedorBoton } from "../../elements/ElementosDeFormulario";

const PacienteList = () => {
  const [pacientes, setPacientes] = useState("");
  const [cargando, setCargando] = useState(true);

  const [dataPacientes] = useGetPacientes();

  useEffect(() => {
    var datosFormateados = [];
    var datoFormateado = {};
    const formatData = (datos) => {
      datos.forEach((dato) => {
        datoFormateado = {
          description: dato.description,
          nombreYApellido: dato.nombreYApellido,
          edad: dato.edad,
          telefono: dato.telefono,
          abm: (
            <ContenedorBoton>
              <Boton to={`/pacientes/edit/${dato.id}`} small="true">
                <IconoEditar />
              </Boton>
              <Buton onClick={() => deletePaciente(dato.id)} small="true">
                <IconoBorrar />
              </Buton>
              <Boton to={`/pacientes/pdf/${dato.id}`} small="true">
                <IconoPDF />
              </Boton>
            </ContenedorBoton>
          ),
        };
        datosFormateados.push(datoFormateado);
      });
    };
    formatData(dataPacientes);
    setPacientes(datosFormateados);
    setCargando(false);
  }, [dataPacientes]);

  const data = {
    columns: [
      {
        label: "Nombre y Apellido",
        field: "nombreYApellido",
        sort: "asc",
        width: 150,
      },
      {
        label: "Edad",
        field: "edad",
        sort: "asc",
        width: 100,
      },
      {
        label: "Teléfono",
        field: "telefono",
        sort: "asc",
        width: 100,
      },
      {
        label: "ABM",
        field: "abm",
        sort: "asc",
        width: 100,
      },
    ],
    rows: pacientes,
  };

  return (
    <>
      <Helmet>
        <title>Lista de pacientes</title>
      </Helmet>
      <Menu />
      <Header>
        <ContenedorHeader>
          <Titulo>Lista de pacientes</Titulo>
        </ContenedorHeader>
      </Header>

      {!cargando ? (
        pacientes.length !== 0 ? (
          <ContenedorTabla>
            <MDBDataTable striped bordered small data={data} />
          </ContenedorTabla>
        ) : (
          <h3>No hay pacientes para mostrar</h3>
        )
      ) : (
        <div
          className="spinner-grow text-primary w-50 text-center mx-auto p-3 mt-2 h-100"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </>
  );
};
export default PacienteList;
