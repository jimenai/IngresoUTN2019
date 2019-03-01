function Mostrar()
{

    var numero = parseInt(prompt("Ingrese un numero"));
    var contadorPar = 0;
    
    while(numero <= 0 || isNaN(numero)){
        numero = parseInt(parseFloat("Error. Ingrese un numero"));
    }

    for(var i=1; i<= numero; i++){
        if(i %2 == 0){
           console.log(i);
           contadorPar ++;
        }
    }
    console.log("Cantidad numero pares: "+ contadorPar);


}//FIN DE LA FUNCIÓN
