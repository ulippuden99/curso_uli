let numero =56; // Declaramos la variable y la modificamos para saber si esta todo correcto

if (numero > 0) { // Aqui con el if decimos que si el numero X es mayor que cero nos imprima por pantalla "El numero X es positivo"
    console.log(`El numero ${numero}, es positivo`);

  } else if (numero < 0) { // Aqui con el else if decimos que si el numero X es menor que cero nos imprima por pantalla "El numero X es negativo"
    console.log(`El numero ${numero}, es negativo`);

  } else {
    console.log(`El numero ${numero}, es cero`); // Aqui con el else decimos que si el numero X es igual que cero nos imprima por pantalla "El numero X es igual que 0"
  }
