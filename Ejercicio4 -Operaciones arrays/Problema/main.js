// Escribe aquí tu codigo Javascript
var valores=[true, 5, false, "hola", "adios", 2]

if (valores.length[3]>valores.length[4]){
	alert(valores[3] + " es mayor")
}else{
	alert(valores[4] + " es mayor")
}

if (valores[0]=valores[2]){
	alert("True: true es igual a false")
}else{
	alert("False: true es distinto a false")
}

var suma=valores[1]+valores[5]
alert("La suma de 5 y 2 es: " + suma)

var resta=valores[1]-valores[5]
alert("La resta de 5 menos 2 es: " + resta)

var multiplicacion=valores[1]*valores[5]
alert("La multiplicacion de 5 por 2: " + multiplicacion)

var division=valores[1]/valores[5]
alert("La division de 5/2 es: " + division)

var residuo=valores[1]%valores[5]
alert("El residuo de la division 5/2 es: " + residuo)