function listarNumeros(){
    for(let i=0;i<=3;i++){
        console.log(i)
    }
}
function listarNumerosReversa(){
    for(let i=3;i>0;i--){
        console.log(i)
    }
}
function listarNumerosPares(){
    for(let i=0;i<10;i+=2){
        console.log(i)
    }
}
function listarNumerosImpares(){
    for(let i=1;i<=7;i+=2){
        console.log(i)
    }
}
function ejecutar(numEjercicio){
    switch(numEjercicio){
        case 1: listarNumeros();
            break;
        case 2: listarNumerosReversa();
            break;    
        case 3: listarNumerosPares();
            break; 
        case 4: listarNumerosImpares(); 
            break;    
    }
}