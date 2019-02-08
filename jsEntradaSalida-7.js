/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var x = parseInt(document.getElementById("numeroUno").value);
    var y = parseInt(document.getElementById("numeroDos").value);
    var suma = x + y;
    alert("La suma es: "+ suma);
}

function restar()
{
	var x = parseInt(document.getElementById("numeroUno").value);
    var y = parseInt(document.getElementById("numeroDos").value);
    var resta = x - y;
    alert("La resta da: "+ resta);
}

function multiplicar()
{ 
	var x = parseInt(document.getElementById("numeroUno").value);
    var y = parseInt(document.getElementById("numeroDos").value);
    var multiplicacion = x * y;
    alert("La multiplicacion da: "+ multiplicacion);
}

function dividir()
{
	var x = parseInt(document.getElementById("numeroUno").value);
    var y = parseInt(document.getElementById("numeroDos").value);
    var dividir = x / y;
    alert("La division da: "+ dividir);
}

