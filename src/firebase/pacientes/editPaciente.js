import { db } from '../firebaseConfig';

const editPaciente = ({
  id,
  fechaCreacion,
  nombreYApellido,
  fechaDeNacimiento,
  edad,
  documento,
  sexo,
  pais,
  ciudad,
  telefono,
  correo,
  profesion,
  hijos,
  conQuienVive,
  peso,
  estatura,
  imc,
  patologiaBase,
  otroPatologiaBase,
  intoleranciaOAlergia,
  otroIntoleranciaOAlergia,
  medicamento,
  cualMedicamento,
  suplemento,
  cualSuplemento,
  conductaAlimentaria,
  objetivo,
  molestiaRecurrente,
  otroMolestiaRecurrente,
  horarioRutinaDiaria,
  horasDormir,
  actividadFisica,
  cualDeporte,
  otroActividadFisica,
  frecuenciaAF,
  duracionAF,
  otroDuracionAF,
  horarioAF,
  calidadAlimentacion,
  organizacionPlanificacion,
  alimentoNoConsumible,
  habilidadCocina,
  organizarAlmuerzosCenas,
  suplementoConsiderado,
  desayuno,
  almuerzo,
  merienda,
  cena,
  loPeorAlimentacion,
  loMejorHabitos,
  algunComentario,
  informacion_veridica,
}) => {
  return db.collection('pacientes').doc(id).update({
    fechaCreacion: fechaCreacion,
    nombreYApellido: nombreYApellido,
    fechaDeNacimiento: fechaDeNacimiento,
    edad: edad,
    documento: documento,
    sexo: sexo,
    pais: pais,
    ciudad: ciudad,
    telefono: telefono,
    correo: correo,
    profesion: profesion,
    hijos: hijos,
    conQuienVive: conQuienVive,
    peso: peso,
    estatura: estatura,
    imc: imc,
    patologiaBase: patologiaBase,
    otroPatologiaBase: otroPatologiaBase,
    intoleranciaOAlergia: intoleranciaOAlergia,
    otroIntoleranciaOAlergia: otroIntoleranciaOAlergia,
    medicamento: medicamento,
    cualMedicamento: cualMedicamento,
    suplemento: suplemento,
    cualSuplemento: cualSuplemento,
    conductaAlimentaria: conductaAlimentaria,
    objetivo: objetivo,
    molestiaRecurrente: molestiaRecurrente,
    otroMolestiaRecurrente: otroMolestiaRecurrente,
    horarioRutinaDiaria: horarioRutinaDiaria,
    horasDormir: horasDormir,
    actividadFisica: actividadFisica,
    cualDeporte: cualDeporte,
    otroActividadFisica: otroActividadFisica,
    frecuenciaAF: frecuenciaAF,
    duracionAF: duracionAF,
    otroDuracionAF: otroDuracionAF,
    horarioAF: horarioAF,
    calidadAlimentacion: calidadAlimentacion,
    organizacionPlanificacion: organizacionPlanificacion,
    alimentoNoConsumible: alimentoNoConsumible,
    habilidadCocina: habilidadCocina,
    organizarAlmuerzosCenas: organizarAlmuerzosCenas,
    suplementoConsiderado: suplementoConsiderado,
    desayuno: desayuno,
    almuerzo: almuerzo,
    merienda: merienda,
    cena: cena,
    loPeorAlimentacion: loPeorAlimentacion,
    loMejorHabitos: loMejorHabitos,
    algunComentario: algunComentario,
    informacion_veridica: informacion_veridica,
  });
};

export default editPaciente;
