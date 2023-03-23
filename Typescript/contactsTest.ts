import{Person} from './person'
import { Contacts } from './contacts'

let persona1 = new Person('Pedro', 7, 'Calle Pizarro, 25')
let persona2 = new Person('Gara', 36, 'Calle Monteverde, 64')
let contacto1 = new Contacts()
contacto1.people.push(persona1)
contacto1.people.push(persona2)

contacto1.printCalendar()