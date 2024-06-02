const modificarMesAnyo = document.querySelector(".mesAnyo"),
obtenDia = document.querySelector(".dias");



let obtenerFecha = new Date(), /*Obtengo la fecha*/
anyo = obtenerFecha.getFullYear(), /*del date extraigo el año y lo almaceno*/
mes = obtenerFecha.getMonth();
console.log(obtenerFecha, anyo,mes)

const arrMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


//Inicializar los eventos 
const arrEventos = [
    { dia: 20, mes: 4, anyo: 2024, evento: "Presentación de resultados de Nanoco" }, //Mayo
    { dia: 4, mes: 5, anyo: 2024, evento: "Presentación de resultados de Nvidia" }, //Junio
    { dia: 12, mes: 5, anyo: 2024, evento: "Presentación de resultados de Alphabet" } //Junio
];


const crearCalendario = () => {
    let primerDiaMes = new Date (anyo, mes, 1).getDay();//Obtiene el primer dia del mes
    /*0 es domingo y sabado es 6 pero mi semana empieza por lunes no domingo
    pero mi calendario empieza por lunes por lo que si:
    primerDiaDelMes es 0 (domingo) se le establece el valor 6, sino lo es se le resta 1 para posicionarlo acorde*/
    primerDiaMes = (primerDiaMes === 0) ? 6 : primerDiaMes - 1;
    let nDiasMesActual = new Date(anyo, mes +1, 0).getDate(); //Obtiene la cantidad de dias que tiene el mes
    let ultimoDiaMesAnterior = new Date(anyo, mes, nDiasMesActual).getDay();  //obtiene el último día del mes.
    let ultimaFechaMesAnterior = new Date(anyo, mes, 0).getDate(); //Obtiene la cantidad de dias que tiene el mes anterior.
    

    let insertarDiaLi = "";

    /*Rellena la lista con dias del mes anterior para cubrir la semana.*/
    for(let i=primerDiaMes; i>0; i--){
        insertarDiaLi += `<li class="desactivado">${ultimaFechaMesAnterior - i + 1}</li>`;
    }

    /*Rellena la lista con los días del mes actual*/
    for(let i = 1; i <= nDiasMesActual; i++){  
        //Guarda el dia actual y le dotamos del estilo de hoy en css
        let obtenerHoy = i === obtenerFecha.getDate() && mes === new Date().getMonth() && anyo === new Date().getFullYear() ? "hoy" : ""; 
        //Comprobar si el dia tiene un evento y que lo marque.
        let evento = arrEventos.find(evento =>evento.dia === i && evento.mes === mes && evento.anyo === anyo);
        let asignarClaseAEvento = evento ? "evento" : ""; //la clase también se llama evento

        insertarDiaLi +=`<li class="${obtenerHoy}${asignarClaseAEvento}" data-evento="${evento ? evento.evento : ''}">${i}</li>`;
    }


    //Rellena los dias del mes siguiente
    for(let i = ultimoDiaMesAnterior; i <= 6; i++){
        insertarDiaLi += `<li class="desactivado">${i - ultimoDiaMesAnterior +1}</li>`;   
    }

    modificarMesAnyo.innerText = `${arrMeses[mes]} ${anyo}`;
    obtenDia.innerHTML = insertarDiaLi;

    // Añadir evento de clic a los días con eventos
    document.querySelectorAll(".evento").forEach(dia => {
        dia.addEventListener("click", () => {
            alert(`Evento: ${dia.getAttribute("data-evento")}`);
        });
    });
}

crearCalendario();

function siguiente(){
    mes++;
    if(mes<0 || mes>11){
        obtenerFecha = new Date(anyo, mes);
        anyo = obtenerFecha.getFullYear();
        mes = obtenerFecha.getMonth();
    }else{
        obtenerFecha = new Date();
    }
    crearCalendario();
}

function atras(){
    mes--;
    if(mes<0 || mes>11){
        obtenerFecha = new Date(anyo, mes);
        anyo = obtenerFecha.getFullYear();
        mes = obtenerFecha.getMonth();
    }else{
        obtenerFecha = new Date();
    }
    crearCalendario();
}

