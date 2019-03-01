function Mostrar()
{

var repeticiones = parseInt(prompt("Ingrese el numero de repeticiones"));

while(repeticiones <=0 || inNaN(repeticiones)){
    repeticiones = parseInt(prompt("Error. Ingrese nuevamente el numero"));
}

for(var i = 0; i<=repeticiones; i++){
    console.log("HOLA UTN FRA");
}




}//FIN DE LA FUNCIÓN
