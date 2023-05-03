import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { useHistory } from "react-router-dom";

const useGetPaciente = (id) => {
  const history = useHistory();
  const [paciente, setPaciente] = useState("");

  useEffect(() => {
    db.collection("pacientes")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setPaciente(doc);
        } else {
          history.push("/pacientes");
        }
      });
  }, [id, history]);

  return [paciente];
};

export default useGetPaciente;
