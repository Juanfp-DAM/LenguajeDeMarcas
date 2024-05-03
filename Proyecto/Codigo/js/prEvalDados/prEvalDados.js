

//J1
function resultadoJ1(){
    let nTiradas=document.getElementById('lanzaJ1').value;
    lanzarDadoJ1(nTiradas);
}
//J2
function resultadoJ2(){
    let nTiradas=document.getElementById('lanzaJ2').value;
    lanzarDadoJ2(nTiradas);
}

//lanzamiento J1
function lanzarDadoJ1(parametro){
    let numeroDJ1;
    let sumaDJ1;
    let almacenaArrayTiradas=new Array;
    almacenaArrayTiradas.length=parametro;
    for(let i=0; i<almacenaArrayTiradas.length; i++){
        numeroDJ1=resultadoRandom();
        almacenaArrayTiradas[i]=numeroDJ1;
        sumaDJ1+=numeroDJ1;
    }

    let resultado="";
    for (let k = 0; k <almacenaArrayTiradas.length; k++) {
        if(k<almacenaArrayTiradas.length-1){
            resultado+=almacenaArrayTiradas[k]+", ";
        }else{
            resultado+=almacenaArrayTiradas[k]+".";
        }
    }
    document.getElementById('muestraj1').textContent=resultado; 
    document.getElementById('sumaTiradasJ2').textContent="La suma es: " + sumaDJ1; 
}
//lanzamiento J2
function lanzarDadoJ2(parametro){
    let numeroDado;
    let sumaDados=0;
    let almacenaArrayTiradas=new Array;
    almacenaArrayTiradas.length=parametro;
    for(let i=0; i<almacenaArrayTiradas.length; i++){
        numeroDado=resultadoRandom();
        almacenaArrayTiradas[i]=numeroDado;
        sumaDados+=numeroDado;
    
    }

    let resultado="";
    
    for (let k = 0; k <almacenaArrayTiradas.length; k++) {
        if(k<almacenaArrayTiradas.length-1){
            resultado+=almacenaArrayTiradas[k]+", ";

        }else{
            resultado+=almacenaArrayTiradas[k]+".";
        }
    }
    document.getElementById('muestraj2').textContent=resultado; 
    document.getElementById('sumaTiradasJ2').textContent="La suma es: " + sumaDados; 
}

//Comparar quien gana:
function comparaResultados(){
    let valorSumaJ1=lanzarDadoJ1.sumaDJ1;
    let valorSumaJ2=lanzarDadoJ2.sumaDados;
    if(valorSumaJ1>valorSumaJ2){
        document.getElementById('ronda1').textContent="1 punto para el Jugador 1 con un resultado de: " + valorSumaJ1 + "frente a: " +valorSumaJ2; 
    }
}


//Numero Random
function resultadoRandom(){
    let nRandom=Math.random()*(7-1)+1;
    let nInt=Math.floor(nRandom);
    return nInt;
}