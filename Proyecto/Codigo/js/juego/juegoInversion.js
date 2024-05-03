//CREACIÓN DE LA CLASE

class Empresa{
    constructor(ingresos, margen, nAcciones, ratioPER){
        this.ingresos=ingresos;
        this.margen=margen;
        this.nAcciones=nAcciones;
        this.ratioPER=ratioPER;
    }

    calculaMargen(){
        let margenEmpresa=this.ingresos*(this.margen/100);
        return margenEmpresa;
    }
    calculaBenef(){
        let impuesto=0.2;
        let beneficio=this.calculaMargen()*(1-impuesto);
        return beneficio;
    }
    calculaEPS(){
        let eps=this.beneficio/this.nAcciones;
        return eps;
    }

    calculaPrecioAccion(){
        let precioAcc=this.calculaEPS()*this.calculaBenef();
        return precioAcc;
    }

    get ingresos(){
        return this.ingresos;
    }

    get margen(){
        return this.margen;
    }
    set margen(nuevoMargen){
        this.margen=nuevoMargen;
    }

    get nAcciones(){
        return this.nAcciones;
    }


    get ratioPER(){
        return this.ratioPER;
    }

}

function generaDatos(){
    empresa1();
    empresa2();
    empresa3();
    empresa4();
    empresa5();
}

//Llamada a la creación de objetos Empresas

function empresa1(){
    let cuenta=0;
    let ingresos1=plantillaGeneraIngresos();
    let margen1=plantillaGeneraMargen();
    let nAcciones1=plantillaGeneraAcciones();
    let ratioPer1=plantillaGeneraPER();
    let e1 =new Empresa(ingresos1, margen1, nAcciones1, ratioPer1);
    //let calculaMargen1=ingresos1*margen1;
    //let impuesto1=0.8;
    //let beneficio1=calculaMargen1*impuesto1;
    //let eps1=beneficio1/nAcciones1;
    //let precioAccion1=eps1*ratioPer1;
}

function empresa2(){
    let ingresos2=plantillaGeneraIngresos();
    let margen2=plantillaGeneraMargen();
    let nAcciones2=plantillaGeneraAcciones();
    let ratioPer2=plantillaGeneraPER();
    let e2 =new Empresa(ingresos2, margen2, nAcciones2, ratioPer2);
}

function empresa3(){
    let ingresos3=plantillaGeneraIngresos();
    let margen3=plantillaGeneraMargen();
    let nAcciones3=plantillaGeneraAcciones();
    let ratioPer3=plantillaGeneraPER();
    let e3 =new Empresa(ingresos3, margen3, nAcciones3, ratioPer3);
}

function empresa4(){
    let ingresos4=plantillaGeneraIngresos();
    let margen4=plantillaGeneraMargen();
    let nAcciones4=plantillaGeneraAcciones();
    let ratioPer4=plantillaGeneraPER();
    let e4 =new Empresa(ingresos4, margen4, nAcciones4, ratioPer4);
}

function empresa5(){
    let ingresos5=plantillaGeneraIngresos();
    let margen5=plantillaGeneraMargen();
    let nAcciones5=plantillaGeneraAcciones();
    let ratioPer5=plantillaGeneraPER();
    let e5 =new Empresa(ingresos5, margen5, nAcciones5, ratioPer5);
}

/*function generadatos(){
    let ingresos= plantillaGeneraIngresos();
    let margen=plantillaGeneraMargen();
    let calculaMargen=ingresos*margen;
    let nAcciones=plantillaGeneraAcciones();
    let impuesto=0.8;
    let beneficio=calculaMargen*impuesto;
    let eps=beneficio/nAcciones;
    let ratioPer=plantillaGeneraPER();
    let precioAccion=eps*ratioPer;
}*/

function plantillaGeneraIngresos(){
    let min=15;
    let max=100;
    let numRamdom=Math.random()*(max-min)+min;
    let nIntRamdom=Math.floor(numRamdom);
    return nIntRamdom;
}

function plantillaGeneraMargen(){
    let min=5;
    let max=40;
    let margenRandom=Math.random()*(max-min)+min;
    let intMargenRandom=Math.floor(margenRandom);
    return intMargenRandom;
}

function plantillaGeneraAcciones(){
    let min=4;
    let max=30;
    let accRandom=Math.random()*(max-min)+min;
    let intAccRandom=Math.floor(accRandom);
    return intAccRandom;
}

function plantillaGeneraPER(){
    let minPER=3;
    let maxPER=50;
    let perRandom=Math.random()*(maxPER-minPER)+minPER;
    return perRandom;
}


