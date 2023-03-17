const Contacts = require('./contacts')
const Persona = require('./person')

let persona1 = new Persona(69, 1.62, 1986)
let persona2 = new Persona(85, 1.70, 1992)
let contacto = new Contacts()

contacto.array.push(persona1)
contacto.array.push(persona2)


console.log(contacto.printPersons())
