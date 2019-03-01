function Mostrar()
{
  var numero = parseInt(prompt("Ingrese un numero"));
    var contadorDivisores = 0;
    
    while(numero <= 0 || isNaN(numero)){
        numero = parseInt(parseFloat("Error. Ingrese un numero"));
    }
    
    for(var i=1; i<= numero; i++){
        if(numero %i == 0 ){
           console.log(i);
           contadorDivisores ++;
        }
    }
    
    console.log("Cantidad divisores: "+ contadorDivisores);






}//FIN DE LA FUNCIÓN
