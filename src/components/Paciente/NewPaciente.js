import React from "react";
import Formulario from "./Formulario";
import Menu from "../Menu";

const NewPaciente = () => {
  return (
    <>
      <Menu />
      <div style={{marginTop: "50px"}}>
        <Formulario />
      </div>
    </>
  );
};

export default NewPaciente;
