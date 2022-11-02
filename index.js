let nombreCliente = prompt("Ingrese su nombre");
const servicioCliente = prompt("Ingrese servicio de Peluqueria (1-corte, 2-barba, 3-tintura, 4-alisado");
const diaTurno = prompt("Ingrese dia = 1-lunes 2-martes 3-miercoles 4-jueves 5-viernes 6-sabado");
const formaPago = prompt("1 -tarjeta, 2 -efectivo, 3 -debito \n (Si paga con tarjeta tiene un 10% de descuento)");
// let confirmacionTurno = confirm("Desea confirmar turno?");
// let precioServicio = 0;
// let descuento = 0;
// let precioFInal = 0;





function getServicioNombre(servicio){
  let servicioNombre = "";

  switch(servicio) {
    case "corte":
    case "1":
      servicioNombre = "Corte";
      break;
    case "barba":
    case "2":
      servicioNombre = "Barba";
      break;
    case "tintura":
    case "3":
      servicioNombre = "Tintura";
      break;
    case "alisado":
    case "4":
      servicioNombre = "Alisado";
      break;
  }

  return servicioNombre;
}

function getPrecioServicio(servicio, formaPago) {
  let precioServicio = 0;

  switch(servicio) {
    case "corte":
    case "1":
      precioServicio = 1000;
      break;
    case "barba":
    case "2":
      precioServicio = 800;
      break;
    case "tintura":
    case "3":
      precioServicio = 5000;
      break;
    case "alisado":
    case "4":
      precioServicio = 8000;
      break;
  }

  // si es pago con tarjeta, se aplica un 10% de descuento
  if (formaPago == "tarjeta" || formaPago == "1"){
    precioServicio = precioServicio - (precioServicio * 0.1)
  }

  return precioServicio;
}

function getDiaTurno(dia) {
  let fechaTurno = "";

  switch(dia) {
    case "lunes":
    case "1":
      fechaTurno = "Lunes";
      break;
    case "martes":
    case "2":
      fechaTurno = "Martes";
      break;
    case "miercoles":
    case "3":
      fechaTurno = "Miercoles";
      break;
    case "jueves":
    case "4":
      fechaTurno = "Jueves";
      break;
    case "viernes":
    case "5":
      fechaTurno = "Viernes";
      break;
    
  }

  return fechaTurno;
}

let servicioNombre = getServicioNombre(servicioCliente)
let precioServicio = getPrecioServicio(servicioCliente, formaPago);
let fecha = getDiaTurno(diaTurno)





alert("HOLA :"+nombreCliente+ " El servicio: "+ servicioNombre+" cuesta: "+ precioServicio+" y confirmo su turno para el dia "+fecha)























// cambira por switch

// const productos = 




// switch (servicioCliente){
//   case "corte" || 1:
//     console.log (precioServicio == 1000)
//     precioServicio 
//   case "efectivo" || 2:
//     console.log (precioServicio == 800)
// }
// } else if (servicioCliente == 2 || "barba") {
//   precio_servicio = "Moldeado de barba - 800$"

//  // alert("Moldeado de barba - 800$");
// } else if (servicioCliente == 3 || "tintura") {
//   alert("Tintutra - 1500$");
// } else {
//   alert("no contamos con ese servicio");
// }



// if (formaPago == "tarjeta" || "1") {
//   console.log(precioServicio - 10);
// } else if ("efectivo" || "2") {
//   console.log(precioServicio + 10);
// } else if ("debito" || "3") {
//   console.log(precioServicio + 0);
// } else {
//   alert("No contamos con ese metodo de pago");
// }

// if (confirmacionTurno == true) {
//   alert(turnoFinal());
// } else {
//   alert("te esperamos pronto " + nombreCliente);
// }

// function precioFinal(precioServicio, formaPago) {
//   console.log(precioServicio + formaPago);
//   switch (formaPago) {
//     case "1" || "tarjeta":
//       console.log(precioServicio - 10);
//       break;
//     case "2" || "efectivo":
//       console.log(precioServicio - 5);
//       break;
//     case "3" || "debito":
//       console.log(precioServicio + 15);
//       break;
//     default:
//       alert("no tenemos ese servicio");
//   }
// }

// function turnoFinal() { 
//   return ("Turno confirmado" + " " + nombreCliente + " " + servicioCliente + " " + diaTurno + " " + horarioTurno + " " + precioFinal);
// }


