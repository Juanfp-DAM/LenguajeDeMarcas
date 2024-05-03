function suma(){
    let s1=document.getElementById('Sumando1').value;
    let s2=document.getElementById('Sumando2').value;
    typeof s1;
    typeof s2;
    let resultado;
    resultado = parseInt(s1) + parseInt(s2);
    document.getElementById("resultadoSuma").textContent=resultado;
}

function division(){
    let d1=document.getElementById('dividendo').value;
    let d2=document.getElementById('divisor').value;
    let resultadoDiv;
    if(parseFloat(d2)>0){
        resultadoDiv=(parseFloat(d1)/parseFloat(d2));
        document.getElementById('cociente').textContent=resultadoDiv;
    }else{
        document.getElementById('cociente').textContent="No se puede dividir"
    }   
   
}


function ecuacion2G(){
    //Para asignar valor por defecto se usa OR(||) y el valor
    let a=parseFloat(document.getElementById('seG').value)||0;
    let b=parseFloat(document.getElementById('priG').value)||0;
    let c=parseFloat(document.getElementById('indeP').value)||0;
    let ecRaiz=((b*b)-(4*a*c));
    if(a==0){
        let ec1G=((-1)*c)/b;
        document.getElementById('solucion').textContent="Esto es una ecuación primer grado, el valor de x:"+ec1G;
    }else if(ecRaiz<0){
        document.getElementById('solucion').textContent="Se trata números complejos";
    
    }else{
        ec1=((b*(-1))+(Math.sqrt(ecRaiz)))/(2*a);
        //ec1=(parseFloat(b*(-1))+parseFloat(Math.sqrt(ecRaiz)))/(2*parseFloat(a));
        //ec2=(parseFloat(b*(-1))-parseFloat(Math.sqrt(ecRaiz)))/(2*parseFloat(a));
        ec2=((b*(-1))-(Math.sqrt(ecRaiz)))/(2*a);
        if(ec1==ec2){
            document.getElementById('solucion').textContent="Solución doble: " + ec1;
        }else{
            document.getElementById('solucion').textContent="Solución 1: " + ec1 + " Solución 2: " + ec2;
        }
    }
}

function arrayAsignatura(){
    let asignatura1=document.getElementById('asignatura1').id;
    let asignatura2=document.getElementById('asignatura2').id;
    let asig1=["Hilo", "Juan", "Omar", "Javi", "Angel", "David"];
    let asig2=["Dani", "Hilo", "Pere", "Isaac", "Miguel","David"];
    let asig3=["Christian", "Kevin", "Juan", "Hakeem", "Fran","David"];
    let asig4=["Mael", "Brais", "Omar", "Suman", "Angel","David"];
    let asig5=["Javi", "Carmen", "Aitor", "Edgar", "JuanVi","David"]
    

    /*if(asignatura1!=asignatura2){
        
        for(let i=0; i<asig1.length; i++){
            for(let j=0)
        }
    }*/


    /*if(asignatura1=="Base de Datos"){
        asignatura1=asig1;
    }else if(asignatura1=="Lenguaje de Marcas"){
        asignatura1=asig2;
    }else if(asignatura1=="Programación"){
        asignatura1=asig3;
    }else if(asignatura1=="Entornos de desarrollo"){
        asignatura1=asig4;
    }else if(asignatura1=="Sistemas Informáticos"){
        asignatura1=asig5;
    }else{
        console.error("Seleccione una asignatura");
    }

    if(asignatura2=="Base de datos"){
        asignatura2=asig1;
    }else if(asignatura2=="Lenguaje de Marcas"){
        asignatura2=asig2;
    }else if(asignatura2=="Programación"){
        asignatura2=asig3;
    }else if(asignatura2=="Entornos de desarrollo"){
        asignatura2=asig4;
    }else if(asignatura2=="Sistemas Informáticos"){
        asignatura2=asig5;
    }else{
        console.error("Seleccione una asignatura");
    }

    for(let i=0; i<asignatura1.length; i++){
        for(let j=0; j<asignatura2.length; j++){
             if(asignatura1[i]==asignatura2){
                document.getElementById("alumCoinciden").textContent="Son " + asignatura1;
             }
        }
    }*/
}