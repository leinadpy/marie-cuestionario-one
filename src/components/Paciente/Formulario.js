import { useEffect, useState } from "react";
import Alerta from "../../elements/Alerta";
import addPaciente from "../../firebase/pacientes/addPaciente";
import editPaciente from "../../firebase/pacientes/editPaciente";
import {
  FormularioDiv,
  InputChico,
  ContenedorInput,
  TextArea,
  InputRadio,
  ContenedorInputRadio,
} from "../../elements/ElementosDeFormulario";
import { useHistory } from "react-router-dom";
import Buton from "../../elements/Buton";

const Formulario = ({ paciente }) => {
  const [form, setForm] = useState({
    fechaCreacion: "",
    nombreYApellido: "",
    fechaDeNacimiento: "",
    edad: "",
    documento: "",
    sexo: "",
    pais: "",
    ciudad: "",
    telefono: "",
    correo: "",
    profesion: "",
    hijos: "",
    conQuienVive: "",
    peso: "",
    estatura: "",
    imc: "",
    patologiaBase: "",
    otroPatologiaBase: "",
    intoleranciaOAlergia: "",
    otroIntoleranciaOAlergia: "",
    medicamento: "",
    cualMedicamento: "",
    suplemento: "",
    cualSuplemento: "",
    conductaAlimentaria: "",
    objetivo: "",
    molestiaRecurrente: "",
    otroMolestiaRecurrente: "",
    horarioRutinaDiaria: "",
    horasDormir: "",
    actividadFisica: "",
    otroActividadFisica: "",
    frecuenciaAF: "",
    duracionAF: "",
    otroDuracionAF: "",
    horarioAF: "",
    calidadAlimentacion: "",
    organizacionPlanificacion: "",
    alimentoNoConsumible: "",
    habilidadCocina: "",
    organizarAlmuerzosCenas: "",
    suplementoConsiderado: "",
    desayuno: "",
    almuerzo: "",
    merienda: "",
    cena: "",
    loPeorAlimentacion: "",
    loMejorHabitos: "",
    algunComentario: "",
  });
  const [alerta, setAlerta] = useState({});
  const [estadoAlerta, setEstadoAlerta] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (paciente) {
      setForm({
        fechaCreacion: paciente.fechaCreacion ? paciente.fechaCreacion : "",
        nombreYApellido: paciente.data().nombreYApellido,
        fechaDeNacimiento: paciente.data().fechaDeNacimiento,
        edad: paciente.data().edad,
        documento: paciente.data().documento,
        sexo: paciente.data().sexo,
        pais: paciente.data().pais,
        ciudad: paciente.data().ciudad,
        telefono: paciente.data().telefono,
        correo: paciente.data().correo,
        profesion: paciente.data().profesion,
        hijos: paciente.data().hijos,
        conQuienVive: paciente.data().conQuienVive,
        peso: paciente.data().peso ? paciente.data().peso : "",
        estatura: paciente.data().estatura ? paciente.data().estatura : "",
        imc: paciente.data().imc,
        patologiaBase: paciente.data().patologiaBase,
        otroPatologiaBase: paciente.data().otroPatologiaBase,
        intoleranciaOAlergia: paciente.data().intoleranciaOAlergia,
        otroIntoleranciaOAlergia: paciente.data().otroIntoleranciaOAlergia,
        medicamento: paciente.data().medicamento,
        cualMedicamento: paciente.data().cualMedicamento,
        suplemento: paciente.data().suplemento,
        cualSuplemento: paciente.data().cualSuplemento,
        conductaAlimentaria: paciente.data().conductaAlimentaria,
        objetivo: paciente.data().objetivo,
        molestiaRecurrente: paciente.data().molestiaRecurrente,
        otroMolestiaRecurrente: paciente.data().otroMolestiaRecurrente,
        horarioRutinaDiaria: paciente.data().horarioRutinaDiaria,
        horasDormir: paciente.data().horasDormir,
        actividadFisica: paciente.data().actividadFisica,
        otroActividadFisica: paciente.data().otroActividadFisica,
        frecuenciaAF: paciente.data().frecuenciaAF,
        duracionAF: paciente.data().duracionAF,
        otroDuracionAF: paciente.data().otroDuracionAF,
        horarioAF: paciente.data().horarioAF,
        calidadAlimentacion: paciente.data().calidadAlimentacion,
        organizacionPlanificacion: paciente.data().organizacionPlanificacion,
        alimentoNoConsumible: paciente.data().alimentoNoConsumible,
        habilidadCocina: paciente.data().habilidadCocina,
        organizarAlmuerzosCenas: paciente.data().organizarAlmuerzosCenas,
        suplementoConsiderado: paciente.data().suplementoConsiderado,
        desayuno: paciente.data().desayuno,
        almuerzo: paciente.data().almuerzo,
        merienda: paciente.data().merienda,
        cena: paciente.data().cena,
        loPeorAlimentacion: paciente.data().loPeorAlimentacion,
        loMejorHabitos: paciente.data().loMejorHabitos,
        algunComentario: paciente.data().algunComentario,
      });
    }
  }, [paciente]);

  const calcularEdad = () => {
    const hoy = new Date();
    const fechaNacimiento = new Date(form.fechaDeNacimiento);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }
    setForm({
      ...form,
      edad: edad,
    });
  };

  const calcularIMC = () => {
    const peso = parseInt(form.peso);
    const estatura = parseInt(form.estatura) / 100;
    if (!peso || !estatura) return;

    const imc = (peso / estatura).toFixed(1);
    setForm({
      ...form,
      imc: imc,
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setForm({
      fechaCreacion: "",
      nombreYApellido: "",
      fechaDeNacimiento: "",
      edad: "",
      documento: "",
      sexo: "",
      pais: "",
      ciudad: "",
      telefono: "",
      correo: "",
      profesion: "",
      hijos: "",
      conQuienVive: "",
      peso: "",
      estatura: "",
      imc: "",
      patologiaBase: "",
      otroPatologiaBase: "",
      intoleranciaOAlergia: "",
      otroIntoleranciaOAlergia: "",
      medicamento: "",
      cualMedicamento: "",
      suplemento: "",
      cualSuplemento: "",
      conductaAlimentaria: "",
      objetivo: "",
      molestiaRecurrente: "",
      otroMolestiaRecurrente: "",
      horarioRutinaDiaria: "",
      horasDormir: "",
      actividadFisica: "",
      otroActividadFisica: "",
      frecuenciaAF: "",
      duracionAF: "",
      otroDuracionAF: "",
      horarioAF: "",
      calidadAlimentacion: "",
      organizacionPlanificacion: "",
      alimentoNoConsumible: "",
      habilidadCocina: "",
      organizarAlmuerzosCenas: "",
      suplementoConsiderado: "",
      desayuno: "",
      almuerzo: "",
      merienda: "",
      cena: "",
      loPeorAlimentacion: "",
      loMejorHabitos: "",
      algunComentario: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEstadoAlerta(false);
    setAlerta({});
    if (
      form.nombreYApellido !== "" ||
      form.fechaDeNacimiento !== "" ||
      form.pais !== "" ||
      form.ciudad !== "" ||
      form.telefono !== ""
    ) {
      if (paciente) {
        editPaciente({
          id: paciente.id,
          fechaCreacion: form.fechaCreacion ? form.fechaCreacion : "",
          nombreYApellido: form.nombreYApellido,
          fechaDeNacimiento: form.fechaDeNacimiento,
          edad: form.edad,
          documento: form.documento,
          sexo: form.sexo,
          pais: form.pais,
          ciudad: form.ciudad,
          telefono: form.telefono,
          correo: form.correo,
          profesion: form.profesion,
          hijos: form.hijos,
          conQuienVive: form.conQuienVive,
          peso: form.peso ? form.peso : "",
          estatura: form.estatura ? form.estatura : "",
          imc: form.imc,
          patologiaBase: form.patologiaBase,
          otroPatologiaBase: form.otroPatologiaBase,
          intoleranciaOAlergia: form.intoleranciaOAlergia,
          otroIntoleranciaOAlergia: form.otroIntoleranciaOAlergia,
          medicamento: form.medicamento,
          cualMedicamento: form.cualMedicamento,
          suplemento: form.suplemento,
          cualSuplemento: form.cualSuplemento,
          conductaAlimentaria: form.conductaAlimentaria,
          objetivo: form.objetivo,
          molestiaRecurrente: form.molestiaRecurrente,
          otroMolestiaRecurrente: form.otroMolestiaRecurrente,
          horarioRutinaDiaria: form.horarioRutinaDiaria,
          horasDormir: form.horasDormir,
          actividadFisica: form.actividadFisica,
          otroActividadFisica: form.otroActividadFisica,
          frecuenciaAF: form.frecuenciaAF,
          duracionAF: form.duracionAF,
          otroDuracionAF: form.otroDuracionAF,
          horarioAF: form.horarioAF,
          calidadAlimentacion: form.calidadAlimentacion,
          organizacionPlanificacion: form.organizacionPlanificacion,
          alimentoNoConsumible: form.alimentoNoConsumible,
          habilidadCocina: form.habilidadCocina,
          organizarAlmuerzosCenas: form.organizarAlmuerzosCenas,
          suplementoConsiderado: form.suplementoConsiderado,
          desayuno: form.desayuno,
          almuerzo: form.almuerzo,
          merienda: form.merienda,
          cena: form.cena,
          loPeorAlimentacion: form.loPeorAlimentacion,
          loMejorHabitos: form.loMejorHabitos,
          algunComentario: form.algunComentario,
        })
          .then(() => {
            history.push("/pacientes");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setForm({
          ...form,
          fechaCreacion: new Date(),
        });
        addPaciente({
          fechaCreacion: new Date(),
          nombreYApellido: form.nombreYApellido,
          fechaDeNacimiento: form.fechaDeNacimiento,
          edad: form.edad,
          documento: form.documento,
          sexo: form.sexo,
          pais: form.pais,
          ciudad: form.ciudad,
          telefono: form.telefono,
          correo: form.correo,
          profesion: form.profesion,
          hijos: form.hijos,
          conQuienVive: form.conQuienVive,
          peso: form.peso,
          estatura: form.estatura,
          imc: form.imc,
          patologiaBase: form.patologiaBase,
          otroPatologiaBase: form.otroPatologiaBase,
          intoleranciaOAlergia: form.intoleranciaOAlergia,
          otroIntoleranciaOAlergia: form.otroIntoleranciaOAlergia,
          medicamento: form.medicamento,
          cualMedicamento: form.cualMedicamento,
          suplemento: form.suplemento,
          cualSuplemento: form.cualSuplemento,
          conductaAlimentaria: form.conductaAlimentaria,
          objetivo: form.objetivo,
          molestiaRecurrente: form.molestiaRecurrente,
          otroMolestiaRecurrente: form.otroMolestiaRecurrente,
          horarioRutinaDiaria: form.horarioRutinaDiaria,
          horasDormir: form.horasDormir,
          actividadFisica: form.actividadFisica,
          otroActividadFisica: form.otroActividadFisica,
          frecuenciaAF: form.frecuenciaAF,
          duracionAF: form.duracionAF,
          otroDuracionAF: form.otroDuracionAF,
          horarioAF: form.horarioAF,
          calidadAlimentacion: form.calidadAlimentacion,
          organizacionPlanificacion: form.organizacionPlanificacion,
          suplementoConsiderado: form.suplementoConsiderado,
          desayuno: form.desayuno,
          almuerzo: form.almuerzo,
          merienda: form.merienda,
          cena: form.cena,
          loPeorAlimentacion: form.loPeorAlimentacion,
          loMejorHabitos: form.loMejorHabitos,
          algunComentario: form.algunComentario,
        })
          .then(() => {
            setForm({
              fechaCreacion: "",
              nombreYApellido: "",
              fechaDeNacimiento: "",
              edad: "",
              documento: "",
              sexo: "",
              pais: "",
              ciudad: "",
              telefono: "",
              correo: "",
              profesion: "",
              hijos: "",
              conQuienVive: "",
              peso: "",
              estatura: "",
              imc: "",
              patologiaBase: "",
              otroPatologiaBase: "",
              intoleranciaOAlergia: "",
              otroIntoleranciaOAlergia: "",
              medicamento: "",
              cualMedicamento: "",
              suplemento: "",
              cualSuplemento: "",
              conductaAlimentaria: "",
              objetivo: "",
              molestiaRecurrente: "",
              otroMolestiaRecurrente: "",
              horarioRutinaDiaria: "",
              horasDormir: "",
              actividadFisica: "",
              otroActividadFisica: "",
              frecuenciaAF: "",
              duracionAF: "",
              otroDuracionAF: "",
              horarioAF: "",
              calidadAlimentacion: "",
              organizacionPlanificacion: "",
              alimentoNoConsumible: "",
              habilidadCocina: "",
              organizarAlmuerzosCenas: "",
              suplementoConsiderado: "",
              desayuno: "",
              almuerzo: "",
              merienda: "",
              cena: "",
              loPeorAlimentacion: "",
              loMejorHabitos: "",
              algunComentario: "",
            });
            setEstadoAlerta(true);
            setAlerta({
              tipo: "exito",
              mensaje: "Formulario enviado exitosamente",
            });
          })
          .catch((error) => {
            setEstadoAlerta(true);
            setAlerta({
              tipo: "error",
              mensaje: "El valor ingresado no es el correcto",
            });
          });
      }
    } else {
      setEstadoAlerta(true);
      setAlerta({
        tipo: "error",
        mensaje: "Por favor rellena los datos principales",
      });
    }
  };

  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <FormularioDiv onSubmit={handleSubmit}>
        <div>
          <span style={{ fontWeight: "bold" }}>Datos personales</span>
          <ContenedorInput style={{ marginTop: "20px" }}>
            <label htmlFor="nombreYApellido">Nombre y Apellido: </label>
            <InputChico
              type="text"
              name="nombreYApellido"
              id="nombreYApellido"
              value={form.nombreYApellido}
              onChange={updateField}
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="fechaDeNacimiento">Fecha de nacimiento: </label>
            <InputChico
              type="date"
              name="fechaDeNacimiento"
              id="fechaDeNacimiento"
              value={form.fechaDeNacimiento}
              onChange={updateField}
              onBlur={calcularEdad}
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="edad">Edad: </label>
            <InputChico
              type="text"
              name="edad"
              id="edad"
              readOnly
              value={form.edad}
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="ciudad">CI / DNI: </label>
            <InputChico
              type="text"
              name="documento"
              id="documento"
              value={form.documento}
              onChange={updateField}
            />
          </ContenedorInput>
          <ContenedorInput style={{ marginBottom: "20px" }}>
            <label htmlFor="sexo">Sexo: </label>
            <select
              id="sexo"
              name="sexo"
              onChange={updateField}
              value={form.sexo}
            >
              <option value="femenino">Femenino</option>
              <option value="masculino">Masculino</option>
            </select>
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="pais">País: </label>
            <InputChico
              type="text"
              name="pais"
              id="pais"
              value={form.pais}
              onChange={updateField}
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="ciudad">Ciudad: </label>
            <InputChico
              type="text"
              name="ciudad"
              id="ciudad"
              value={form.ciudad}
              onChange={updateField}
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="telefono">Teléfono: </label>
            <InputChico
              type="text"
              name="telefono"
              id="telefono"
              value={form.telefono}
              onChange={updateField}
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="correo">Correo: </label>
            <InputChico
              type="text"
              name="correo"
              id="correo"
              value={form.correo}
              onChange={updateField}
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="correo">Profesión / Ocupación: </label>
            <InputChico
              type="text"
              name="profesion"
              id="profesion"
              value={form.profesion}
              onChange={updateField}
            />
          </ContenedorInput>
          <ContenedorInput style={{ marginBottom: "20px" }}>
            <label htmlFor="hijos">N° de hijos: </label>
            <select
              id="hijos"
              name="hijos"
              onChange={updateField}
              value={form.hijos}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </ContenedorInput>
          <ContenedorInput style={{ marginBottom: "20px" }}>
            <label htmlFor="conQuienVive">Con quién vive: </label>
            <select
              id="conQuienVive"
              name="conQuienVive"
              onChange={updateField}
              value={form.conQuienVive}
            >
              <option value="solo">Solo</option>
              <option value="pareja">Pareja o Roomate</option>
              <option value="familia">Familia o más personas</option>
            </select>
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="peso">Peso (kg): </label>
            <InputChico
              type="number"
              name="peso"
              id="peso"
              value={form.peso}
              onChange={updateField}
              onBlur={calcularIMC}
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="estatura">Estatura (cm): </label>
            <InputChico
              type="number"
              name="estatura"
              id="estatura"
              value={form.estatura}
              onChange={updateField}
              onBlur={calcularIMC}
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="imc">IMC (peso/estatura): </label>
            <InputChico
              type="text"
              name="imc"
              id="imc"
              readOnly
              value={form.imc}
            />
          </ContenedorInput>
          <ContenedorInput style={{ marginBottom: "20px" }}>
            <label htmlFor="patologiaBase">Patología de base: </label>
            <select
              id="patologiaBase"
              name="patologiaBase"
              onChange={updateField}
              value={form.patologiaBase}
            >
              <option value="ninguna">Ninguna</option>
              <option value="hipertension">
                Hipertensión arterial o enfermedades cardiacas
              </option>
              <option value="diabetes">Diabetes</option>
              <option value="enfRenal">Enfermedad Renal</option>
              <option value="hipotiroidismo">Hipotiroidismo</option>
              <option value="sindOvario">
                Síndrome de ovario poliquístico
              </option>
              <option value="otro">Otro</option>
            </select>
          </ContenedorInput>
          {form.patologiaBase === "otro" && (
            <ContenedorInput>
              <label htmlFor="otroPatologiaBase">Otra patología: </label>
              <InputChico
                type="text"
                name="otroPatologiaBase"
                id="otroPatologiaBase"
                value={form.otroPatologiaBase}
                onChange={updateField}
              />
            </ContenedorInput>
          )}
          <ContenedorInput style={{ marginBottom: "20px" }}>
            <label htmlFor="intoleranciaOAlergia">
              Alguna intolerancia o alergia alimentaria:{" "}
            </label>
            <select
              id="intoleranciaOAlergia"
              name="intoleranciaOAlergia"
              onChange={updateField}
              value={form.intoleranciaOAlergia}
            >
              <option value="ninguna">Ninguna</option>
              <option value="celiaquia">Celiaquía</option>
              <option value="gluten">Intolerancia al gluten</option>
              <option value="lactosa">Intolerancia a la lactosa</option>
              <option value="pescados">Pescados</option>
              <option value="otro">Otro</option>
            </select>
          </ContenedorInput>
          {form.intoleranciaOAlergia === "otro" && (
            <ContenedorInput>
              <label htmlFor="otroIntoleranciaOAlergia">
                Otra intolerancia o alergia:{" "}
              </label>
              <InputChico
                type="text"
                name="otroIntoleranciaOAlergia"
                id="otroIntoleranciaOAlergia"
                value={form.otroIntoleranciaOAlergia}
                onChange={updateField}
              />
            </ContenedorInput>
          )}
          <ContenedorInput style={{ marginBottom: "20px" }}>
            <label htmlFor="medicamento">
              ¿Estás consumiendo algún medicamento actualmente, ya sea de forma
              transitoria o crónica?:{" "}
            </label>
            <select
              id="medicamento"
              name="medicamento"
              onChange={updateField}
              value={form.medicamento}
            >
              <option value="no">No</option>
              <option value="si">Si</option>
            </select>
          </ContenedorInput>
          {form.medicamento === "si" && (
            <ContenedorInput>
              <label htmlFor="cualMedicamento">Que medicamento/s: </label>
              <InputChico
                type="text"
                name="cualMedicamento"
                id="cualMedicamento"
                value={form.cualMedicamento}
                onChange={updateField}
              />
            </ContenedorInput>
          )}
          <ContenedorInput style={{ marginBottom: "20px" }}>
            <label htmlFor="suplemento">
              ¿Estás consumiendo algún suplemento, complemento dietario?:{" "}
            </label>
            <select
              id="suplemento"
              name="suplemento"
              onChange={updateField}
              value={form.suplemento}
            >
              <option value="no">No</option>
              <option value="si">Si</option>
            </select>
          </ContenedorInput>
          {form.suplemento === "si" && (
            <ContenedorInput>
              <label htmlFor="cualSuplemento">Que suplemento: </label>
              <InputChico
                type="text"
                name="cualSuplemento"
                id="cualSuplemento"
                value={form.cualSuplemento}
                onChange={updateField}
              />
            </ContenedorInput>
          )}
          <ContenedorInput style={{ marginBottom: "20px" }}>
            <label htmlFor="conductaAlimentaria">
              ¿Problemas de conducta alimentaria?:{" "}
            </label>
            <select
              id="conductaAlimentaria"
              name="conductaAlimentaria"
              onChange={updateField}
              value={form.conductaAlimentaria}
            >
              <option value="ninguno">Ninguno</option>
              <option value="atracones">Atracones</option>
              <option value="comedorNocturno">Sx del comedor nocturno</option>
              <option value="picoteos">Picoteos</option>
              <option value="tca">TCA</option>
            </select>
          </ContenedorInput>
          <ContenedorInput style={{ marginBottom: "20px" }}>
            <label htmlFor="objetivo">
              Objetivo:{" "}
            </label>
            <select
              id="objetivo"
              name="objetivo"
              onChange={updateField}
              value={form.objetivo}
            >
              <option value="vidaSaludable">Adquirir un estilo de vida saludable</option>
              <option value="condicionFisica">Ganar condición física</option>
              <option value="tonificarCuerpo">Tonificar el cuerpo</option>
              <option value="fuerzaYMasaMuscular">Ganar fuerza y masa muscular</option>
              <option value="perderPeso">Perder peso</option>
            </select>
          </ContenedorInput>
          <ContenedorInput style={{ marginTop: "20px" }}>
            <label htmlFor="enfCardiacas">Enfermedades cardiacas</label>
            <ContenedorInputRadio>
              <InputRadio
                type="radio"
                value="Si"
                checked={form.enfCardiacas === "Si"}
                onChange={updateField}
                name="enfCardiacas"
                id="enfCardiacas"
              />
              <span>Si</span>
              <InputRadio
                type="radio"
                value="No"
                checked={form.enfCardiacas === "No"}
                onChange={updateField}
                name="enfCardiacas"
                id="enfCardiacas"
              />{" "}
              <span>No</span>
            </ContenedorInputRadio>
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="diabetes">Diabetes</label>
            <ContenedorInputRadio>
              <InputRadio
                type="radio"
                value="Si"
                checked={form.diabetes === "Si"}
                onChange={updateField}
                name="diabetes"
                id="diabetes"
              />
              <span>Si</span>
              <InputRadio
                type="radio"
                value="No"
                checked={form.diabetes === "No"}
                onChange={updateField}
                name="diabetes"
                id="diabetes"
              />{" "}
              <span>No</span>
            </ContenedorInputRadio>
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="presionAlta">Presión alta</label>
            <ContenedorInputRadio>
              <InputRadio
                type="radio"
                value="Si"
                checked={form.presionAlta === "Si"}
                onChange={updateField}
                name="presionAlta"
                id="presionAlta"
              />
              <span>Si</span>
              <InputRadio
                type="radio"
                value="No"
                checked={form.presionAlta === "No"}
                onChange={updateField}
                name="presionAlta"
                id="presionAlta"
              />{" "}
              <span>No</span>
            </ContenedorInputRadio>
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="asma">Asma</label>
            <ContenedorInputRadio>
              <InputRadio
                type="radio"
                value="Si"
                checked={form.asma === "Si"}
                onChange={updateField}
                name="asma"
                id="asma"
              />
              <span>Si</span>
              <InputRadio
                type="radio"
                value="No"
                checked={form.asma === "No"}
                onChange={updateField}
                name="asma"
                id="asma"
              />{" "}
              <span>No</span>
            </ContenedorInputRadio>
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="alergias">Alergias</label>
            <ContenedorInputRadio>
              <InputRadio
                type="radio"
                value="Si"
                checked={form.alergias === "Si"}
                onChange={updateField}
                name="alergias"
                id="alergias"
              />
              <span>Si</span>
              <InputRadio
                type="radio"
                value="No"
                name="alergias"
                checked={form.alergias === "No"}
                onChange={updateField}
                id="alergias"
              />{" "}
              <span>No</span>
            </ContenedorInputRadio>
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="hipoHiperTiroidismo">Hipo | Hipertiroidismo:</label>
            <ContenedorInputRadio>
              <div>
                <InputRadio
                  type="radio"
                  value="hipo"
                  checked={form.hipoHiperTiroidismo === "hipo"}
                  onChange={updateField}
                  name="hipoHiperTiroidismo"
                  id="hipoHiperTiroidismo"
                />
                <span>Hipotiroidismo</span>
              </div>
              <div>
                <InputRadio
                  type="radio"
                  value="hiper"
                  checked={form.hipoHiperTiroidismo === "hiper"}
                  onChange={updateField}
                  name="hipoHiperTiroidismo"
                  id="hipoHiperTiroidismo"
                />{" "}
                <span>Hipertiroidismo</span>
              </div>
              <div>
                <InputRadio
                  type="radio"
                  value="ninguno"
                  checked={form.hipoHiperTiroidismo === "ninguno"}
                  onChange={updateField}
                  name="hipoHiperTiroidismo"
                  id="hipoHiperTiroidismo"
                />{" "}
                <span>Ninguno</span>
              </div>
            </ContenedorInputRadio>
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="sindromeOvarioPoliquistico">
              Sindrome de Ovario Poliquístico
            </label>
            <ContenedorInputRadio>
              <InputRadio
                type="radio"
                value="Si"
                checked={form.sindromeOvarioPoliquistico === "Si"}
                onChange={updateField}
                name="sindromeOvarioPoliquistico"
                id="sindromeOvarioPoliquistico"
              />
              <span>Si</span>
              <InputRadio
                type="radio"
                value="No"
                checked={form.sindromeOvarioPoliquistico === "No"}
                onChange={updateField}
                name="sindromeOvarioPoliquistico"
                id="sindromeOvarioPoliquistico"
              />{" "}
              <span>No</span>
            </ContenedorInputRadio>
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="intoleranciaLactosa">
              Intolerancia a la lactosa
            </label>
            <ContenedorInputRadio>
              <InputRadio
                type="radio"
                value="Si"
                checked={form.intoleranciaLactosa === "Si"}
                onChange={updateField}
                name="intoleranciaLactosa"
                id="intoleranciaLactosa"
              />
              <span>Si</span>
              <InputRadio
                type="radio"
                value="No"
                checked={form.intoleranciaLactosa === "No"}
                onChange={updateField}
                name="intoleranciaLactosa"
                id="intoleranciaLactosa"
              />{" "}
              <span>No</span>
            </ContenedorInputRadio>
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="celiaquia">Celiaquía</label>
            <ContenedorInputRadio>
              <InputRadio
                type="radio"
                value="Si"
                checked={form.celiaquia === "Si"}
                onChange={updateField}
                name="celiaquia"
                id="celiaquia"
              />
              <span>Si</span>
              <InputRadio
                type="radio"
                value="No"
                checked={form.celiaquia === "No"}
                onChange={updateField}
                name="celiaquia"
                id="celiaquia"
              />{" "}
              <span>No</span>
            </ContenedorInputRadio>
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="gastritis">Gastritis</label>
            <ContenedorInputRadio>
              <InputRadio
                type="radio"
                value="Si"
                checked={form.gastritis === "Si"}
                onChange={updateField}
                name="gastritis"
                id="gastritis"
              />
              <span>Si</span>
              <InputRadio
                type="radio"
                value="No"
                checked={form.gastritis === "No"}
                onChange={updateField}
                name="gastritis"
                id="gastritis"
              />{" "}
              <span>No</span>
            </ContenedorInputRadio>
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="estreñimiento">Estreñimiento</label>
            <ContenedorInputRadio>
              <InputRadio
                type="radio"
                value="Si"
                checked={form.estreñimiento === "Si"}
                onChange={updateField}
                name="estreñimiento"
                id="estreñimiento"
              />
              <span>Si</span>
              <InputRadio
                type="radio"
                value="No"
                checked={form.estreñimiento === "No"}
                onChange={updateField}
                name="estreñimiento"
                id="estreñimiento"
              />{" "}
              <span>No</span>
            </ContenedorInputRadio>
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="cicloMenstrual">Mujeres.. Ciclo menstrual</label>
            <ContenedorInputRadio>
              <InputRadio
                type="radio"
                value="Regular"
                checked={form.cicloMenstrual === "Regular"}
                onChange={updateField}
                name="cicloMenstrual"
                id="cicloMenstrual"
              />
              <span>Regular</span>
              <InputRadio
                type="radio"
                value="Irregular"
                checked={form.cicloMenstrual === "Irregular"}
                onChange={updateField}
                name="cicloMenstrual"
                id="cicloMenstrual"
              />{" "}
              <span>Irregular</span>
            </ContenedorInputRadio>
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="otros">Otros</label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.otros}
              onChange={updateField}
              name="otros"
              id="otros"
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="intervencionesQuirurjicas">
              Intervenciones quirúrgicas
            </label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.intervencionesQuirurjicas}
              onChange={updateField}
              name="intervencionesQuirurjicas"
              id="intervencionesQuirurjicas"
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="medicacion">Medicación</label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.medicacion}
              onChange={updateField}
              name="medicacion"
              id="medicacion"
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="suplementos">Suplementos</label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.suplementos}
              onChange={updateField}
              name="suplementos"
              id="suplementos"
            />
          </ContenedorInput>
          <ContenedorInput style={{ marginBottom: "20px" }}>
            <label htmlFor="molestias">Algunas molestias que sienta</label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.molestias}
              onChange={updateField}
              name="molestias"
              id="molestias"
            />
          </ContenedorInput>
          <span style={{ fontWeight: "bold" }}>
            Hábitos - responda SI/NO y antecedentes nutricionales
          </span>
          <ContenedorInput style={{ marginTop: "20px", marginBottom: "10px" }}>
            <label htmlFor="fuma">Fuma</label>
            <ContenedorInputRadio>
              <InputRadio
                type="radio"
                value="Si"
                checked={form.fuma === "Si"}
                onChange={updateField}
                name="fuma"
                id="fuma"
              />
              <span>Si</span>
              <InputRadio
                type="radio"
                value="No"
                checked={form.fuma === "No"}
                onChange={updateField}
                name="fuma"
                id="fuma"
              />{" "}
              <span>No</span>
            </ContenedorInputRadio>
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="bebidasAlcoholicas">Bebidas alcohólicas</label>
            <select
              id="bebidasAlcoholicas"
              name="bebidasAlcoholicas"
              onChange={updateField}
              value={form.bebidasAlcoholicas}
            >
              <option value="diario">A Diario</option>
              <option value="finDeSemanaMucho">
                Cada fin de semana, mucha cantidad
              </option>
              <option value="finDeSemanaPoca">
                Cada fin de semana, poca cantidad
              </option>
              <option value="unaODosVecesAlMes">1 ó 2 veces al mes</option>
              <option value="nunca">Nunca</option>
            </select>
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="alergiasAlimentarias">
              Alimentos que le caen mal - alergias alimentarias
            </label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.alergiasAlimentarias}
              onChange={updateField}
              name="alergiasAlimentarias"
              id="alergiasAlimentarias"
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="alimentosQueNoLeGustan">
              Alimentos que no le gustan
            </label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.alimentosQueNoLeGustan}
              onChange={updateField}
              name="alimentosQueNoLeGustan"
              id="alimentosQueNoLeGustan"
            />
          </ContenedorInput>
          <ContenedorInput style={{ marginTop: "10px" }}>
            <label htmlFor="preferencia">Preferencia de dulces o salados</label>
            <ContenedorInputRadio>
              <InputRadio
                type="radio"
                value="dulces"
                checked={form.preferencia === "dulces"}
                onChange={updateField}
                name="preferencia"
                id="preferencia"
              />
              <span>Dulces</span>
              <InputRadio
                type="radio"
                value="salados"
                checked={form.preferencia === "salados"}
                onChange={updateField}
                name="preferencia"
                id="preferencia"
              />{" "}
              <span>Salados</span>
            </ContenedorInputRadio>
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="rutinaActividadDiaria">
              Rutina de actividad diaria
            </label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.rutinaActividadDiaria}
              onChange={updateField}
              name="rutinaActividadDiaria"
              id="rutinaActividadDiaria"
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="trabajaEstudia">Trabaja? Estudia?</label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              name="trabajaEstudia"
              id="trabajaEstudia"
              value={form.trabajaEstudia}
              onChange={updateField}
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="horarioRutina">Horario</label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              name="horarioRutina"
              id="horarioRutina"
              value={form.horarioRutina}
              onChange={updateField}
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="horaDespertar">Se despierta a las</label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              name="horaDespertar"
              id="horaDespertar"
              value={form.horaDespertar}
              onChange={updateField}
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="cantidadComidasAlDia">
              Cuantas comidas hace al día
            </label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              name="cantidadComidasAlDia"
              id="cantidadComidasAlDia"
              value={form.cantidadComidasAlDia}
              onChange={updateField}
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="dondeCome">¿Dónde come?</label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              name="dondeCome"
              id="dondeCome"
              value={form.dondeCome}
              onChange={updateField}
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="conQuienCome">¿Con quién come?</label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              name="conQuienCome"
              id="conQuienCome"
              value={form.conQuienCome}
              onChange={updateField}
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="responsableComidas">
              ¿Quién prepara las comidas?
            </label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              name="responsableComidas"
              id="responsableComidas"
              value={form.responsableComidas}
              onChange={updateField}
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="compra">¿Compra?</label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              name="compra"
              id="compra"
              value={form.compra}
              onChange={updateField}
            />
          </ContenedorInput>
          <ContenedorInput style={{ marginTop: "10px", marginBottom: "20px" }}>
            <label htmlFor="comeEntreHoras">
              ¿Come entre horas? (picoteos)
            </label>
            <ContenedorInputRadio>
              <InputRadio
                type="radio"
                value="Si"
                checked={form.comeEntreHoras === "Si"}
                onChange={updateField}
                name="comeEntreHoras"
                id="comeEntreHoras"
              />
              <span>Si</span>
              <InputRadio
                type="radio"
                value="No"
                checked={form.comeEntreHoras === "No"}
                onChange={updateField}
                name="comeEntreHoras"
                id="comeEntreHoras"
              />{" "}
              <span>No</span>
            </ContenedorInputRadio>
          </ContenedorInput>

          <span style={{ fontWeight: "bold" }}>Actividad física actual</span>
          <ContenedorInput style={{ marginBottom: "20px" }}>
            <label htmlFor="actividadFisica">Días - horario - duración</label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              name="actividadFisica"
              value={form.actividadFisica}
              onChange={updateField}
              id="actividadFisica"
            />
          </ContenedorInput>

          <span style={{ fontWeight: "bold", display: "block" }}>
            Recordatorio de 24 hs
          </span>
          <span>
            Describa todo lo que consumió de ayer a hoy, especificando
            cantidades.
          </span>
          <ContenedorInput>
            <label htmlFor="desayuno">Desayuno</label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.desayuno}
              onChange={updateField}
              name="desayuno"
              id="desayuno"
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="colacion">Colación</label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.colacion}
              onChange={updateField}
              name="colacion"
              id="colacion"
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="almuerzo">Almuerzo</label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.almuerzo}
              onChange={updateField}
              name="almuerzo"
              id="almuerzo"
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="merienda">Merienda</label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.merienda}
              onChange={updateField}
              name="merienda"
              id="merienda"
            />
          </ContenedorInput>
          <ContenedorInput style={{ marginBottom: "20px" }}>
            <label htmlFor="cena">Cena</label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.cena}
              onChange={updateField}
              name="cena"
              id="cena"
            />
          </ContenedorInput>

          <span>
            <span style={{ fontWeight: "bold" }}>Recordatorio:</span> Enviar vía
            whatsapp último análisis de laboratorio.
          </span>
          <ContenedorInput>
            <Buton type="submit" primario="true">
              {paciente ? "Editar" : "Enviar"}
            </Buton>
            <Buton type="resetForm" onClick={handleReset}>
              Reset
            </Buton>
          </ContenedorInput>
        </div>
        <Alerta
          tipo={alerta.tipo}
          mensaje={alerta.mensaje}
          estadoAlerta={estadoAlerta}
          setEstadoAlerta={setEstadoAlerta}
        />
      </FormularioDiv>
    </>
  );
};

export default Formulario;
