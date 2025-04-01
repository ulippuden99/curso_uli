let numero =56; // Declaramos la variable y la modificamos probando varios numeros (-33,0,60) para saber si esta todo correcto

if (numero > 0) { 
    console.log(`El numero ${numero}, es positivo`);  // Si el número es mayor que 0, imprime que es positivo

  } else if (numero < 0) { 
    console.log(`El numero ${numero}, es negativo`); // Si el número es menor que 0, imprime que es negativo

  } else {
    console.log(`El numero ${numero}, es cero`); // Si no es mayor ni menor que 0, entonces es cero
  }


  /*En este ejercicio debemos saber como colocar nuestra variable dentro del console.log
  Como debemos no colocar el simbolo "$" dentro de los condicionales
  Y saber que el else if  siempre va enmedio*/