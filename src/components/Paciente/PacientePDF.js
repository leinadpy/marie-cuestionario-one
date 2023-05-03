import React, { useState, useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import formatearFecha from './../../funciones/formatearFecha';
import { PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: '#E4E4E4',
  },
  body: {
    flexGrow: 1,
    fontWeight: 'normal',
  },
  row: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  textBold: {
    textDecoration: 'underline',
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
    textDecoration: 'underline',
    marginBottom: 15,
  },
  title2: {
    textAlign: 'center',
    fontSize: 15,
    textDecoration: 'underline',
    marginBottom: 15,
    marginTop: 15,
  },
  fill0: {
    margin: 10,
    width: '50%',
    textAlign: 'left',
    fontSize: 12,
    // marginBottom: 10,
  },
  fill1: {
    margin: 10,
    width: '25%',
    textAlign: 'left',
    fontSize: 12,
  },
  fill2: {
    margin: 10,
    width: '100%',
    textAlign: 'left',
    fontSize: 12,
  },
  fill3: {
    margin: 10,
    width: '33%',
    textAlign: 'left',
    fontSize: 12,
  },
});

// Create Document Component
const PacientePDF = ({ paciente }) => {
  const [state, setState] = useState({
    fechaCreacion: '',
    nombreYApellido: '',
    fechaDeNacimiento: '',
    edad: '',
    documento: '',
    sexo: '',
    pais: '',
    ciudad: '',
    telefono: '',
    correo: '',
    profesion: '',
    hijos: '',
    conQuienVive: '',
    peso: '',
    estatura: '',
    imc: '',
    patologiaBase: '',
    otroPatologiaBase: '',
    intoleranciaOAlergia: '',
    otroIntoleranciaOAlergia: '',
    medicamento: '',
    cualMedicamento: '',
    suplemento: '',
    cualSuplemento: '',
    conductaAlimentaria: '',
    objetivo: '',
    molestiaRecurrente: '',
    otroMolestiaRecurrente: '',
    horarioRutinaDiaria: '',
    horasDormir: '',
    actividadFisica: '',
    cualDeporte: '',
    otroActividadFisica: '',
    frecuenciaAF: '',
    duracionAF: '',
    otroDuracionAF: '',
    horarioAF: '',
    calidadAlimentacion: '',
    organizacionPlanificacion: '',
    alimentoNoConsumible: '',
    habilidadCocina: '',
    organizarAlmuerzosCenas: '',
    suplementoConsiderado: '',
    desayuno: '',
    almuerzo: '',
    merienda: '',
    cena: '',
    loPeorAlimentacion: '',
    loMejorHabitos: '',
    algunComentario: '',
    informacion_veridica: false,
  });

  useEffect(() => {
    if (paciente) {
      let sexoTexto;
      switch (paciente.data().sexo) {
        case 'femenino':
          sexoTexto = 'Femenino';
          break;
        case 'masculino':
          sexoTexto = 'Masculino';
          break;
        default:
          break;
      }

      let conQuienViveTexto;
      switch (paciente.data().conQuienVive) {
        case 'solo':
          conQuienViveTexto = 'Solo';
          break;
        case 'pareja':
          conQuienViveTexto = 'Pareja o Roomate';
          break;
        case 'familia':
          conQuienViveTexto = 'Familia o más personas';
          break;
        default:
          break;
      }

      let patologiaBaseTexto;
      switch (paciente.data().patologiaBase) {
        case 'ninguna':
          patologiaBaseTexto = 'Ninguna';
          break;
        case 'hipertension':
          patologiaBaseTexto = 'Hipertensión arterial o enfermedades cardiacas';
          break;
        case 'enfRenal':
          patologiaBaseTexto = 'Enfermedad Renal';
          break;
        case 'hipotiroidismo':
          patologiaBaseTexto = 'Hipotiroidismo';
          break;
        case 'sindOvario':
          patologiaBaseTexto = 'Síndrome de ovario poliquístico';
          break;
        case 'otro':
          patologiaBaseTexto = paciente.data().otroPatologiaBase;
          break;
        default:
          break;
      }

      let intoleranciaOAlergiaTexto;
      switch (paciente.data().intoleranciaOAlergia) {
        case 'ninguna':
          intoleranciaOAlergiaTexto = 'Ninguna';
          break;
        case 'celiquia':
          intoleranciaOAlergiaTexto = 'Celiaquía';
          break;
        case 'gluten':
          intoleranciaOAlergiaTexto = 'Intolerancia al gluten';
          break;
        case 'lactosa':
          intoleranciaOAlergiaTexto = 'Intolerancia a la lactosa';
          break;
        case 'pescados':
          intoleranciaOAlergiaTexto = 'Pescados';
          break;
        case 'otro':
          intoleranciaOAlergiaTexto = paciente.data().otroIntoleranciaOAlergia;
          break;
        default:
          break;
      }

      let medicamentoTexto;
      switch (paciente.data().medicamento) {
        case 'no':
          medicamentoTexto = 'No';
          break;
        case 'si':
          medicamentoTexto = paciente.data().cualMedicamento;
          break;
        default:
          break;
      }

      let suplementoTexto;
      switch (paciente.data().suplemento) {
        case 'no':
          suplementoTexto = 'No';
          break;
        case 'si':
          suplementoTexto = paciente.data().cualSuplemento;
          break;
        default:
          break;
      }

      let conductaAlimentariaTexto;
      switch (paciente.data().conductaAlimentaria) {
        case 'ninguno':
          conductaAlimentariaTexto = 'Ninguno';
          break;
        case 'atracones':
          conductaAlimentariaTexto = 'Atracones';
          break;
        case 'comedorNocturno':
          conductaAlimentariaTexto = 'Sx del comedor nocturno';
          break;
        case 'picoteos':
          conductaAlimentariaTexto = 'Picoteos';
          break;
        case 'tca':
          conductaAlimentariaTexto = 'TCA';
          break;
        default:
          break;
      }

      let objetivoTexto;
      switch (paciente.data().objetivo) {
        case 'vidaSaludable':
          objetivoTexto = 'Adquirir una vida saludable';
          break;
        case 'condicionFisica':
          objetivoTexto = 'Ganar condición física';
          break;
        case 'tonificarCuerpo':
          objetivoTexto = 'Tonificar el cuerpo';
          break;
        case 'fuerzaYMasaMuscula':
          objetivoTexto = 'Ganar fuerza y masa muscular';
          break;
        case 'perderPeso':
          objetivoTexto = 'Perder peso';
          break;
        default:
          break;
      }

      let molestiaRecurrenteTexto;
      switch (paciente.data().molestiaRecurrente) {
        case 'ninguna':
          molestiaRecurrenteTexto = 'Ninguna';
          break;
        case 'cansancio':
          molestiaRecurrenteTexto = 'Cansancio falta de energía';
          break;
        case 'fatiga':
          molestiaRecurrenteTexto = 'Fatiga';
          break;
        case 'doloresCabeza':
          molestiaRecurrenteTexto = 'Dolores de cabeza';
          break;
        case 'acidez':
          molestiaRecurrenteTexto = 'Acidez';
          break;
        case 'estrenimiento':
          molestiaRecurrenteTexto = 'Estreñimiento';
          break;
        case 'otro':
          molestiaRecurrenteTexto = paciente.data().otroMolestiaRecurrente;
          break;
        default:
          break;
      }

      let horasDormirTexto;
      switch (paciente.data().horasDormir) {
        case '8hsomas':
          horasDormirTexto = '8 horas o más';
          break;
        case '6-8hs':
          horasDormirTexto = '6-8 horas';
          break;
        case 'menos6hs':
          horasDormirTexto = 'Menos de 6 horas';
          break;
        case 'insomnio':
          horasDormirTexto = 'Tengo mucho insomnio o duermo entrecortado';
          break;
        default:
          break;
      }

      let actividadFisicaTexto;
      switch (paciente.data().actividadFisica) {
        case 'gymPesas':
          actividadFisicaTexto = 'Gym (pesas)';
          break;
        case 'gymPesasCardio':
          actividadFisicaTexto = 'Gym (pesas+cardio)';
          break;
        case 'clases':
          actividadFisicaTexto = 'Clases (crossfit, funcional, spinning)';
          break;
        case 'deporte':
          actividadFisicaTexto = paciente.data().cualDeporte;
          break;
        case 'otro':
          actividadFisicaTexto = paciente.data().otroActividadFisica;
          break;
        default:
          break;
      }

      let frecuenciaAFTexto;
      switch (paciente.data().frecuenciaAF) {
        case '3vecesomenos':
          frecuenciaAFTexto = '3 veces a la semana o menos';
          break;
        case '3-5veces':
          frecuenciaAFTexto = '3-5 veces a la semana';
          break;
        case '5vecesomas':
          frecuenciaAFTexto = 'Más de 5 veces a la semana';
          break;
        default:
          break;
      }

      let duracionAFTexto;
      switch (paciente.data().duracionAF) {
        case '45-60min':
          duracionAFTexto = '45-60 minutos';
          break;
        case '60-90min':
          duracionAFTexto = '60-90 minutos';
          break;
        case 'mas90min':
          duracionAFTexto = 'Más de 90 minutos';
          break;
        case 'otro':
          duracionAFTexto = paciente.data().otroDuracionAF;
          break;
        default:
          break;
      }

      let horarioAFTexto;
      switch (paciente.data().horarioAF) {
        case 'primeraHora':
          horarioAFTexto = 'A primera hora';
          break;
        case 'manana':
          horarioAFTexto = 'Por la mañana';
          break;
        case 'mediodia':
          horarioAFTexto = 'Mediodía';
          break;
        case 'siesta':
          horarioAFTexto = 'Siesta o media tarde';
          break;
        case 'tarde':
          horarioAFTexto = 'Tarde';
          break;
        case 'noche':
          horarioAFTexto = 'Noche';
          break;
        default:
          break;
      }

      let calidadAlimentacionTexto;
      switch (paciente.data().calidadAlimentacion) {
        case 'poco':
          calidadAlimentacionTexto =
            'POCO que mejorar, la mayor parte del tiempo consumo alimentos de calidad nutricional';
          break;
        case 'bastante':
          calidadAlimentacionTexto =
            'BASTANTE que mejorar, diría que estoy en un 50-50%';
          break;
        case 'mucho':
          calidadAlimentacionTexto =
            'MUCHO que mejorar, diriamente consumo alimentos de bajo valor y calidad nutricional';
          break;
        default:
          break;
      }

      let organizacionPlanificacionTexto;
      switch (paciente.data().organizacionPlanificacion) {
        case 'poco':
          organizacionPlanificacionTexto =
            'POCO que mejorar, me considero organizado, planifico las cosas que quiero realizar';
          break;
        case 'bastante':
          organizacionPlanificacionTexto =
            'BASTANTE que mejorar, diría que estoy en un 50-50%';
          break;
        case 'mucho':
          organizacionPlanificacionTexto =
            'MUCHO que mejorar, vivo improvisando';
          break;
        default:
          break;
      }

      let habilidadCocinaTexto;
      switch (paciente.data().habilidadCocina) {
        case 'malo':
          habilidadCocinaTexto = 'Malo, soy un peligro en la cocina';
          break;
        case 'quieroAprender':
          habilidadCocinaTexto = 'Malo pero quiero aprender';
          break;
        case 'meDefiendo':
          habilidadCocinaTexto = 'Me defiendo';
          break;
        case 'meGusta':
          habilidadCocinaTexto = 'Me gusta cocinar o lo hago con frecuencia';
          break;
        default:
          break;
      }

      let organizarAlmuerzosCenasTexto;
      switch (paciente.data().organizarAlmuerzosCenas) {
        case 'recetasMomento':
          organizarAlmuerzosCenasTexto = 'Recetas para cocinar en el momento';
          break;
        case 'opcionesCompra':
          organizarAlmuerzosCenasTexto = 'Opciones para comprar directamente';
          break;
        case 'cocinar2o3dias':
          organizarAlmuerzosCenasTexto =
            'Quiero cocinar para 2 a 3 días, así llegar o llevar y comer directamente';
          break;
        case 'almuerzoSemanaCenasMomento':
          organizarAlmuerzosCenasTexto =
            'Quiero preparar de una vez el almuerzo para toda la semana y las cenas preparar en el momento';
          break;
        default:
          break;
      }

      setState({
        nombreYApellido: paciente.data().nombreYApellido,
        fechaDeNacimiento: paciente.data().fechaDeNacimiento,
        edad: paciente.data().edad,
        documento: paciente.data().documento,
        sexo: sexoTexto,
        pais: paciente.data().pais,
        ciudad: paciente.data().ciudad,
        telefono: paciente.data().telefono,
        correo: paciente.data().correo,
        profesion: paciente.data().profesion,
        hijos: paciente.data().hijos,
        conQuienVive: conQuienViveTexto,
        peso: paciente.data().peso ? paciente.data().peso : '',
        estatura: paciente.data().estatura ? paciente.data().estatura : '',
        imc: paciente.data().imc,
        patologiaBase: patologiaBaseTexto,
        otroPatologiaBase: paciente.data().otroPatologiaBase,
        intoleranciaOAlergia: intoleranciaOAlergiaTexto,
        otroIntoleranciaOAlergia: paciente.data().otroIntoleranciaOAlergia,
        medicamento: medicamentoTexto,
        cualMedicamento: paciente.data().cualMedicamento,
        suplemento: suplementoTexto,
        cualSuplemento: paciente.data().cualSuplemento,
        conductaAlimentaria: conductaAlimentariaTexto,
        objetivo: objetivoTexto,
        molestiaRecurrente: molestiaRecurrenteTexto,
        otroMolestiaRecurrente: paciente.data().otroMolestiaRecurrente,
        horarioRutinaDiaria: paciente.data().horarioRutinaDiaria,
        horasDormir: horasDormirTexto,
        actividadFisica: actividadFisicaTexto,
        cualDeporte: paciente.data().cualDeporte,
        otroActividadFisica: paciente.data().otroActividadFisica,
        frecuenciaAF: frecuenciaAFTexto,
        duracionAF: duracionAFTexto,
        otroDuracionAF: paciente.data().otroDuracionAF,
        horarioAF: horarioAFTexto,
        calidadAlimentacion: calidadAlimentacionTexto,
        organizacionPlanificacion: organizacionPlanificacionTexto,
        alimentoNoConsumible: paciente.data().alimentoNoConsumible,
        habilidadCocina: habilidadCocinaTexto,
        organizarAlmuerzosCenas: organizarAlmuerzosCenasTexto,
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

  return (
    <PDFViewer width={'100%'} height={'100%'}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.body}>
            <View style={styles.title}>
              <Text>Datos personales del paciente</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Nombre y Apellido:</Text>{' '}
                  {state.nombreYApellido}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Fecha de nacimiento:</Text>{' '}
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
                  <Text style={styles.textBold}>CI / DNI:</Text>{' '}
                  {state.documento}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Sexo:</Text> {state.sexo}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>País:</Text> {state.pais}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Ciudad:</Text> {state.ciudad}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Teléfono:</Text>{' '}
                  {state.telefono}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Correo:</Text> {state.correo}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Profesión / Ocupación:</Text>{' '}
                  {state.profesion}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>N° Hijos:</Text> {state.hijos}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Con quien vive:</Text>{' '}
                  {state.conQuienVive}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Peso (kg):</Text> {state.peso}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Estatura (cm):</Text>{' '}
                  {state.estatura}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill2}>
                <Text>
                  <Text style={styles.textBold}>IMC (peso/estatura):</Text>{' '}
                  {state.imc}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Patología de base:</Text>{' '}
                  {state.patologiaBase}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>
                    Alguna intolerancia o alergia alimentaria:
                  </Text>{' '}
                  {state.intoleranciaOAlergia}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>
                    ¿Estás consumiendo algún medicamento?:
                  </Text>{' '}
                  {state.medicamento}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>
                    ¿Estás consumiendo algún suplemento complemento dietario?:
                  </Text>{' '}
                  {state.suplemento}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>
                    ¿Problemas de conducta alimentaria?:
                  </Text>{' '}
                  {state.conductaAlimentaria}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Objetivo:</Text>{' '}
                  {state.objetivo}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>
                    ¿Sientes algún tipo de molestia recurrente?:
                  </Text>{' '}
                  {state.molestiaRecurrente}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Horario y Rutina:</Text>{' '}
                  {state.horarioRutinaDiaria}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>
                    ¿Cuántas horas duermes en promedio?:
                  </Text>{' '}
                  {state.horasDormir}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>
                    ¿Que tipo de actividad física estás realizando?:
                  </Text>{' '}
                  {state.actividadFisica}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>
                    Frecuencia de tu actividad física:
                  </Text>{' '}
                  {state.frecuenciaAF}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>
                    Duración de tu actividad física por sesión:
                  </Text>{' '}
                  {state.duracionAF}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>
                    ¿En qué horario sueles realizar con mayor frecuencia tu
                    actividad física?:
                  </Text>{' '}
                  {state.horarioAF}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>Calidad de alimentación:</Text>{' '}
                  {state.calidadAlimentacion}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>
                    Organización y planificación:
                  </Text>{' '}
                  {state.organizacionPlanificacion}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>
                    ¿Hay algún alimento/s que no consumas?:
                  </Text>{' '}
                  {state.alimentoNoConsumible}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>
                    Tu desenvolvimiento en la cocina:
                  </Text>{' '}
                  {state.habilidadCocina}
                </Text>
              </View>
              <View style={styles.fill0}>
                <Text>
                  <Text style={styles.textBold}>
                    ¿Cómo te gustaría organizarte con los almuerzos y las
                    cenas?:
                  </Text>{' '}
                  {state.organizarAlmuerzosCenas}
                </Text>
              </View>
            </View>
          </View>
        </Page>
        <Page size="A4" style={styles.page}>
          <View style={styles.body}>
            <View style={styles.row}>
              <View style={styles.fill2}>
                <Text>
                  <Text style={styles.textBold}>
                    ¿Estás considerando utilizar algún suplemento?:
                  </Text>{' '}
                  {state.suplementoConsiderado}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill2}>
                <Text>
                  <Text style={styles.textBold}>Desayuno:</Text>{' '}
                  {state.desayuno}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill2}>
                <Text>
                  <Text style={styles.textBold}>Almuerzo:</Text>{' '}
                  {state.almuerzo}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill2}>
                <Text>
                  <Text style={styles.textBold}>Merienda:</Text>{' '}
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
            <View style={styles.row}>
              <View style={styles.fill2}>
                <Text>
                  <Text style={styles.textBold}>
                    ¿Qué dirías que es lo peor de tu alimentación hoy en día?:
                  </Text>{' '}
                  {state.loPeorAlimentacion}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill2}>
                <Text>
                  <Text style={styles.textBold}>
                    ¿Qué dirías que es lo mejor o algunos hábitos saludables que
                    ya tienes incorporados?:
                  </Text>{' '}
                  {state.loMejorHabitos}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.fill2}>
                <Text>
                  <Text style={styles.textBold}>
                    Algún comentario relevante que no hayamos tocado hasta
                    ahora:
                  </Text>{' '}
                  {state.algunComentario}
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
