function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño){
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Dicembre":
        alert("31 dias" );
        break;

    case "Febrero":
        alert("28 dias");
        break;
    default:
        alert("30 dias");
}	



}//FIN DE LA FUNCIÓN
