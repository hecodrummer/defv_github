
//FUNCIONES EN JAVASCRIPT

//haremos una función para que javascript guarde las instrucciones y las ejecute cuando sean requeridas.

function TraerNombre() {
	var MyVar = document.getElementbyId("nombre"); //este id es de la etiqueta nombre del input
	console.log(MyVar);
}


// var nombre = document.getElementById("nombre")

// function traerNombre() {
//     var nombre = document.getElementById("nombre")
//     console.log(nombre.value)

//     document.getElementById("nombreParaMostrar").innerHTML = nombre.value;
// }


function sumaDosNumeros() {
    // guardamos un input en una variable
    var num1 = document.getElementById("num1suma");
    var num2 = document.getElementById("num2suma");

    var suma = Number(num1.value) + Number(num2.value)

    // innerHTML manda datos a un elemento de HTML
    document.getElementById("resultado").innerHTML = suma

}


function restaDosNumeros() {
    // guardamos un input en una variable
    var num1resta = document.getElementById("num1resta");
    var num2resta = document.getElementById("num2resta");

    var resta = Number(num1resta.value) - Number(num2resta.value)

    // innerHTML manda datos a un elemento de HTML
    document.getElementById("resultadoResta").innerHTML = resta
}


function multiDosNumeros() {
	var num1multi = document.getElementById("factor1");
	var num2multi = document.getElementById("factor2");

	var multi = Number(num1multi.value) * Number(num2multi.value) //number es el comando para que una cadena de texto o string se convierta en un número para poder realizar la operación

	document.getElementById("resultadoMulti").innerHTML = multi
}

function divisionDosNum() {
	var num1div = document.getElementById("dividendo");
	var num2div = document.getElementById("divisor");

	var cociente = Number(num1div.value) / Number(num2div.value)

	document.getElementById("cociente").innerHTML = cociente
}

