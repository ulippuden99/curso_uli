let palabras = ["banana", "manzana", "naranja", "uva"]; // Declaramos el array

function ordenarPalabras(palabras){ // Declaramos la funcion
    palabras.sort(); // Utilizamos el .sort para ordenar el contenido del array
    return palabras // Que nos devuelva el resultado de la funcion
}

console.log(ordenarPalabras(palabras)); // Muestralo por pantalla