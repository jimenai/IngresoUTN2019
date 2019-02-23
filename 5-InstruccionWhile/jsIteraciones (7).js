function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;
	var respuestaUsuario;

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
		contador++;
		respuestaUsuario = prompt("¿Desea agregar otro numero?. De ser correcto responda Si, de lo contrario No.").toLowerCase();
	} while(respuesta == respuestaUsuario);
	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
