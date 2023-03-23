import { Book } from "./book"
import { Library } from "./library"

let book1 = new Book('Matilda', 294, '72374748','Roald Dahl','The Random House')
let book2 = new Book('HP y la piedra filosofal', 175, '83747234','JK Rowling','Salamandra')
let book3 = new Book('Charlie y la fábrica de chocolate', 230, '83478522', 'Roald Dahl', 'The Random House')
let book = [book1, book2, book3]
let libreria = new Library(book, 'calle miranda', 'Felipito')

libreria.setAddress('Calle Refugio, 8')
console.log(libreria.getAddress())
libreria.setManager('Lucía Ramos')
console.log(libreria.getManager())
console.log(libreria)
console.log(libreria.getNumberOfBooks())
console.log(libreria.toString())
console.log(libreria.findByAuthor('Roald Dahl'))

