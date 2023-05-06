import { useEffect, useState } from 'react';
import Alerta from '../../elements/Alerta';
import addPaciente from '../../firebase/pacientes/addPaciente';
import editPaciente from '../../firebase/pacientes/editPaciente';
import {
  FormularioDiv,
  InputChico,
  ContenedorInput,
  TextArea,
  ContenedorInputCheckbox,
} from '../../elements/ElementosDeFormulario';
import { useHistory } from 'react-router-dom';
import Buton from '../../elements/Buton';

const initialState = {
  fechaCreacion: '',
  nombreYApellido: '',
  fechaDeNacimiento: '',
  edad: '',
  documento: '',
  sexo: 'femenino',
  pais: '',
  ciudad: '',
  telefono: '',
  correo: '',
  profesion: '',
  hijos: '0',
  conQuienVive: 'solo',
  peso: '',
  estatura: '',
  imc: '',
  patologiaBase: 'ninguna',
  otroPatologiaBase: '',
  intoleranciaOAlergia: 'ninguna',
  otroIntoleranciaOAlergia: '',
  medicamento: 'no',
  cualMedicamento: '',
  suplemento: 'no',
  cualSuplemento: '',
  conductaAlimentaria: 'ninguno',
  objetivo: 'vidaSaludable',
  molestiaRecurrente: 'ninguna',
  otroMolestiaRecurrente: '',
  horarioRutinaDiaria: '',
  horasDormir: '8hsomas',
  actividadFisica: 'gymPesas',
  cualDeporte: '',
  otroActividadFisica: '',
  frecuenciaAF: '3vecesomenos',
  duracionAF: '45-60min',
  otroDuracionAF: '',
  horarioAF: 'primeraHora',
  calidadAlimentacion: 'poco',
  organizacionPlanificacion: 'poco',
  alimentoNoConsumible: '',
  habilidadCocina: 'malo',
  organizarAlmuerzosCenas: 'recetasMomento',
  suplementoConsiderado: '',
  desayuno: '',
  almuerzo: '',
  merienda: '',
  cena: '',
  loPeorAlimentacion: '',
  loMejorHabitos: '',
  algunComentario: '',
  informacion_veridica: false,
};

