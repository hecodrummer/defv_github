
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
    var num1 = document.getElementById("num1")
    var num2 = document.getElementById("num2")

    var suma = Number(num1.value) + Number(num2.value)

    // innerHTML manda datos a un elemento de HTML
    document.getElementById("resultado").innerHTML = suma
}
