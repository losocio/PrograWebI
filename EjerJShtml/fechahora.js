//var ref;

function fecha(){
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes =  fecha.getMonth() + 1;
    var anio = fecha.getFullYear();

    document.getElementById("fecha").innerHTML = dia + "/" + mes + "/" + anio;
}

function hora(){
    var fecha = new Date();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
    var segundo = fecha.getSeconds();

    document.getElementById("reloj").innerHTML = hora + ":" + minuto + ":" + segundo;
}

function main(){
    fecha();
    hora();
    var ref = setInterval(hora, 1000);
}