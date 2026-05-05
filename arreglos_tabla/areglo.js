let edadesIzquierdo = [12,15];
let edadesDerecho = [20,25]
function agregarEdad() {
    edad = recuperarInt("edad")
    edadesIzquierdo.push(edad)
    edadesDerecho.push(edad)
    pintarIzquierda()
    pintarDerecha()
}
function pintarIzquierda() {
    let tabla = document.getElementById("tablaIzquierda")
    let contenido = ""
    for (i = 0; i < edadesIzquierdo.length; i++) {
        recuperado=edadesIzquierdo[i];
        contenido += `
        <tr> 
            <td>${recuperado}</td>
            <td>
                <button onclick="eliminarIzquierdo(${i})" class="btn-eliminar">Eliminar</button>
            </td>
            <td>
                <button onclick="moverDerecha(${i})" class="btn-mover">➜</button>
            </td>
        </tr>`;
    }
    tabla.innerHTML=contenido
}
function eliminarIzquierdo(indice){
    edadesIzquierdo.splice(indice,1)
    pintarIzquierda()
}
function pintarDerecha() {
    let tabla = document.getElementById("tablaDerecha")
    let contenido = ""
    for (i = 0; i < edadesDerecho.length; i++) {
        recuperado=edadesDerecho[i];
        contenido += `
        <tr> 
            <td>${recuperado}</td>
            <td>
                <button onclick="eliminarDerecha(${i})" class="btn-eliminar">Eliminar</button>
            </td>
            <td>
                <button onclick="moverIzquierda(${i})" class="btn-mover">⬅</button>
            </td>
        </tr>`;
    }
    tabla.innerHTML=contenido
}
function eliminarDerecha(indice){
    edadesDerecho.splice(indice,1)
    pintarDerecha()
}
function moverDerecha(indice){
    recuperado=edadesIzquierdo[indice]
    edadesDerecho.push(recuperado)
    eliminarIzquierdo(indice)
    pintarDerecha()
    pintarIzquierda()
}
function moverIzquierda(indice){
    recuperado=edadesDerecho[indice]
    edadesIzquierdo.push(recuperado)
    eliminarDerecha(indice)
    pintarDerecha()
    pintarIzquierda()
}