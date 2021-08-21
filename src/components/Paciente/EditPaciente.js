import React from "react";
import Formulario from "./Formulario";
import Menu from "../Menu";
import { useParams } from "react-router-dom";
import useGetPaciente from "../../hooks/useGetPaciente";

const EditPaciente = () => {
  const { id } = useParams();
  const [paciente] = useGetPaciente(id);

  return (
    <>
      <Menu />
      <Formulario paciente={paciente} />
    </>
  );
};

export default EditPaciente;
