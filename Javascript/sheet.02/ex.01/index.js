let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Declaramos el array con los []


function filtrarImpares(numeros) { // Declaramos la funcion con su parametro
    return numeros.filter(number => number % 2 !== 0) // Hacemos que nos devuelva el filter,              
 }                                                   // declaramos el .filter y le decimos que nos de los numeros   

 console.log(filtrarImpares(numeros)) // Imprimimos por pantalla la funcion

