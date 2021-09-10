const formatearFecha = (fecha) => {
  const anho = fecha.substring(0, 4);
  const mes = fecha.substring(5, 7);
  const dia = fecha.substring(8, 10);

  const newFecha = `${dia}-${mes}-${anho}`;

  return newFecha;
};

export default formatearFecha;
