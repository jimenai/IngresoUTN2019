/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var x = parseInt(document.getElementById("numeroUno").value);
    var y = parseInt(document.getElementById("numeroDos").value);
    var suma = x + y;
    alert("La suma es: "+ suma);
}

