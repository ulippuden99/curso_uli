const palabras = ["hola", "mundo"]; // Declaramos el array co []

function convertirMayusculas(palabras) { // Declaramos la funcion 
    const resultado = palabras.map(nombre => nombre.toUpperCase()) //Declaramos la n ueva varable  
                                    //la igualamos a la antigua variable con el .map para cambiar las palabras a Mayusculas
    return resultado;  // Que nos devuelva el resultado
}
console.log(convertirMayusculas(palabras)); // Que se vea por pantalla el cambio

