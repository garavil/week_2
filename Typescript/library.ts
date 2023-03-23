import { Book } from "./book";
export class Library{
    private books : Book[];
    private address : string;
    private manager : string;
    constructor(books:Book[],address:string, manager:string){
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    setAddress(address:string):void{
        this.address = address;
    }
    getAddress():string{
        return this.address
    }
    setManager(manager:string):void{
        this.manager = manager;
    }
    getManager():string{
        return this.manager
    }

    toString():string{
        let infoLibros = ''
        for(let i= 0; i< this.books.length; i++){
            let book = this.books[i]
            infoLibros += 'Book' + (i+1) + '\n' + 'Title - ' + book.getTitle() +'\n'+'Number of Pages -'+ book.getnPages()+'\n'+'ISBN - '+ book.getIsbn()+'\n'+'Author - '+book.getAuthor()+'\n'+'Editorial - '+book.getEditorial()+'\n'
        }
        return infoLibros
    }

    getNumberOfBooks():number{
        return this.books.length
    }
    findByAuthor(author:string): Book[]{
        let autorEncontrado: Book[] = []
        for(let i= 0; i< this.books.length; i++){
            if (this.books[i].getAuthor() == author){
                autorEncontrado.push(this.books[i])
            }
        }
        return autorEncontrado
    }
}

