import { db } from "./../firebaseConfig";

const deletePaciente = (id) => {
  db.collection("pacientes").doc(id).delete();
};

export default deletePaciente;
