arr =["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"] //Declaramos el arrey
 
for (let i = 0; i<=6; i++) { // Creamos el bucle for, declaramos la variable i que sea el numero de la posicion 0, decimos que sea menor igual que 6 e incrementamos

console.log(arr[i]) // Imprimimos posicion por posicion
}


let Misnumeros=[0, 1, 2, 3, 4, 5]; //Primero declaramos el array

function sumarArreglo(arr) //Declaramos la funcion sumarArreglo y la llamamos arr
{
    let suma = 0; // Creamos la variable suma y la igualamos a 0 para empezar

    for (let i = 0; i < arr.length; i++ ) // Creamos el bucle for 
    {                                     // (dentro declaramos la variable i, creamos la condicion de cuantos elemenos hay en el array e incrementamos)
        suma = suma + arr[i]; // en la variable suma la igualamos a la suma de cada elemento por posicion
    }
    return(suma); // Devolvemos el resultado final, que es la suma total de los elementos del arreglo
}
    
    console.log(sumarArreglo(Misnumeros)) //Imprime la funcion de sumar cada elementocel array