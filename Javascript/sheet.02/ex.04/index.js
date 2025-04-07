const numeros = [1, 2, 3, 4, 5];

function sumarNumeros(numeros) {
    const resultado = numeros.reduce((acumulador, numeros) =>{return acumulador + numeros;},0)
return resultado;

}

console.log(sumarNumeros(numeros));

//EJERCICIO INCOMPLETO