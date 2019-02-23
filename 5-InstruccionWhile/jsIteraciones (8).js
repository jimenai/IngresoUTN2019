function Mostrar()
{

	var numero;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var respuestaUsuario = "no";
	var numeroIngresado;
	var ingresoNumeroNegativo = false;
	do{
		numeroIngresado = prompt("Ingrese numero:");
		if(!isNaN(numeroIngresado)){
			numero = parseInt(numeroIngresado);
			if(numero>0){
				positivo = positivo + numero;
			}
			else{
				negativo= negativo * numero;
				ingresoNumeroNegativo = true;
			}
			respuestaUsuario = prompt("¿Desea agregar otro numero? Des ser correcto responda Si, de lo contraio No").toLowerCase();
		}
		else{
			alert("Solo se permiten números");
			continue;
		}
		
		
	} while(respuesta == respuestaUsuario);

	document.getElementById('suma').value=positivo;
	if(ingresoNumeroNegativo)
		document.getElementById('producto').value=negativo;


}//FIN DE LA FUNCIÓN
