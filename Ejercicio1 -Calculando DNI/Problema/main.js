// Escribe aquí tu codigo Javascript
var letraUsuario=prompt("Ingrese letra con mayuscula")
var numeroDNI=prompt("Ingrese el numero de su DNI")

var letras=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var letraDNI=letras[parseInt(numeroDNI)%23]


if ((parseInt(numeroDNI)<0) || (parseInt(numeroDNI)>99999999)){
	alert("Numero proporcionado no es valido")
}else{
	if(letraUsuario==letraDNI){
		alert("El numero y letra son correctos")
	}else{
		alert("Letra incorrecta")
	}	
}

