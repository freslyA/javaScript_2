function generarTabla(){
    let contenido=""
    let numero= recuperarNumero("numero")
    let resultado= document.getElementById("resultado")
    for(i=1;i<=10;i++){
        contenido=contenido+"<tr><td>"+numero+" x "+i+"</td><td>"+numero*i+"</td></tr>"
    }
    resultado.innerHTML=contenido
}