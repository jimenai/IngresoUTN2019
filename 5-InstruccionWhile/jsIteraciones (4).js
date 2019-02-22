function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(!(numero>=0 && numero<10)){
        	numero = parseInt(prompt("El numero elegido debe estar comprendido entre 0 y 9. Por favor reingrese el numero"));
    	}

	document.getElementById("Numero").value = numero;
   


}//FIN DE LA FUNCIÓN
