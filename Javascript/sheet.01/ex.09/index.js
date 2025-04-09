
function invertirCadena (string) { // Declarar la funcion

let separar_cadena = string.split(""); // Declarar la variable e igualarla para que el split separe los caracteres
let revertir_cadena = separar_cadena.reverse(); // Revertir la cadena con nueva variable
let unir_cadena = revertir_cadena.join(""); // Volver a unir la cadena 
return  unir_cadena; // Devolver cadena invertida
}

console.log(invertirCadena("Cadena invertida"))


function invertirCadena(cad) { // Declaramos la funcion cad
    
    let nuevaCadena = ""; // Creamos una cadena vacía que almacenará la nueva cadena creada
 
   // Creamos el bucle FOR
    /* El punto de partida del bucle será (cad.length - 1) que corresponde al último caracter de la cadena, "a"
       Mientras i sea mayor que o igual a 0, el bucle se ejecutará
       Decrementamos i después de cada iteración */
    for (let i = cad.length - 1; i >= 0; i--) { 
        nuevaCadena += cad[i]; // o nuevaCadena = nuevaCadena + cad[i];
    }
    return nuevaCadena; // Devolvemos la cadena invertida
}
 
console.log(invertirCadena("hola"));




function contarVocales(cadena) {  
    let contador = 0;
    const vocales = "aeiouAEIOU";

    // Convertimos la cadena en un arreglo y usamos forEach para recorrerla
    cadena.split('').forEach(letra => {
        if (vocales.includes(letra)) {
            contador++;
        }
    });

    return contador;
}

console.log(contarVocales("Hola soy una cadena"));  // Llamada de prueba
