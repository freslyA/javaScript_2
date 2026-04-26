function recuperarNumero(id){
    let texto=document.getElementById(id)
    mensaje=texto.value
    numero=parseInt(mensaje)
    return numero
}