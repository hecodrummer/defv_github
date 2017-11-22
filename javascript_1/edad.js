var anion = prompt("escribe el año en que naciste");
var anio = prompt("qué año es");
var edad= anio - anion;

alert("Tu edad es " + edad);

if(edad < 18){
	alert("eres menor de edad");
} else {
	alert("eres mayor de edad");
	var pais=prompt("escribe tu país");
	if (pais == "mexico" || pais == "México" || pais =="Mexico"){
		alert("acude por tu INE");
		} else {
			alert("visita México");
		}
	}








//< menor que
//> mayor que
//<= menor o igual
//>= mayor o igual
