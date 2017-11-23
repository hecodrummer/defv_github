'use strict'

var arreglo = [];




//preguntar 5 numeros con prompt y meterlos en un arreglo
//sumar los números
//imprimir

var pregunta1 = prompt("escribe un primer número");
var pregunta2 = prompt("escribe un segundo número");
var pregunta3 = prompt("escribe un tercer número");
var pregunta4 = prompt("escribe un cuarto número");
var pregunta5 = prompt("escribe un quinto número");

arreglo[0] = Number(pregunta1);
arreglo[1] = Number(pregunta2);
arreglo[2] = Number(pregunta3);
arreglo[3] = Number(pregunta4);
arreglo[4] = Number(pregunta5);

var suma = arreglo[0] + arreglo [1] + arreglo [2] + arreglo [3] + arreglo [4];

console.log(suma); 

//preguntar 5 numeros y guardarlo en un arreglo.
// evaluar si los números del arreglo son par o non.

var numeros = [];

var n1 = prompt("escribe un primer número");

numeros[0] = Number(n1);
var divisor = 2;

var mod = numeros[0]%divisor;
console.log(mod);

if (mod == 0){
	alert("Tu número es par.");
} else {
	alert("Tu número es impar.")
}


numeros[1] = Number(n2);
numeros[2] = Number(n3);
numeros[3] = Number(n4);
numeros[4] = Number(n5);


/*
var n2 = prompt("escribe un 2do número");
var n3 = prompt("escribe un 3er número");
var n4 = prompt("escribe un 4to número");
var n5 = prompt("escribe un 5to número");
*/

var nombre = prompt("Escribe tu nombre.");
var arrayNombre = nombre.split(""); 
console.log(arrayNombre);


//puedes interpretar un string como array, ejemplo:

var nombre = "casandra";
var arregloNombre = [nombre[0], nombre[1], nombre[2], nombre[3], nombre[4], nombre[5], nombre[6], nombre[7]];

//en este caso sabemos el nombre y el número de caracteres que conforman el nombre.



//problema:
//hacer una palabra intercalando mayúsculas y minusculas


var palabra = "computación";
//la variable palabra contiene un string

var arrayPalabra = [];
//declaramos un arreglo vacío

var arrayPalabra = [palabra[0],palabra[1],palabra[2],palabra[3],palabra[4],palabra[5],palabra[6],palabra[7],palabra[8],palabra[9],palabra[10]];
//asignamos valores a los índices del arreglo vacío mediante la variable palabra. (Los números entre corchetes son los índices del arrayPalabra)

console.log(arrayPalabra); 


var res = [arrayPalabra[0].toUpperCase(), arrayPalabra[2].toUpperCase(), arrayPalabra[4].toUpperCase(),  arrayPalabra[6].toUpperCase(), arrayPalabra[8].toUpperCase(), arrayPalabra[10].toUpperCase()]
//la variable res es igual al arreglo hecho por la variable palabra

console.log(res);






