function saludar(nombre) {  // Declaramos la funcion saludar
    console.log(`Hola, ${nombre}`) // Imprimimos el Hola mas  la variable
}

saludar("Andres") // Ejemplo1: Colocamos la funcion + un nombre
saludar("Ulises") // Ejemplo2 Colocamos la funcion + otro nombre


function mayor(num1, num2) { // Declaramos la funcion mayor entre el numero1 y numero2

if (num1>num2) { //Si numero1 es mayor que numero2
    console.log(`El ${num1} es mayor`) // Quiero que me imprima que numero1 es mayor
   return(num1) //Que me devuelva numero1
} else  // Si num1 no es mayor, entonces num2 debe ser mayor o igual
    console.log(`El ${num2} es mayor`) // Quiero que me imprima que numero2 es mayor
    return(num2) //Que me devuelva numero2
}

console.log(mayor(40, 42)) //Imprimeme cual es mayor entre estos 2 numeros