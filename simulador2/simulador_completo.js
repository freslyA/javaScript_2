
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
}
function mostrarSeccion(id) {
  ocultarSecciones()
  document.getElementById(id).classList.add("activa");
}
function guardarTasa() {
  tasa = recuperarInt("tasaInteres")
  if (tasa >= 10 && tasa <= 20) {
    alert("tasa configurada correctamente: 15%")
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
      "<button>Actualizar</button>" +
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
function selecionarCliente() {
  cedula = recuperaraTexto("cedula")
  encontrado = buscarCliente(cedula)
  if (encontrado == null) {
    alert("el cliente no existe")
  } else {

    mostrarTextoEnCaja("txtNombre", encontrado.nombre)
    mostrarTextoEnCaja("txtCedula", encontrado.cedula)
    mostrarTextoEnCaja("txtApellido", encontrado.apellido)
    mostrarTextoEnCaja("txtIngresos", encontrado.ingresos)
    mostrarTextoEnCaja("txtEgresos", encontrado.egresos)
  }
}
function modificarCliente(cliente) {
  clienteEncontrado = buscarCliente(cliente.cedula)
  if (clienteEncontrado != null) {
    clienteEncontrado.nombre = cliente.nombre
    clienteEncontrado.apellido = cliente.apellido
    clienteEncontrado
  }
}
function limpiar() {
  mostrarTextoEnCaja("txtNombre","")
  mostrarTextoEnCaja("txtCedula","" )
  mostrarTextoEnCaja("txtApellido","" )
  mostrarTextoEnCaja("txtIngresos", "")
  mostrarTextoEnCaja("txtEgresos","" )
}
//Para recuperar o mostrar información usar los métodos de la clase utilitarios, puede agregar métodos adicionales en utilitarios