function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
  while(!(sexo == "m" || sexo == "f")){
        sexo = prompt("Sexo Incorrecto. Reingrese f o m, segun su sexo.");
    }

    if(sexo == "f"){
        sexo = "Femenino";
        document.getElementById('Sexo').value=sexo;
    }
    else{
        sexo = "Masculino";
        document.getElementById('Sexo').value=sexo;
    }
    


}//FIN DE LA FUNCIÓN
