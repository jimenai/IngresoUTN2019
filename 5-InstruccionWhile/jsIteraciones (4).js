function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(!(numero>=0 && numero<10)){
        numero = prompt("El numero elegido debe estar comprendido entre 0 y 9. Por favor reingrese el numero");
   	}

    alert("Numero");


}//FIN DE LA FUNCIÓN
