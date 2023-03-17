const Persona = require('./person');

let persona1 = new Persona(82, 1.65, 1992)
let persona2 = new Persona(65, 1.50, 1984)

console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.lugarNacimiento);
console.log(persona1.peso);
console.log(persona1.altura);
console.log(persona1.yearOfBirth);

console.log(persona1.calcularIMC());

console.log(persona1.calcularEdad());

console.log(persona1.printAll());

console.log(persona1.printHobbies());
