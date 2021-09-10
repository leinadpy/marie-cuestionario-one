import React, { useState, useEffect } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import formatearFecha from "./../../funciones/formatearFecha";
import { PDFViewer } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "#E4E4E4",
  },
  body: {
    flexGrow: 1,
    fontWeight: "normal",
  },
  row: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
  },
  textBold: {
    textDecoration: "underline",
  },
  title: {
    textAlign: "center",
    fontSize: 15,
    textDecoration: "underline",
    marginBottom: 15,
  },
  title2: {
    textAlign: "center",
    fontSize: 15,
    textDecoration: "underline",
    marginBottom: 15,
    marginTop: 15,
  },
  fill0: {
    margin: 10,
    width: "50%",
    textAlign: "left",
    fontSize: 12,
    // marginBottom: 10,
  },
  fill1: {
    margin: 10,
    width: "25%",
    textAlign: "left",
    fontSize: 12,
  },
  fill2: {
    margin: 10,
    width: "100%",
    textAlign: "left",
    fontSize: 12,
  },
  fill3: {
    margin: 10,
    width: "33%",
    textAlign: "left",
    fontSize: 12,
  },
});

// Create Document Component
const PacientePDF = ({ paciente }) => {
  const [state, setState] = useState({
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

  useEffect(() => {
    if (paciente) {
      const bebedor = paciente.data().bebidasAlcoholicas;
      let bebedorTexto;
      switch (bebedor) {
        case "diario":
          bebedorTexto = "A Diario";
          break;
        case "finDeSemanaMucho":
          bebedorTexto = "Cada fin de semana, mucha cantidad";
          break;
        case "finDeSemanaPoca":
          bebedorTexto = "Cada fin de semana, poca cantidad";
          break;
        case "unaODosVecesAlMes":
          bebedorTexto = "1 ó 2 veces al mes";
          break;
        case "nunca":
          bebedorTexto = "Nunca";
          break;

        default:
          break;
      }

      setState({
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
        bebidasAlcoholicas: bebedorTexto,
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

  return (
    <PDFViewer width={"100%"} height={"100%"}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.body}>
            <View style={styles.title}>
              <Text>Datos personales del paciente</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Nombre y Apellido:</Text>{" "}
                  {state.nombreYApellido}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Fecha de nacimiento:</Text>{" "}
                  {formatearFecha(state.fechaDeNacimiento)}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Edad:</Text> {state.edad}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Ciudad:</Text> {state.ciudad}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Teléfono:</Text>{" "}
                  {state.telefono}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Correo:</Text> {state.correo}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Hijos:</Text> {state.hijos}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Con quien vive:</Text>{" "}
                  {state.conQuienVive}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill2}>
                <Text>
                  <Text style={styles.textBold}>Motivo Consulta:</Text>{" "}
                  {state.motivoConsulta}
                </Text>
              </View>
            </View>

            <View style={styles.title2}>
              <Text>
                Patologías y enfermedades de base a tener en cuenta o
                antecedentes familiares
              </Text>
            </View>
            <View style={styles.row}>
              <View style={styles.fill1}>
                <Text>
                  <Text style={styles.textBold}>Enf. Cardiacas:</Text>{" "}
                  {state.enfCardiacas}
                </Text>
              </View>
              <View style={styles.fill1}>
                <Text>
                  <Text style={styles.textBold}>Diabetes:</Text>{" "}
                  {state.diabetes}
                </Text>
              </View>
              <View style={styles.fill1}>
                <Text>
                  <Text style={styles.textBold}>Asma:</Text> {state.asma}
                </Text>
              </View>
              <View style={styles.fill1}>
                <Text>
                  <Text style={styles.textBold}>Alergias:</Text>{" "}
                  {state.alergias}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill1}>
                <Text>
                  <Text style={styles.textBold}>Tiroidismo:</Text>{" "}
                  {state.hipoHiperTiroidismo}
                </Text>
              </View>
              <View style={styles.fill1}>
                <Text>
                  <Text style={styles.textBold}>S. Ov. Poliquístico:</Text>{" "}
                  {state.sindromeOvarioPoliquistico}
                </Text>
              </View>
              <View style={styles.fill1}>
                <Text>
                  <Text style={styles.textBold}>Int. Lactosa:</Text>{" "}
                  {state.intoleranciaLactosa}
                </Text>
              </View>
              <View style={styles.fill1}>
                <Text>
                  <Text style={styles.textBold}>Celiaquía:</Text>{" "}
                  {state.celiaquia}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill3}>
                <Text>
                  <Text style={styles.textBold}>Gastritis:</Text>{" "}
                  {state.gastritis}
                </Text>
              </View>
              <View style={styles.fill3}>
                <Text>
                  <Text style={styles.textBold}>Estreñimiento:</Text>{" "}
                  {state.estreñimiento}
                </Text>
              </View>
              <View style={styles.fill3}>
                <Text>
                  <Text style={styles.textBold}>Ciclo Menstrual:</Text>{" "}
                  {state.cicloMenstrual}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Otros:</Text> {state.otros}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>
                    Intervenciones quirúrgicas:
                  </Text>{" "}
                  {state.intervencionesQuirurjicas}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Medicación:</Text>{" "}
                  {state.medicacion}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Suplementos:</Text>{" "}
                  {state.suplementos}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill1}>
                <Text>
                  <Text style={styles.textBold}>Molestias:</Text>{" "}
                  {state.molestias}
                </Text>
              </View>
            </View>

            <View style={styles.title2}>
              <Text>Hábitos</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.fill1}>
                <Text>
                  <Text style={styles.textBold}>Fuma:</Text> {state.fuma}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Bebidas Alcohólicas:</Text>{" "}
                  {state.bebidasAlcoholicas}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Alergias Alimentarias:</Text>{" "}
                  {state.alergiasAlimentarias}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>
                    Alimentos que no le gustan:
                  </Text>{" "}
                  {state.alimentosQueNoLeGustan}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Preferencia:</Text>{" "}
                  {state.preferencia}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Rutina Diaria:</Text>{" "}
                  {state.rutinaActividadDiaria}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Trabaja/Estudia:</Text>{" "}
                  {state.trabajaEstudia}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Horario Rutina:</Text>{" "}
                  {state.horarioRutina}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Se despierta a las:</Text>{" "}
                  {state.horaDespertar}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill3}>
                <Text>
                  <Text style={styles.textBold}>Cantidad de comidas:</Text>{" "}
                  {state.cantidadComidasAlDia}
                </Text>
              </View>
              <View style={styles.fill3}>
                <Text>
                  <Text style={styles.textBold}>Donde come:</Text>{" "}
                  {state.dondeCome}
                </Text>
              </View>
              <View style={styles.fill3}>
                <Text>
                  <Text style={styles.textBold}>Con quien come:</Text>{" "}
                  {state.conQuienCome}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill3}>
                <Text>
                  <Text style={styles.textBold}>Quien prepara:</Text>{" "}
                  {state.responsableComidas}
                </Text>
              </View>
              <View style={styles.fill3}>
                <Text>
                  <Text style={styles.textBold}>Compra:</Text> {state.compra}
                </Text>
              </View>
              <View style={styles.fill3}>
                <Text>
                  <Text style={styles.textBold}>Come entre horas:</Text>{" "}
                  {state.comeEntreHoras}
                </Text>
              </View>
            </View>
          </View>
        </Page>
        <Page size="A4" style={styles.page}>
          <View style={styles.body}>
            <View style={styles.title}>
              <Text>Actividad física actual</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.fill2}>
                <Text>
                  <Text style={styles.textBold}>
                    Días - horario - duración:
                  </Text>{" "}
                  {state.actividadFisica}
                </Text>
              </View>
            </View>

            <View style={styles.title2}>
              <Text>Recordatorio de 24 hs</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.fill2}>
                <Text>
                  <Text style={styles.textBold}>Desayuno:</Text>{" "}
                  {state.desayuno}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill2}>
                <Text>
                  <Text style={styles.textBold}>Colación:</Text>{" "}
                  {state.colacion}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill2}>
                <Text>
                  <Text style={styles.textBold}>Almuerzo:</Text>{" "}
                  {state.almuerzo}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill2}>
                <Text>
                  <Text style={styles.textBold}>Merienda:</Text>{" "}
                  {state.merienda}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill2}>
                <Text>
                  <Text style={styles.textBold}>Cena:</Text> {state.cena}
                </Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PacientePDF;
