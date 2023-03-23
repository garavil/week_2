export class Book{
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;
    constructor(title:string, nPages:number, isbn:string, author:string, editorial:string ){
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    setTitle(newTitle:string):void{
        this.title = newTitle
    }
    getTitle():string{
        return this.title
    }
    setnPages(nPages1:number):void{
        this.nPages = nPages1
    }
    getnPages():number{
        return this.nPages
    }
    setIsbn(newIsbn:string):void{
        this.isbn = newIsbn
    }
    getIsbn():string{
        return this.isbn
    }
    setAuthor(newAuthor:string):void{
        this.author = newAuthor
    }
    getAuthor():string{
        return this.author
    }
    setEditorial(newEditorial:string):void{
        this.editorial = newEditorial
    }
    getEditorial():string{
        return this.editorial
    }
    toString():string{
       return 'Title - ' + this.title + '\n' + 'Number of Pages - ' + this.nPages + '\n'+ 'ISBN - '+ this.isbn+'\n'+'Author - '+ this.author+'\n'+ 'Editorial - '+ this.editorial
    }
}