function muestraInfor(parametro){
    let eligeInfor=document.getElementById(parametro).value;
    console.log(eligeInfor);
    switch(eligeInfor){
        case "0":
        empezar();
        case "1":
            muestraE1(); 
            break;
    }
}

function empezar(){
    generaDatos();
    //let textoReglas=document.getElementById('resumenInfoEmpresa');
    
}


function muestraE1(){
    //let ingresosE1=e1.ingresos;
    let textoE1=document.getElementById('resumenInfoEmpresa');
    textoE1.textContent="";
    let saltoLinea=document.createTextNode("\n");
    let datosE1=document.createTextNode("Datos Financieros de la empresa 1");
    textoE1.appendChild(datosE1);
    textoE1.appendChild(saltoLinea);
    let textoIngresos=document.createTextNode("Ingresos: " + e1.ingresos);
    textoE1.appendChild(textoIngresos);

}


/*function muestraReglas(){
    document.getElementById('resumenInfoEmpresa').textcontent;
}*/




//RESTOS DE jInversion.js
/*let divResultado=document.getElementById('resultadoNumero'); //Guardo el div en la variable.
        divResultado.innerHTML='';//Lo vacío antes de insertar el resultado
        let escribirResultado=document.createTextNode(resultadoJusto);
        divResultado.appendChild(escribirResultado);
        document.getElementById('resultadoNumero').innerHTML=resultadoJusto;
        divResultado.style.display = "flex";
        divResultado.style.placeItems = "center";*/
/* document.getElementById('resultadoNumero').innerHTML=resultadoJusto;
        //Como el div ya está creado, creo un nodo de texto para mostrar el resultado
        let resultadoNode = document.createTextNode(resultadoJusto);
        document.getElementById('resultadoNumero').innerHTML = '';//Para asegurarnos de que se elimina el resultado anterior.
        document.getElementById('resultadoNumero').appendChild(resultadoNode);
        //Aplico formatos para que el node se inserte en el div centrado.
        resultadoNode.style.display = "grid";
        resultadoNode.style.placeItems = "center";
*/ 

/*function comprar(){
    //se crean dos arrays para almacenar los datos enviados por el usuario
    //Array1 almacenará los datos de las empresas seleccionadas.
    let arrEmpresasSelect=[];
    let arrDineroEmpr=[];
    //Guarda todos los divs con este nombre y los elementos internos
    let almacenaDivSelecEmpresa=document.querySelectorAll('.seleccionEmpresa');
    for(let i=0; i<almacenaDivSelecEmpresa.length; i++){
        //Guardamos el valor dado de select que hay en .seleccionEmpresa[i]
        arrEmpresasSelect[i]=almacenaDivSelecEmpresa[i].querySelector('select').value;
        //Guardamos el valor dado de input que hay en .seleccionEmpresa[i]
        arrDineroEmpr[i]=almacenaDivSelecEmpresa[i].querySelector('input').value;
    }
    let sumaDinero1000=0;
    //Comprobar que la cantidad introducida está entre 0 y 1000
    for(let z=0; z<arrDineroEmpr.length; z++){
        let dineroNumero=parseFloat(arrDineroEmpr[z]);
        sumaDinero1000=sumaDinero1000+dineroNumero;
    }
    //verificar que no se introduce la misma empresa.
    let verificaDistinto=false;
    let contador=0;
    for(let a=0; a<arrEmpresasSelect.length; a++){
        for(let b=0; b<arrEmpresasSelect.length; b++){
            if(arrEmpresasSelect[a]==arrEmpresasSelect[b]){
                contador++;
                if (contador>=2){
                    verificaDistinto=true;
                    break;
                }
            }
        }
        contador=0;
    }

    if(sumaDinero1000>0 && sumaDinero1000<=1000 && !verificaDistinto){
        //Creo un array para almacenar el precioJusto de cada empresa seleccionada
        let arrPJustoSelect=[];
        for(let j=0; j<arrEmpresasSelect.length; j++){
            arrPJustoSelect[j]=calculadoraResultado(arrEmpresasSelect[j], arrDineroEmpr[j]);
        }
        //Array almacena el nAcc a comprar con el dinero introducido
        let resultadoJusto=sumaDinero1000;
        for(let k=0; k<arrEmpresasSelect.length; k++){
            //todo ver si hay que sumar mil yo creo que no
            let numeroarrPJusto=parseFloat(arrPJustoSelect[k])
            resultadoJusto=resultadoJusto+numeroarrPJusto;
            resultadoJusto=parseFloat(resultadoJusto.toFixed(2));
        }
        //document.getElementById('resultadoNumero').innerHTML=resultadoJusto;
        mostrarResultado(resultadoJusto);
        mostrarImagen(resultadoJusto);
    }else{
        alert("¡Introduzca correctamente los datos!.");
    }
    
}
*/