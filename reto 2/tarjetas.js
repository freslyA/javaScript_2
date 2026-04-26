function crearTarjetas(){
    let desde =recuperarNumero("txtDesde")
    let hasta =recuperarNumero("txtHasta")
    let saltos=recuperarNumero("txtSalto")
    let tarjeta= document.getElementById("divTarjetas")
    let contenido=""
    for(desde;desde<=hasta;desde+=saltos){
        contenido=contenido+"<div class=item>"+desde+"</div>"
        tarjeta.innerHTML=contenido
    }
}
