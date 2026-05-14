
let clientes = [];
let creditos = [];

let tasaInteres = 15;
let clienteSeleccionado = null;
let cuotaCalculada = 0;
let montoCalculado = 0;
let plazoCalculado = 0;
let creditoAprobado = false;

function ocultarSecciones() {
  document.getElementById("parametros").classList.remove("activa");
  document.getElementById("clientes").classList.remove("activa");
  document.getElementById("credito").classList.remove("activa");
}
function mostrarSeccion(id) {
  ocultarSecciones()
  document.getElementById(id).classList.add("activa");
}
function guardarTasa() {
  tasa = recuperarInt("tasaInteres")
  if (tasa >= 10 && tasa <= 20) {
    tasaInteres=tasa
    alert("tasa configurada correctamente: "+tasa+"%")
  } else {
    alert("la tasa debe estar entre 10% y 20%")
  }
}
function guardarCliente() {
  cedula = recuperaraTexto("txtCedula")
  encontrado = buscarCliente(cedula)
  if (encontrado != null) {
    nombre = recuperaraTexto("txtNombre")
    apellido = recuperaraTexto("txtApellido")
    ingresos = recuperarFloat("txtIngresos")
    egresos = recuperarFloat("txtEgresos")
    encontrado.nombre = nombre
    encontrado.apellido = apellido
    encontrado.ingresos = ingresos
    encontrado.egresos = egresos
    pintarCliente()
  } else {
    let cliente = {}
    cedula = recuperaraTexto("txtCedula")
    nombre = recuperaraTexto("txtNombre")
    apellido = recuperaraTexto("txtApellido")
    ingresos = recuperarFloat("txtIngresos")
    egresos = recuperarFloat("txtEgresos")
    cliente.cedula = cedula
    cliente.nombre = nombre
    cliente.apellido = apellido
    cliente.ingresos = ingresos
    cliente.egresos = egresos
    clientes.push(cliente)
    pintarCliente()
  }
}
function pintarCliente() {
  let tabla = document.getElementById("tablaClientes")
  let contenido = ""
  for (i = 0; i < clientes.length; i++) {
    elemento = clientes[i]
    contenido += "<tr>" +
      "<td>" + elemento.cedula + "</td>" +
      "<td>" + elemento.nombre + "</td>" +
      "<td>" + elemento.apellido + "</td>" +
      "<td>" + elemento.ingresos + "</td>" +
      "<td>" + elemento.egresos + "</td>" +
      "<td>" +
      `<button onclick="selecionarCliente(` + elemento.cedula + `)">Actualizar</button>` +
      "<button>Eliminar</button>" +
      "</td>" +
      "</tr>"
  }
  tabla.innerHTML = contenido
}
function buscarCliente(cedula) {
  let elemento
  let encontrado = null
  for (i = 0; i < clientes.length; i++) {
    elemento = clientes[i]
    if (elemento.cedula == cedula) {
      encontrado = elemento
      break;
    }
  }
  return encontrado
}
function selecionarCliente(cedula) {
  encontrado = buscarCliente(cedula)
  if (encontrado == null) {
    alert("el cliente no existe")
  } else {
    clienteSeleccionado = encontrado
    mostrarTextoEnCaja("txtNombre", encontrado.nombre)
    mostrarTextoEnCaja("txtCedula", encontrado.cedula)
    mostrarTextoEnCaja("txtApellido", encontrado.apellido)
    mostrarTextoEnCaja("txtIngresos", encontrado.ingresos)
    mostrarTextoEnCaja("txtEgresos", encontrado.egresos)
  }
}
function limpiar() {
  mostrarTextoEnCaja("txtNombre", "")
  mostrarTextoEnCaja("txtCedula", "")
  mostrarTextoEnCaja("txtApellido", "")
  mostrarTextoEnCaja("txtIngresos", "")
  mostrarTextoEnCaja("txtEgresos", "")
}
function buscarClienteCredito() {
  tabla = document.getElementById("datosClienteCredito")
  contenido = ""
  cedula = recuperaraTexto("buscarCedulaCredito")
  encontrado = buscarCliente(cedula)
  if (encontrado != null) {
    contenido +="<h3>Datos del Cliente</h3>"+
    "<p><strong>Cédula: </strong>"+encontrado.cedula+"</p>"+
    "<p><strong>Nombre: </strong>"+encontrado.nombre+"</p>"+
    "<p><strong>Apellido: </strong>"+encontrado.apellido+"</p>"+
    "<p><strong>Ingresos: </strong>"+encontrado.ingresos+"</p>"+
    "<p><strong>Egresos: </strong>"+encontrado.egresos+"</p>"
    tabla.innerHTML=contenido
  } else {
    alert("el cliente no fue encontrado")
  }

}
function calcularTotalPagar(monto,interes){
    return monto+interes
}
function calcularCuotaMensual(total,años){
    meses=años*12
    return total/meses
}
function calcularCapacidadPago(montoDisponible){
    return montoDisponible/2
}
function aprobarCredito(capacidad,cuota){
    if(capacidad>cuota){
        return true
    }else{
        return false
    }
}
function calcularDisponible(ingresos,egresos){
    let disponible=ingresos-egresos
    if(disponible<0){
        return 0
    }else {
        return disponible
    }
}
function calcularInteresSimple(monto,años){
    return (años*monto)*(tasaInteres/100)
}
function calcularCredito(){
  cedula=recuperaraTexto("buscarCedulaCredito")
  encontrado=buscarCliente(cedula)
  disponible=calcularDisponible(encontrado.ingresos,encontrado.egresos)
  capacidadPago=calcularCapacidadPago(disponible)
  capacidadPagoRedondeado=mostrarRedondeado(capacidadPago)
  monto=recuperarInt("montoCredito")
  plazo=recuperarInt("plazoCredito")
  interes=calcularInteresSimple(monto,plazo)
  totalPagar=calcularTotalPagar(monto,interes)
  totalPagarRedondeado=mostrarRedondeado(totalPagar)
  cuotaMensual=calcularCuotaMensual(monto,plazo)
  cuotaMensualRedondeado=mostrarRedondeado(cuotaMensual)
  credito=aprobarCredito(capacidadPago,cuotaMensual)
  let tabla=document.getElementById("resultadoCredito")
  tabla.innerHTML= "<h3>Datos del Credito</h3>"+
  "<p><strong>Capacidad de Pago: </strong>"+capacidadPagoRedondeado+"</p>"+
  "<p><strong>Total a Pagar: </strong>"+totalPagarRedondeado+"</p>"+
  "<p><strong>Cuota Mensual: </strong>"+cuotaMensualRedondeado+"</p>"
  if(credito==true){
    document.getElementById("btnSolicitarCredito").disabled=false
    tabla.className="aprobado"
    tabla.innerHTML+=  "<p><strong>Resultado: </strong>APROBADO</p>"
  }else{
    document.getElementById("btnSolicitarCredito").disabled=true
    tabla.innerHTML+=  "<p><strong>Resultado: </strong>NO APROBADO</p>"
    tabla.className="rechazado"
  }
// de aqui para de la lante usaremos la rama dev
}
//Para recuperar o mostrar información usar los métodos de la clase utilitarios, puede agregar métodos adicionales en utilitarios