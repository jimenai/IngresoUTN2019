function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);
switch(mesDelAño){
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("Falta para el invierno." );
         break;
    case "Julio":
    case "Agosto":
        alert("Abrigate! hace frio...");
        break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Dicembre":
        alert("Ya pasamos el frio, ahora calor!!!." );
        break;
}




}//FIN DE LA FUNCIÓN
