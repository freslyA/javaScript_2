function crearTarjetas(){
    let desde =recuperarNumero("txtInicio")
    let hasta =recuperarNumero("txtFinal")
    let saltos=recuperarNumero("txtCambio")
    let tarjeta= document.getElementById("divTarjetas")
    let contenido=""
    for(desde;desde<=hasta;desde+=saltos){
        contenido=contenido+"<div class=item>"+desde+"</div>"
        tarjeta.innerHTML=contenido
    }
}
