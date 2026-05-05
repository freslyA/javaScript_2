let notas= [];
function agregarElemento(){
    console.log(notas.length)
}
function probarAgregar(){
    nota=recuperarInt("txtNota")
    agregarNota(nota)
}
function agregarNota(nota){
    notas.push(nota)
}
function recuperarArreglo(){
    let promedio=0
    for(i=0;i<notas.length;i++){
        recuperado=notas[i]
        promedio=promedio+recuperado
        console.log(recuperado)
    }
    let redondeado=promedio/notas.length
    console.log(redondeado.toFixed(2))
}