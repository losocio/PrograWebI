var dato1 = promt("Introduzca dato1");
var dato2 = promt("Introduzca dato2");
var op = +promt("Introduzca operacion a realizar\n1: Multiplica\n2: Mayorque\n3: Encabezado");
// el + es para que se capte int y no caracter

switch(op){
	case 1:
		multiplica(dato1, dato2);
		break;
	case 2:
		mayorque(dato1, dato2);
		break;
	case 3:
		//encabezado();
		break;
	default:
		alert("Opcion incorrecta");
}
function multiplica(p1, p2){
	p1 = parseInt(p1);
	p2 = parseInt(p2);
	var result = p1*p2;
	document.write(p1 + ' x ' + p2 + ' = ' + result);
}

function mayorque(p1, p2){
	if(p1 > p2) document.write( p1 + ' > ' + p2);
	else if(p1 < p2) document.write( p1 + ' < ' + p2);
	else document.write( p1 + ' = ' + p2);
}

function encabezado(p1, p2){
	
}