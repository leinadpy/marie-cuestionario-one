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
    nombreYApellido: "",
    fechaDeNacimiento: "",
    edad: "",
    ciudad: "",
    telefono: "",
    correo: "",
    hijos: "",
    conQuienVive: "",
    motivoConsulta: "",
    enfCardiacas: "",
    diabetes: "",
    presionAlta: "",
    asma: "",
    alergias: "",
    hipoHiperTiroidismo: "",
    sindromeOvarioPoliquistico: "",
    intoleranciaLactosa: "",
    celiaquia: "",
    gastritis: "",
    estreñimiento: "",
    cicloMenstrual: "",
    otros: "",
    intervencionesQuirurjicas: "",
    medicacion: "",
    suplementos: "",
    molestias: "",
    fuma: "",
    bebidasAlcoholicas: "nunca",
    alergiasAlimentarias: "",
    alimentosQueNoLeGustan: "",
    preferencia: "",
    rutinaActividadDiaria: "",
    trabajaEstudia: "",
    horarioRutina: "",
    horaDespertar: "",
    cantidadComidasAlDia: "",
    dondeCome: "",
    conQuienCome: "",
    responsableComidas: "",
    compra: "",
    comeEntreHoras: "",
    actividadFisica: "",
    desayuno: "",
    colacion: "",
    almuerzo: "",
    merienda: "",
    cena: "",
  });
  const [alerta, setAlerta] = useState({});
  const [estadoAlerta, setEstadoAlerta] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (paciente) {
      setForm({
        nombreYApellido: paciente.data().nombreYApellido,
        fechaDeNacimiento: paciente.data().fechaDeNacimiento,
        edad: paciente.data().edad,
        ciudad: paciente.data().ciudad,
        telefono: paciente.data().telefono,
        correo: paciente.data().correo,
        hijos: paciente.data().hijos,
        conQuienVive: paciente.data().conQuienVive,
        motivoConsulta: paciente.data().motivoConsulta,
        enfCardiacas: paciente.data().enfCardiacas,
        diabetes: paciente.data().diabetes,
        presionAlta: paciente.data().presionAlta,
        asma: paciente.data().asma,
        alergias: paciente.data().alergias,
        hipoHiperTiroidismo: paciente.data().hipoHiperTiroidismo,
        sindromeOvarioPoliquistico: paciente.data().sindromeOvarioPoliquistico,
        intoleranciaLactosa: paciente.data().intoleranciaLactosa,
        celiaquia: paciente.data().celiaquia,
        gastritis: paciente.data().gastritis,
        estreñimiento: paciente.data().estreñimiento,
        cicloMenstrual: paciente.data().cicloMenstrual,
        otros: paciente.data().otros,
        intervencionesQuirurjicas: paciente.data().intervencionesQuirurjicas,
        medicacion: paciente.data().medicacion,
        suplementos: paciente.data().suplementos,
        molestias: paciente.data().molestias,
        fuma: paciente.data().fuma,
        bebidasAlcoholicas: paciente.data().bebidasAlcoholicas,
        alergiasAlimentarias: paciente.data().alergiasAlimentarias,
        alimentosQueNoLeGustan: paciente.data().alimentosQueNoLeGustan,
        preferencia: paciente.data().preferencia,
        rutinaActividadDiaria: paciente.data().rutinaActividadDiaria,
        trabajaEstudia: paciente.data().trabajaEstudia,
        horarioRutina: paciente.data().horarioRutina,
        horaDespertar: paciente.data().horaDespertar,
        cantidadComidasAlDia: paciente.data().cantidadComidasAlDia,
        dondeCome: paciente.data().dondeCome,
        conQuienCome: paciente.data().conQuienCome,
        responsableComidas: paciente.data().responsableComidas,
        compra: paciente.data().compra,
        comeEntreHoras: paciente.data().comeEntreHoras,
        actividadFisica: paciente.data().actividadFisica,
        desayuno: paciente.data().desayuno,
        colacion: paciente.data().colacion,
        almuerzo: paciente.data().almuerzo,
        merienda: paciente.data().merienda,
        cena: paciente.data().cena,
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

  const handleReset = (e) => {
    e.preventDefault();
    setForm({
      nombreYApellido: "",
      fechaDeNacimiento: "",
      edad: "",
      ciudad: "",
      telefono: "",
      correo: "",
      hijos: "",
      conQuienVive: "",
      motivoConsulta: "",
      enfCardiacas: "",
      diabetes: "",
      presionAlta: "",
      asma: "",
      alergias: "",
      hipoHiperTiroidismo: "",
      sindromeOvarioPoliquistico: "",
      intoleranciaLactosa: "",
      celiaquia: "",
      gastritis: "",
      estreñimiento: "",
      cicloMenstrual: "",
      otros: "",
      intervencionesQuirurjicas: "",
      medicacion: "",
      suplementos: "",
      molestias: "",
      fuma: "",
      bebidasAlcoholicas: "",
      alergiasAlimentarias: "",
      alimentosQueNoLeGustan: "",
      preferencia: "",
      rutinaActividadDiaria: "",
      trabajaEstudia: "",
      horarioRutina: "",
      horaDespertar: "",
      cantidadComidasAlDia: "",
      dondeCome: "",
      conQuienCome: "",
      responsableComidas: "",
      compra: "",
      comeEntreHoras: "",
      actividadFisica: "",
      desayuno: "",
      colacion: "",
      almuerzo: "",
      merienda: "",
      cena: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEstadoAlerta(false);
    setAlerta({});
    if (
      form.nombreYApellido !== "" ||
      form.fechaDeNacimiento !== "" ||
      form.ciudad !== "" ||
      form.telefono !== ""
    ) {
      if (paciente) {
        editPaciente({
          id: paciente.id,
          nombreYApellido: form.nombreYApellido,
          fechaDeNacimiento: form.fechaDeNacimiento,
          edad: form.edad,
          ciudad: form.ciudad,
          telefono: form.telefono,
          correo: form.correo,
          hijos: form.hijos,
          conQuienVive: form.conQuienVive,
          motivoConsulta: form.motivoConsulta,
          enfCardiacas: form.enfCardiacas,
          diabetes: form.diabetes,
          presionAlta: form.presionAlta,
          asma: form.asma,
          alergias: form.alergias,
          hipoHiperTiroidismo: form.hipoHiperTiroidismo,
          sindromeOvarioPoliquistico: form.sindromeOvarioPoliquistico,
          intoleranciaLactosa: form.intoleranciaLactosa,
          celiaquia: form.celiaquia,
          gastritis: form.gastritis,
          estreñimiento: form.estreñimiento,
          cicloMenstrual: form.cicloMenstrual,
          otros: form.otros,
          intervencionesQuirurjicas: form.intervencionesQuirurjicas,
          medicacion: form.medicacion,
          suplementos: form.suplementos,
          molestias: form.molestias,
          fuma: form.fuma,
          bebidasAlcoholicas: form.bebidasAlcoholicas,
          alergiasAlimentarias: form.alergiasAlimentarias,
          alimentosQueNoLeGustan: form.alimentosQueNoLeGustan,
          preferencia: form.preferencia,
          rutinaActividadDiaria: form.rutinaActividadDiaria,
          trabajaEstudia: form.trabajaEstudia,
          horarioRutina: form.horarioRutina,
          horaDespertar: form.horaDespertar,
          cantidadComidasAlDia: form.cantidadComidasAlDia,
          dondeCome: form.dondeCome,
          conQuienCome: form.conQuienCome,
          responsableComidas: form.responsableComidas,
          compra: form.compra,
          comeEntreHoras: form.comeEntreHoras,
          actividadFisica: form.actividadFisica,
          desayuno: form.desayuno,
          colacion: form.colacion,
          almuerzo: form.almuerzo,
          merienda: form.merienda,
          cena: form.cena,
        })
          .then(() => {
            history.push("/pacientes");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        addPaciente({
          nombreYApellido: form.nombreYApellido,
          fechaDeNacimiento: form.fechaDeNacimiento,
          edad: form.edad,
          ciudad: form.ciudad,
          telefono: form.telefono,
          correo: form.correo,
          hijos: form.hijos,
          conQuienVive: form.conQuienVive,
          motivoConsulta: form.motivoConsulta,
          enfCardiacas: form.enfCardiacas,
          diabetes: form.diabetes,
          presionAlta: form.presionAlta,
          asma: form.asma,
          alergias: form.alergias,
          hipoHiperTiroidismo: form.hipoHiperTiroidismo,
          sindromeOvarioPoliquistico: form.sindromeOvarioPoliquistico,
          intoleranciaLactosa: form.intoleranciaLactosa,
          celiaquia: form.celiaquia,
          gastritis: form.gastritis,
          estreñimiento: form.estreñimiento,
          cicloMenstrual: form.cicloMenstrual,
          otros: form.otros,
          intervencionesQuirurjicas: form.intervencionesQuirurjicas,
          medicacion: form.medicacion,
          suplementos: form.suplementos,
          molestias: form.molestias,
          fuma: form.fuma,
          bebidasAlcoholicas: form.bebidasAlcoholicas,
          alergiasAlimentarias: form.alergiasAlimentarias,
          alimentosQueNoLeGustan: form.alimentosQueNoLeGustan,
          preferencia: form.preferencia,
          rutinaActividadDiaria: form.rutinaActividadDiaria,
          trabajaEstudia: form.trabajaEstudia,
          horarioRutina: form.horarioRutina,
          horaDespertar: form.horaDespertar,
          cantidadComidasAlDia: form.cantidadComidasAlDia,
          dondeCome: form.dondeCome,
          conQuienCome: form.conQuienCome,
          responsableComidas: form.responsableComidas,
          compra: form.compra,
          comeEntreHoras: form.comeEntreHoras,
          actividadFisica: form.actividadFisica,
          desayuno: form.desayuno,
          colacion: form.colacion,
          almuerzo: form.almuerzo,
          merienda: form.merienda,
          cena: form.cena,
        })
          .then(() => {
            setForm({
              nombreYApellido: "",
              fechaDeNacimiento: "",
              edad: "",
              ciudad: "",
              telefono: "",
              correo: "",
              hijos: "",
              conQuienVive: "",
              motivoConsulta: "",
              enfCardiacas: "",
              diabetes: "",
              presionAlta: "",
              asma: "",
              alergias: "",
              hipoHiperTiroidismo: "",
              sindromeOvarioPoliquistico: "",
              intoleranciaLactosa: "",
              celiaquia: "",
              gastritis: "",
              estreñimiento: "",
              cicloMenstrual: "",
              otros: "",
              intervencionesQuirurjicas: "",
              medicacion: "",
              suplementos: "",
              molestias: "",
              fuma: "",
              bebidasAlcoholicas: "",
              alergiasAlimentarias: "",
              alimentosQueNoLeGustan: "",
              preferencia: "",
              rutinaActividadDiaria: "",
              trabajaEstudia: "",
              horarioRutina: "",
              horaDespertar: "",
              cantidadComidasAlDia: "",
              dondeCome: "",
              conQuienCome: "",
              responsableComidas: "",
              compra: "",
              comeEntreHoras: "",
              actividadFisica: "",
              desayuno: "",
              colacion: "",
              almuerzo: "",
              merienda: "",
              cena: "",
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
            <label htmlFor="ciudad">Ciudad donde vive: </label>
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
            <label htmlFor="hijos">Hijos: </label>
            <InputChico
              type="text"
              name="hijos"
              id="hijos"
              value={form.hijos}
              onChange={updateField}
            />
          </ContenedorInput>
          <ContenedorInput>
            <label htmlFor="conQuienVive">Con quien vive: </label>
            <InputChico
              type="text"
              name="conQuienVive"
              id="conQuienVive"
              value={form.conQuienVive}
              onChange={updateField}
            />
          </ContenedorInput>
          <ContenedorInput style={{ marginBottom: "20px" }}>
            <label htmlFor="motivoConsulta">Motivo de consulta: </label>
            <TextArea
              rows="2"
              type="text"
              name="motivoConsulta"
              id="motivoConsulta"
              value={form.motivoConsulta}
              onChange={updateField}
            />
          </ContenedorInput>
          <span style={{ fontWeight: "bold" }}>
            Patologías y enfermedades de base a tener en cuenta o antecedentes
            familiares
          </span>
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
            whatsapp último análisis de laboratorio con los siguientes valores:
            fecha, hemograma, glicemia, HBA1C, perfil lípido, perfil hepático,
            perfil renal, perfil hormonal.
          </span>
          <ContenedorInput>
            <Buton type="submit" primario="true">
              Enviar
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
