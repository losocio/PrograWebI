var tiempo = 10;
var intervalo;
// este no lo puede leer una funcion, no se pork
//const contador = document.getElementById("contador"); 

function activar() {
    intervalo = setInterval(() => {
        if(tiempo === 1){
            clearInterval(intervalo);
            document.getElementById("contador").innerHTML = "BOOM";
        }
        else{
            //console.log(tiempo);
            document.getElementById("contador").innerHTML = "00:00:0" + --tiempo;
        }
    }, 1000); 
}

function parar() {
    clearInterval(intervalo);
}