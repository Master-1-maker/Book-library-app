function Book(name, author, pages, ReadOrNot) {
    this.name = name
    this.author = author
    this.pages = pages
    ReadOrNot = ReadOrNot
}

const book1 = new Book("The Hobbit", "J.R.R Tolkien", "295 pages", "no")

let myLibrary = []

function addBookToLibrary(...arr) {
 myLibrary.push(...arr)
}

addBookToLibrary(book1)

console.log(myLibrary)