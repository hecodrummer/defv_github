var arreglo = [1,3,5,45,6,7,2,54,8,23,10,35,17,1,6,2,6,1,3,2,9];

var resultado = arreglo[0]+arreglo[1]+arreglo[2]+arreglo[3]+arreglo[4]+arreglo[5]+arreglo[6]+arreglo[7]+arreglo[8]+arreglo[9]+arreglo[10]+arreglo[11]+arreglo[12]+arreglo[13]+arreglo[14]+arreglo[15]+arreglo[16]+arreglo[17]+arreglo[18]+arreglo[19]+arreglo[20];

console.log (resultado);

// ! es un operador lógico que significa negación

// .length sirve para saber cuántos caracteres tiene una string o cuántos índices tiene un arreglo

ejemplo:

var MyVar = [12, 2, 4, 6, 21, 5,];

console.log(MyVar.length) 

//MiCadena tiene 3 índices, por lo tanto MiCadena.lenght me arrojará el número 3.
var MiCadena = ["lee", "stan", "roy" ]
console.log(MiCadena.length)




//asignando valores a un arreglo vacio
var ArregloVacio = [];
var ArregloVacio = prompt("escribe algo");
console.log(ArregloVacio);
console.log(ArregloVacio.length);
//arregloVacio.length mostrará el numero de caracteres (incluyendo espacios) que haya escrito el usuario.

console.log(ArregloVacio[1]); 
//aquí mostrará el segundo índice del texto insertado por el usuario en prompt. En la palabra "hola" el segundo índice es o. El número entre corchetes es el 1 porque el conteo se comienza desde cero. 

-------------------------------------------------
var i = 0; 
//esta variable es la iniciador del contador del bucle FOR

//la condición (la segunda secuencia después del punto y coma) está diciendo: si i es menor a 100
for (i = 0; i < 100; i++){
 console.log(i);
}
console.log ("fin del ciclo");



//imprimir los números del 1 al 100
//si no cumple ninguna condición, imprimir número
//evaluar cada número
//si es múltiplo de 3 imprimir fizz
//si es múltiplo de 5 imprimir buzz
//si es múltiplo de 5 y 3 imprimir fizzbuzz


var i;
var multiplo3 = i%3; 

for (i=1; i<=100; i++){ //i=1 porque así iniciamos el contador
	if (i%3 ==0 && i%5==0){
		console.log("fizzbuzz");//si la condición es verdadera va a romper el bucle y lo inicia de nuevo.
	} else if (i%3 == 0){ //i%3 es igual a 0, porque si el residuo da 0 entonces quiere decir que es múltiplo de 3.
		console.log("fizz");
	} else if (i%5 == 0){
		console.log("buzz");
	} else {
			console.log(i);
	}	
}

 


// me va a mostrar 6 porque son 6 índices los que forman el arreglo

//los for necesitan 3 parámetros para funcionar
// 1 el "contador" que empieza en cero
// 2 donde va a acabar - dónde el contador se va a detener
// 3 cuánto va a aumentar el contador

var VarArreglo = [2, 4, 5, 6, 1, 5, 8, 6, 9, 2]

var i 

var suma = 0

for (i = 0; i < VarArreglo.length ; i ++) {

	//console.log(VarArreglo[i])

	suma = suma + VarArreglo[i]
}

-----------------------------------------------------
-----------------------------------------------------

var VarArreglo = ["a", "b" ,"c", "d" ,"e"]

var i 

var suma = 0

for (i = 0; i < VarArreglo.length ; i ++) {

	//console.log(VarArreglo[i])

	suma = suma + VarArreglo[i]
}

-----------------------------------------------------
-----------------------------------------------------

//EJERCICIO: preguntar una palabra o frase e imprimir cada letra por separado

//primero ponemos un arreglo vacío para que los indices sean ocupados por la palabra mediante prompt.

var pregunta = [];
var pregunta = prompt();

console.log(pregunta)

var i;

for(i=0; i == pregunta.length; i ++ ){
	console.log(i)
}














