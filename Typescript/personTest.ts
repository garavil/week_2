import{Person} from './person'

let persona1 = new Person('Juan', 27, 'Calle Amistad, 22')

console.log(persona1.name)
console.log(persona1.age)
persona1.printName()
let añoNacimiento = persona1.yearOfBirth(2023)
console.log(añoNacimiento);
persona1.setAddress('Calle Pizarro, 18')
let direccion = persona1.getAddress()
console.log(direccion);


