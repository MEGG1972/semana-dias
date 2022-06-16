let dateAsChain;
dateAsChain = parseInt(prompt("Ingrese el año 00/00/0000"));
const days = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado','domingo',];
const numberDay = new Date().getDay();
const nameDay = days[numberDay];
console.log("Nombre de día de la semana: ", nameDay);
