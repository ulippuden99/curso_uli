const numeros = [1, 2, 3, 4, 5];  // Declaramos el objeto

function sumarNumeros(numeros) { // Declaramos la funcion 
    const resultado = numeros.reduce((acumulador, numeros) =>{return acumulador + numeros;},0) //Declaramos la nueva variable la igualamos a la variable con .reduce
return resultado; // Devolvemos resultado

}

console.log(sumarNumeros(numeros)); // Imprimimos el resultado de la funcion

