import { Book } from "./book";
let book1 = new Book('Matilda', 294, '978-0-224-08388-1', 'Roald Dahl', 'The Random House')

book1.setTitle('Matilda')
let titulo = book1.getTitle()
book1.setnPages(294)
let nPaginas = book1.getnPages()
book1.setIsbn('978-0-224-08388-1')
let isbn = book1.getIsbn()
book1.setAuthor('Roald Dahl')
let autor = book1.getAuthor()
book1.setEditorial('The Random House')
let editorial = book1.getEditorial()
let bookInfo = book1.toString()
console.log(titulo);
console.log(nPaginas);
console.log(isbn);
console.log(autor);
console.log(editorial);
console.log(bookInfo);
