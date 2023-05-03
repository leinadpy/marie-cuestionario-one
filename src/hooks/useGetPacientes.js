import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";

const useGetPacientes = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    return db.collection("pacientes").onSnapshot((snapshot) => {
      setPacientes(
        snapshot.docs.map((paciente) => {
          return { ...paciente.data(), id: paciente.id };
        })
      );
    });
  }, []);

  return [pacientes];
};

export default useGetPacientes;
