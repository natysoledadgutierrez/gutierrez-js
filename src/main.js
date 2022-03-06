//DESAFIO SIMULADOR INTERACTIVO
function mostrarFechaHoraActual() {
    let fechaHoraActual = new Date();
    let mes = fechaHoraActual.getMonth() + 1;
    let anio = fechaHoraActual.getFullYear();
    let dia = fechaHoraActual.getDate();
    let numeroDiaSemana = fechaHoraActual.getDay();
    let hora = fechaHoraActual.getHours();
    let minutos = fechaHoraActual.getMinutes();
    let segundos = fechaHoraActual.getSeconds();
    minutos = agregarCeroIzquierda(minutos);
    segundos = agregarCeroIzquierda(segundos);
    mes = agregarCeroIzquierda(mes);
    dia = agregarCeroIzquierda(dia);
    let htmlHoraMinutosSegundos = "<b>" + hora + " : " + minutos + " : " + segundos + "</b>";
    let fecha = "<b>" + dia + "-" + mes + "-" + anio + "</b>";
    let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let nombreDiaHoy = diasSemana[numeroDiaSemana];

    document.getElementById("reloj").innerHTML = htmlHoraMinutosSegundos;
    document.getElementById("fecha").innerHTML = nombreDiaHoy + " " + fecha;
    setTimeout(() => mostrarFechaHoraActual(), 1000);
}
function agregarCeroIzquierda(numero){
    if (numero < 10){
        numero = "0" + numero;
    }
    return numero;
}