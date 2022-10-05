function Book(name, author, ReadOrNot) {
    this.name = name
    this.author = author
    this.ReadOrNot = ReadOrNot
}

const book1 = new Book("The Hobbit", "J.R.R Tolkien", "Read")
const book2 = new Book("A Game of Thrones", "George R.R. Martin", "Not read")
const book3 = new Book("Jane Eyre", "Charlotte Brontë", "Read")

let myLibrary = []

function addBookToLibrary(...arr) {
 myLibrary.push(...arr)
}

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)


function addBookToTable(){
    let tbody = document.querySelector('tbody')
    myLibrary.forEach(b =>{
      let tr = document.createElement('tr')
      let content = '<td>' + b.name + '</td><td>' + b.author + '</td>'
      if(b.ReadOrNot == 'Read'){
        content += '<td><button id="readbtn" class="btn rdbtn">Read</button></td>'  
       }
       else if(b.ReadOrNot == 'Not read'){
         content += '<td><button id="readbtn" class="btn rdbtn">Not read</button></td>'
       }
       content += '<td><button class="btn delbtn" onclick="toggleDelete()">Delete</button></td>'
      tr.innerHTML = content
      tbody.appendChild(tr)
     })
  }
  
  addBookToTable()

  function toggleDelete(){

  }