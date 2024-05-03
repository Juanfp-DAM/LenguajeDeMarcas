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
    //La asignatura 1
    let asignatura1=document.getElementById('asignatura1').value;
    
    //la asignatura 2
    let asignatura2=document.getElementById('asignatura2').value;

    //Se crean los arrays con los alumnos para cada asignatura
    let asig1=["Hilo", "Juan", "Omar", "Javi", "Angel", "David"];
    let asig2=["Dani", "Hilo", "Pere", "Isaac", "Miguel","David"];
    let asig3=["Christian", "Kevin", "Juan", "Hakeem", "Fran","David"];
    let asig4=["Mael", "Brais", "Omar", "Suman", "Angel","David"];
    let asig5=["Javi", "Carmen", "Aitor", "Edgar", "JuanVi","David"]
    
    //Para relacionar la asignatura elegida con el array de alumnos de esa asignatura se hace switch.
    let almacenaArrayAsignatura1=new Array;
    switch (asignatura1){
        case "1":
        almacenaArrayAsignatura1=asig1;
        break;
        case "2":
        almacenaArrayAsignatura1=asig2;
        break;
        case "3":
        almacenaArrayAsignatura1=asig3;
        break;
        case "4":
        almacenaArrayAsignatura1=asig4;
        break;
        case "5":
        almacenaArrayAsignatura1=asig5;
        break;
    }

    let almacenaArrayAsignatura2=new Array;
    switch (asignatura2){
        case "1":
        almacenaArrayAsignatura2=asig1;
        break;
        case "2":
        almacenaArrayAsignatura2=asig2;
        break;
        case "3":
        almacenaArrayAsignatura2=asig3;
        break;
        case "4":
        almacenaArrayAsignatura2=asig4;
        break;
        case "5":
        almacenaArrayAsignatura2=asig5;
        break;
    }
    //Vamos a ver que alumnos coinciden en las distintas asignaturas.
    let arrayCoincide=new Array;
    let cuenta=0;
    if(asignatura1!=asignatura2){
        for(let i=0; i<almacenaArrayAsignatura1.length; i++){
            for(let j=0; j<almacenaArrayAsignatura2.length; j++){
                if(almacenaArrayAsignatura1[i].match(almacenaArrayAsignatura2[j])){
                        arrayCoincide[cuenta]=asig1[i];
                        cuenta++;
                }
            }
        }
        let contenido="";
        for (let k = 0; k <cuenta; k++) {
            if(k<cuenta-1){
                contenido+=arrayCoincide[k]+", ";
            }else{
                contenido+=arrayCoincide[k]+".";
            }
        }
        document.getElementById('alumCoinciden').textContent=contenido;    
    }        
}


function dibujaCuadrado(){
    let dibujarElCaracter=document.getElementById('caracter').value;
    let caracterColor=document.getElementById('caracter').value;
    let numColumnas=document.getElementById('nColumnas').value;
    //caracterColor.style.color="red";
    
    for(let i=0; i<=numColumnas; i++){
        for(let j=0; j<=numColumnas; j++){
            if(i=0 || (i=numColumnas)){
                document.getElementById('dibujoDelCuadrado').textContent=caracterColor+<br></br>;            
            }else if(j=0 || (j=numColumnas)){
                document.getElementById('dibujoDelCuadrado').textContent=caracterColor;
            }else{
                document.getElementById('dibujoDelCuadrado').textContent=dibujarElCaracter;
            }
        }
        //document.write("\n");
    }
}