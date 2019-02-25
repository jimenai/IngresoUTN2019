function Mostrar()
{

	var contador=0;
	var numero;
	var minimo;
	var maximo;
	var respuesta='si';

	numero=parseInt(prompt("Ingrese numero: "));
	maximo = numero;
	minimo = numero;

	do
	{
		numero=parseInt(prompt("Ingrese numero: "));

		if(numero > maximo){
			maximo = numero;
		}
		else if(numero< minimo){
			minimo = numero;
		}
	
		respuesta = prompt("Desea ingresar otro numero?");
	}while(respuesta!='no');

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;





}//FIN DE LA FUNCIÓN
