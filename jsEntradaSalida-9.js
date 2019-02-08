/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

    /*var sueldo = parseInt(document.getElementById("sueldo").value);
    resultado = document.getElementById("resultado").value;
    var resultado = sueldo + (sueldo*0.1);
   
    
    alert("El resultado es: " + resultado);
    */

    var sueldo = parseInt(document.getElementById("sueldo").value);
    var aumento = sueldo * 0.1
    var nuevoSueldo = sueldo + aumento;
    alert("Aumento: "+ aumento);

    nuevoSuledo = document.getElementById("resultado").value;


}
