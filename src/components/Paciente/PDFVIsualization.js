import React from "react";
import { Header, Titulo } from "../../elements/Header";
import { Helmet } from "react-helmet";
import Menu from "../Menu";
import Contenedor from "./../../elements/ContenedorPdf";
import PacientePDF from "./PacientePDF";
import { useParams } from "react-router-dom";
import useGetPaciente from "./../../hooks/useGetPaciente";

const PDFVisualization = () => {
  const { id } = useParams();
  const [paciente] = useGetPaciente(id);

  return (
    <>
      <Menu />
      <Helmet>
        <title>Reporte Paciente PDF</title>
      </Helmet>
      <Header>
        <Titulo>Reporte Paciente PDF</Titulo>
      </Header>
      <Contenedor>
        <PacientePDF paciente={paciente} />
      </Contenedor>
    </>
  );
};

export default PDFVisualization;
