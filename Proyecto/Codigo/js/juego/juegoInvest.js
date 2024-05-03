function muestraInfor(parametro){
    let eligeInfor=document.getElementById(parametro).value;
    console.log(eligeInfor);
    switch(eligeInfor){
        case "0":
            generaDatos();
            break;
        case "1":
            muestraE1(); 
            break;
    }
}

function generaDatos(){
    empresa1();
    empresa2();
    empresa3();
    empresa4();
    empresa5();
}


function muestraE1(){
    let ingresosE1=e1.ingresos;
    let textoE1=document.getElementById('resumenInfoEmpresa');
    textoE1.textContent="";
    let saltoLinea=document.createTextNode("\n");
    let datosE1=document.createTextNode("Datos Financieros de la empresa 1");
    textoE1.appendChild(datosE1);
    textoE1.appendChild(saltoLinea);
    let textoIngresos=document.createTextNode("Ingresos: " + ingresosE1);
    textoE1.appendChild(textoIngresos);

}

class Empresa{
    constructor(ingr, marg, nAcc, rPER){
        this.ingresos=ingr;
        this.margen=marg;
        this.nAcciones=nAcc;
        this.ratioPER=rPER;
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
    set ingresos(nuevoIngreso){
        this.ingresos=nuevoIngreso;
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


function empresa1(){
    let ingresos1=plantillaGeneraIngresos();
    let margen1=plantillaGeneraMargen();
    let nAcciones1=plantillaGeneraAcciones();
    let ratioPer1=plantillaGeneraPER();
    let e1 =new Empresa(ingresos1, margen1, nAcciones1, ratioPer1);
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


