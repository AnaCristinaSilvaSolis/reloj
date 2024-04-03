let mostrarFecha = document.getElementById('fecha');
let mostrarHora = document.getElementById('hora');

let fecha = new Date();

let daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
let monthsOfYear = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

mostrarFecha.innerHTML = `${daysOfWeek[fecha.getDay()]}, ${fecha.getDate()}, de ${monthsOfYear[fecha.getMonth()]} de ${fecha.getFullYear()}`;

setInterval(() => {
  let hora = new Date();
  mostrarHora.innerHTML = hora.toLocaleTimeString()
}, 1000);