const Formulario = ({ paciente }) => {
  const [form, setForm] = useState(initialState);
  const [alerta, setAlerta] = useState({});
  const [estadoAlerta, setEstadoAlerta] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (paciente) {
      setForm({
        fechaCreacion: paciente.fechaCreacion ? paciente.fechaCreacion : '',
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
        peso: paciente.data().peso ? paciente.data().peso : '',
        estatura: paciente.data().estatura ? paciente.data().estatura : '',
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
        cualDeporte: paciente.data().cualDeporte,
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
        informacion_veridica: paciente.data().informacion_veridica,
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
    setForm(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEstadoAlerta(false);
    setAlerta({});
    if (
      form.nombreYApellido !== '' ||
      form.fechaDeNacimiento !== '' ||
      form.pais !== '' ||
      form.ciudad !== '' ||
      form.telefono !== ''
    ) {
      if (paciente) {
        editPaciente({
          id: paciente.id,
          fechaCreacion: form.fechaCreacion ? form.fechaCreacion : '',
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
          peso: form.peso ? form.peso : '',
          estatura: form.estatura ? form.estatura : '',
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
          cualDeporte: form.cualDeporte,
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
          informacion_veridica: form.informacion_veridica,
        })
          .then(() => {
            history.push('/pacientes');
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
          cualDeporte: form.cualDeporte,
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
          informacion_veridica: form.informacion_veridica,
        })
          .then(() => {
            setForm(initialState);
            setEstadoAlerta(true);
            setAlerta({
              tipo: 'exito',
              mensaje: 'Formulario enviado exitosamente',
            });
          })
          .catch((error) => {
            setEstadoAlerta(true);
            setAlerta({
              tipo: 'error',
              mensaje: 'El valor ingresado no es el correcto',
            });
          });
      }
    } else {
      setEstadoAlerta(true);
      setAlerta({
        tipo: 'error',
        mensaje: 'Por favor rellena los datos principales',
      });
    }
  };

  const handleCheckboxChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
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
          <span style={{ fontWeight: 'bold' }}>Datos personales</span>
          <ContenedorInput style={{ marginTop: '20px' }}>
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
          <ContenedorInput style={{ marginBottom: '20px' }}>
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
          <ContenedorInput style={{ marginBottom: '20px' }}>
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
          <ContenedorInput style={{ marginBottom: '20px' }}>
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
          <ContenedorInput style={{ marginBottom: '20px' }}>
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
          {form.patologiaBase === 'otro' && (
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
          <ContenedorInput style={{ marginBottom: '20px' }}>
            <label htmlFor="intoleranciaOAlergia">
              Alguna intolerancia o alergia alimentaria:{' '}
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
          {form.intoleranciaOAlergia === 'otro' && (
            <ContenedorInput>
              <label htmlFor="otroIntoleranciaOAlergia">
                Otra intolerancia o alergia:{' '}
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
          <ContenedorInput style={{ marginBottom: '20px' }}>
            <label htmlFor="medicamento">
              ¿Estás consumiendo algún medicamento actualmente, ya sea de forma
              transitoria o crónica?:{' '}
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
          {form.medicamento === 'si' && (
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
          <ContenedorInput style={{ marginBottom: '20px' }}>
            <label htmlFor="suplemento">
              ¿Estás consumiendo algún suplemento, complemento dietario?:{' '}
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
          {form.suplemento === 'si' && (
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
          <ContenedorInput style={{ marginBottom: '20px' }}>
            <label htmlFor="conductaAlimentaria">
              ¿Problemas de conducta alimentaria?:{' '}
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
          <ContenedorInput style={{ marginBottom: '20px' }}>
            <label htmlFor="objetivo">Objetivo: </label>
            <select
              id="objetivo"
              name="objetivo"
              onChange={updateField}
              value={form.objetivo}
            >
              <option value="vidaSaludable">
                Adquirir un estilo de vida saludable
              </option>
              <option value="condicionFisica">Ganar condición física</option>
              <option value="tonificarCuerpo">Tonificar el cuerpo</option>
              <option value="fuerzaYMasaMuscular">
                Ganar fuerza y masa muscular
              </option>
              <option value="perderPeso">Perder peso</option>
            </select>
          </ContenedorInput>
          <ContenedorInput style={{ marginBottom: '20px' }}>
            <label htmlFor="molestiaRecurrente">
              ¿Sientes algún tipo de molestia recurrente?:{' '}
            </label>
            <select
              id="molestiaRecurrente"
              name="molestiaRecurrente"
              onChange={updateField}
              value={form.molestiaRecurrente}
            >
              <option value="ninguna">Ninguna</option>
              <option value="cansancio">Cansancio o falta de energía</option>
              <option value="fatiga">Fatiga</option>
              <option value="doloresCabeza">Dolores de cabeza</option>
              <option value="acidez">Acidez</option>
              <option value="estrenimiento">Estreñimiento</option>
              <option value="otro">Otro</option>
            </select>
          </ContenedorInput>
          {form.molestiaRecurrente === 'otro' && (
            <ContenedorInput>
              <label htmlFor="otroMolestiaRecurrente">
                Otra molestia recurrente:{' '}
              </label>
              <InputChico
                type="text"
                name="otroMolestiaRecurrente"
                id="otroMolestiaRecurrente"
                value={form.otroMolestiaRecurrente}
                onChange={updateField}
              />
            </ContenedorInput>
          )}
          <ContenedorInput>
            <label htmlFor="horarioRutinaDiaria">
              ¿Cómo son tus horarios y tu rutina habitual? (Que hora te
              despiertas, si trabajas o estudias o de que manera ocupas tu
              tiempo durante el día, que hora duermes)
            </label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.horarioRutinaDiaria}
              onChange={updateField}
              name="horarioRutinaDiaria"
              id="horarioRutinaDiaria"
            />
          </ContenedorInput>
          <ContenedorInput style={{ marginBottom: '20px' }}>
            <label htmlFor="horasDormir">
              ¿Cuántas horas duermes en promedio?:{' '}
            </label>
            <select
              id="horasDormir"
              name="horasDormir"
              onChange={updateField}
              value={form.horasDormir}
            >
              <option value="8hsomas">8 horas o más</option>
              <option value="6-8hs">6-8 horas</option>
              <option value="menos6hs">Menos de 6 horas</option>
              <option value="insomnio">
                Tengo mucho insomnio o duermo entrecortado
              </option>
            </select>
          </ContenedorInput>
          <ContenedorInput style={{ marginBottom: '20px' }}>
            <label htmlFor="actividadFisica">
              ¿Qué tipo de actividad física estás realizando?:{' '}
            </label>
            <select
              id="actividadFisica"
              name="actividadFisica"
              onChange={updateField}
              value={form.actividadFisica}
            >
              <option value="gymPesas">Gym (pesas)</option>
              <option value="gymPesasCardio">Gym (pesas+cardio)</option>
              <option value="clases">
                Clases (crossfit, funcional, spinning)
              </option>
              <option value="deporte">Deporte</option>
              <option value="otro">Otro</option>
            </select>
          </ContenedorInput>
          {form.actividadFisica === 'deporte' && (
            <ContenedorInput>
              <label htmlFor="cualDeporte">Cual deporte: </label>
              <InputChico
                type="text"
                name="cualDeporte"
                id="cualDeporte"
                value={form.cualDeporte}
                onChange={updateField}
              />
            </ContenedorInput>
          )}
          {form.actividadFisica === 'otro' && (
            <ContenedorInput>
              <label htmlFor="otroActividadFisica">
                Otra actividad física:{' '}
              </label>
              <InputChico
                type="text"
                name="otroActividadFisica"
                id="otroActividadFisica"
                value={form.otroActividadFisica}
                onChange={updateField}
              />
            </ContenedorInput>
          )}
          <ContenedorInput style={{ marginBottom: '20px' }}>
            <label htmlFor="frecuenciaAF">
              Frecuencia de tu actividad física:{' '}
            </label>
            <select
              id="frecuenciaAF"
              name="frecuenciaAF"
              onChange={updateField}
              value={form.frecuenciaAF}
            >
              <option value="3vecesomenos">3 veces a la semana o menos</option>
              <option value="3-5veces">3-5 veces a la semana</option>
              <option value="5vecesomas">Más de 5 veces a la semana</option>
            </select>
          </ContenedorInput>
          <ContenedorInput style={{ marginBottom: '20px' }}>
            <label htmlFor="duracionAF">
              Duración de tu actividad física por sesión:{' '}
            </label>
            <select
              id="duracionAF"
              name="duracionAF"
              onChange={updateField}
              value={form.duracionAF}
            >
              <option value="45-60min">45-60 minutos</option>
              <option value="60-90min">60-90 minutos</option>
              <option value="mas90min">Más de 90 minutos</option>
              <option value="otro">Otro</option>
            </select>
          </ContenedorInput>
          {form.duracionAF === 'otro' && (
            <ContenedorInput>
              <label htmlFor="otroDuracionAF">Otra duración: </label>
              <InputChico
                type="text"
                name="otroDuracionAF"
                id="otroDuracionAF"
                value={form.otroDuracionAF}
                onChange={updateField}
              />
            </ContenedorInput>
          )}
          <ContenedorInput style={{ marginBottom: '20px' }}>
            <label htmlFor="horarioAF">
              ¿En qué horario sueles realizar con mayor frecuencia tu actividad
              física?:{' '}
            </label>
            <select
              id="horarioAF"
              name="horarioAF"
              onChange={updateField}
              value={form.horarioAF}
            >
              <option value="primeraHora">A primera hora</option>
              <option value="manana">Por la mañana</option>
              <option value="mediodia">Mediodía</option>
              <option value="siesta">Siesta o media tarde</option>
              <option value="tarde">Tarde</option>
              <option value="noche">Noche</option>
            </select>
          </ContenedorInput>
          <ContenedorInput style={{ marginBottom: '20px' }}>
            <label htmlFor="calidadAlimentacion">
              En cuanto a la calidad de tu alimentación. ¿En qué punto dirías
              que te encuentras hoy?:{' '}
            </label>
            <select
              id="calidadAlimentacion"
              name="calidadAlimentacion"
              onChange={updateField}
              value={form.calidadAlimentacion}
            >
              <option value="poco">
                POCO que mejorar, la mayor parte del tiempo consumo alimentos de
                calidad nutricional
              </option>
              <option value="bastante">
                BASTANTE que mejorar, diría que estoy en un 50-50%
              </option>
              <option value="mucho">
                MUCHO que mejorar, diariamente consumo alimentos de bajo valor y
                calidad nutricional
              </option>
            </select>
          </ContenedorInput>
          <ContenedorInput style={{ marginBottom: '20px' }}>
            <label htmlFor="organizacionPlanificacion">
              En cuanto a la organización y planificación. ¿En qué punto dirías
              que te encuentras hoy?:{' '}
            </label>
            <select
              id="organizacionPlanificacion"
              name="organizacionPlanificacion"
              onChange={updateField}
              value={form.organizacionPlanificacion}
            >
              <option value="poco">
                POCO que mejorar, me considero organizado, planifico las cosas
                que quiero realizar
              </option>
              <option value="bastante">
                BASTANTE que mejorar, diría que estoy en un 50-50%
              </option>
              <option value="mucho">
                MUCHO que mejorar, vivo improvisando
              </option>
            </select>
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="alimentoNoConsumible">
              En cuanto a la selección de alimentos. ¿Hay algún alimento/s que
              no consumas?
            </label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.alimentoNoConsumible}
              onChange={updateField}
              name="alimentoNoConsumible"
              id="alimentoNoConsumible"
            />
          </ContenedorInput>
          <ContenedorInput style={{ marginBottom: '20px' }}>
            <label htmlFor="habilidadCocina">
              Tu desenvolvimiento en la cocina:{' '}
            </label>
            <select
              id="habilidadCocina"
              name="habilidadCocina"
              onChange={updateField}
              value={form.habilidadCocina}
            >
              <option value="malo">Malo, soy un peligro en la cocina</option>
              <option value="quieroAprender">Malo pero quiero aprender</option>
              <option value="meDefiendo">Me defiendo</option>
              <option value="meGusta">
                Me gusta cocinar o lo hago con frecuencia
              </option>
            </select>
          </ContenedorInput>
          <ContenedorInput style={{ marginBottom: '20px' }}>
            <label htmlFor="organizarAlmuerzosCenas">
              ¿Cómo te gustaría organizarte con los almuerzos y las cenas?:{' '}
            </label>
            <select
              id="organizarAlmuerzosCenas"
              name="organizarAlmuerzosCenas"
              onChange={updateField}
              value={form.organizarAlmuerzosCenas}
            >
              <option value="recetasMomento">
                Recetas para cocinar en el momento
              </option>
              <option value="opcionesCompra">
                Opciones para comprar directamente
              </option>
              <option value="cocinar2o3dias">
                Quiero cocinar para 2 a 3 días, así llegar o llevar y comer
                directamente
              </option>
              <option value="almuerzoSemanaCenasMomento">
                Quiero preparar de una vez el almuerzo para toda la semana y las
                cenas preparar en el momento.
              </option>
            </select>
          </ContenedorInput>
          <ContenedorInput style={{ marginBottom: '30px' }}>
            <label htmlFor="suplementoConsiderado">
              ¿Estás considerando utilizar algún suplemento? Coméntame cuál y
              con qué finalidad, con tus palabras:{' '}
            </label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.suplementoConsiderado}
              onChange={updateField}
              name="suplementoConsiderado"
              id="suplementoConsiderado"
            />
          </ContenedorInput>
          <span>
            Dame ejemplos de lo que sueles consumir en cada comida para que yo
            pueda seleccionar menùes que no se alejen mucho de lo que
            acostumbras a comer.
          </span>
          <ContenedorInput>
            <label htmlFor="desayuno">Desayuno: </label>
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
            <label htmlFor="almuerzo">Almuerzo: </label>
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
            <label htmlFor="merienda">Merienda: </label>
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
          <ContenedorInput style={{ marginBottom: '20px' }}>
            <label htmlFor="cena">Cena: </label>
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
          <ContenedorInput>
            <label htmlFor="loPeorAlimentacion">
              ¿Qué dirías que es lo peor de tu alimentación hoy en día?:{' '}
            </label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.loPeorAlimentacion}
              onChange={updateField}
              name="loPeorAlimentacion"
              id="loPeorAlimentacion"
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="loMejorHabitos">
              ¿Qué dirías que es lo mejor o algunos hábitos saludables que ya
              tienes incorporados?:{' '}
            </label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.loMejorHabitos}
              onChange={updateField}
              name="loMejorHabitos"
              id="loMejorHabitos"
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="algunComentario">
              Algún comentario relevante que no hayamos tocado hasta ahora y me
              quieras hacer saber:{' '}
            </label>
            <TextArea
              cols="50"
              rows="2"
              type="text"
              value={form.algunComentario}
              onChange={updateField}
              name="algunComentario"
              id="algunComentario"
            />
          </ContenedorInput>

          <ContenedorInputCheckbox>
            <label
              htmlFor="informacion_veridica"
              style={{ width: '100%', textAlign: 'left' }}
            >
              <input
                type="checkbox"
                name="informacion_veridica"
                id="informacion_veridica"
                checked={form.informacion_veridica}
                onChange={handleCheckboxChange}
              />{' '}
              Confirmo que la información proporcionada es precisa y verídica.
            </label>
          </ContenedorInputCheckbox>

          <p>
            En cuanto a tu evaluación de composición actual, voy a necesitar que
            al terminar este cuestionario, te dirijas al whatsapp y me digas
            "estoy listo para la evaluación". Así podré asesorarte de cómo
            llevaremos acabo este punto.
          </p>
          <ContenedorInput style={{ marginTop: '20px' }}>
            <Buton
              type="submit"
              primario="true"
              disabled={!form.informacion_veridica}
            >
              {paciente ? 'Editar' : 'Enviar'}
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
