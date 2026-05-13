
  let clientes = [];
  let creditos = [];

  let tasaInteres = 15;
  let clienteSeleccionado = null;
  let cuotaCalculada = 0;
  let montoCalculado = 0;
  let plazoCalculado = 0;
  let creditoAprobado = false;

function ocultarSecciones(){
  document.getElementById("parametros").classList.remove("activa");
  document.getElementById("clientes").classList.remove("activa");
}
function mostrarSeccion(id){
  ocultarSecciones()
  document.getElementById(id).classList.add("activa");
}
function guardarTasa(){
  tasa=recuperarInt("tasaInteres")
  if(tasa>=10 && tasa<=20){
    alert("tasa configurada correctamente: 15%")
  }else{
    alert("la tasa debe estar entre 10% y 20%")
  }
}
function guardarCliente(){
  let cliente= {}
  cedula=recuperaraTexto("txtCedula")
  nombre=recuperaraTexto("txtNombre")
  apellido=recuperaraTexto("txtApellido")
  ingresos=recuperarFloat("txtIngresos")
  egresos=recuperarFloat("txtEgresos")
  cliente.cedula=cedula
  cliente.nombre=nombre
  cliente.apellido=apellido
  cliente.ingresos=ingresos
  cliente.egresos=egresos
  clientes.push(cliente)
  pintarCliente()
}
function pintarCliente(){
  let tabla=document.getElementById("tablaClientes")
  let contenido=""
  for(i=0;i<clientes.length;i++){
    elemento=clientes[i]
    contenido+= "<tr>"+
          "<td>"+elemento.cedula+"</td>"+
          "<td>"+elemento.nombre+"</td>"+
          "<td>"+elemento.apellido+"</td>"+
          "<td>"+elemento.ingresos+"</td>"+
          "<td>"+elemento.egresos+"</td>"+
          "<td>"+
            "<button>Actualizar</button>"+
            "<button>Eliminar</button>"+
          "</td>"+
        "</tr>"
  }
  tabla.innerHTML=contenido
}
  
//Para recuperar o mostrar información usar los métodos de la clase utilitarios, puede agregar métodos adicionales en utilitarios