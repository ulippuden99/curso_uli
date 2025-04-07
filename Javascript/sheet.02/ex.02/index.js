let palabras = ["banana", "manzana", "naranja", "uva"]; // Declaramos el array

function ordenarPalabras(palabras){ // Declaramos la funcion
    let resultado = palabras.sort(); // Utilizamos el .sort para ordenar el contenido del array
    return resultado // Que nos devuelva el resultado de la funcion
}

console.log(ordenarPalabras(palabras)); // Muestralo por pantalla