let persona = {name: "Ulises", age: 22, ciudad: "Malaga"}; // Declaramos el objeto persona y dentro de los corchetes colocsmod lsd propiedades
                                            
console.log(persona.name) // Imprimimos por pantalla  objeto.propiedad que queremos mostrar, en este caso name
console.log(persona.age) // Imprimimos por pantalla  objeto.propiedad que queremos mostrar, en este caso age
console.log(persona.ciudad) // Imprimimos por pantalla  objeto.propiedad que queremos mostrar, en este caso ciudad


 function describirPersona(persona)  { // Declaramos la funcion describirPersona y le añadimos el objeto
   
   return(`Nombre: ${persona.name}, Edad: ${persona.age}, Ciudad: ${persona.ciudad}`)  // Hacemos que nos devuelva los parametros pedidos
 }


