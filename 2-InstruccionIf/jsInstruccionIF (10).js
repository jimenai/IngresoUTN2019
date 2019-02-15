function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota = Math.floor(Math.random() * 11);
	
		if(nota == 9 || nota == 10){
			alert("Excelente");
		}
		else if(nota < 4){
			alert("Vamos!");
		}
		else{
			alert("Aprobo");
		}


}//FIN DE LA FUNCIÓN
