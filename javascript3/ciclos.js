var arreglo = [1,3,5,45,6,7,2,54,8,23,10,35,17,1,6,2,6,1,3,2,9];

var resultado = arreglo[0]+arreglo[1]+arreglo[2]+arreglo[3]+arreglo[4]+arreglo[5]+arreglo[6]+arreglo[7]+arreglo[8]+arreglo[9]+arreglo[10]+arreglo[11]+arreglo[12]+arreglo[13]+arreglo[14]+arreglo[15]+arreglo[16]+arreglo[17]+arreglo[18]+arreglo[19]+arreglo[20];

console.log (resultado);

// ! es un operador lógico que significa negación

// .length sirve para saber cuántos caracteres tiene una string o cuántos índices tiene un arreglo

ejemplo:

var MyVar = [12, 2, 4, 6, 21, 5,];

console.log(MyVar.length) 

// me va a mostrar 6 porque son 6 índices los que forman el arreglo

//los for necesitan 3 parámetros para funcionar
// 1 el "contador" que empieza en cero
// 2 donde va a acabar - dónde el contador se va a detener
// 3 cuánto va a aumentar el contador

var VarArreglo = [2, 4 ,5, 6 ,1 ,5 ,8 , 6, 9, 2]

var i 

var suma = 0

for (i = 0; i < VarArreglo.length ; i ++) {

	//console.log(VarArreglo[i])

	suma = suma + VarArreglo[i]
}

-----------------------------------------------------

var VarArreglo = ["a", "b" ,"c", "d" ,"e"]

var i 

var suma = 0

for (i = 0; i < VarArreglo.length ; i ++) {

	//console.log(VarArreglo[i])

	suma = suma + VarArreglo[i]
}

-----------------------------------------------------

//EJERCICIO: preguntar una palabra o frase e imprimir cada letra por separado

//primero ponemos un arreglo vacío para que los indices sean ocupados por la palabra mediante prompt.

var pregunta = [];
var pregunta = prompt();


//console.log (pregunta[1])

var i

for (i = 0; i < pregunta.length ; i ++) {

	//console.log(VarArreglo[i])

	suma = suma + pregunta[i];
}












