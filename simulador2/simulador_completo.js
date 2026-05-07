
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
  
//Para recuperar o mostrar información usar los métodos de la clase utilitarios, puede agregar métodos adicionales en utilitarios