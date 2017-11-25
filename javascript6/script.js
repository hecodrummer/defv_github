function jugar() {

	var j1 = document.getElementById("j1");
	var j2 = document.getElementById("j2");
	

	if (j1.value == "piedra" && j2.value == "piedra"){
		document.getElementById("resultado").innerHTML = "¡Empate!"
	} else if (j1.value == "papel" && j2.value == "papel") {
		document.getElementById("resultado").innerHTML = "¡Empate!"
	} else if (j1.value == "tijeras" && j2.value == "tijeras"){
		document.getElementById("resultado").innerHTML = "¡Empate!"
	} else if (j1.value == "papel" && j2.value == "piedra"){
		document.getElementById("resultado").innerHTML = "¡Ganó el jugador 1!"
	} else if (j1.value == "piedra" && j2.value == "tijeras"){
		document.getElementById("resultado").innerHTML = "¡Ganó el jugador 1!"
	} else if (j1.value == "tijeras" && j2.value == "papel"){
		document.getElementById("resultado").innerHTML = "¡Ganó el jugador 1!"
	} else if (j1.value == "papel" && j2.value == "tijeras"){
		document.getElementById("resultado").innerHTML = "¡Ganó el jugador 2!"
	} else if (j1.value == "piedra" && j2.value == "papel"){
		document.getElementById("resultado").innerHTML = "¡Ganó el jugador 2!"
	} else if (j1.value == "tijeras" && j2.value == "piedra"){
		document.getElementById("resultado").innerHTML = "¡Ganó el jugador 2!"
	} 
	else 
		document.getElementById("resultado").innerHTML = "No escribiste opciones válidas"
	}


