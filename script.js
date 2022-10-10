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
 
 let elBook = document.getElementById("Book");
 let elAuthor = document.getElementById("Author");
 let elStatus = document.getElementById("Status");

function submitBook(){

  if (!elBook.value.trim() || !elAuthor.value.trim())
   return false;

   const newBook = new Book(elBook.value, elAuthor.value, elStatus.value);
   elBook.value = elAuthor.value = "";
   elStatus.value = "Read"
   addBookToLibrary(newBook);
   addBookToTable(newBook);
   return false;
}




myLibrary.forEach(addBookToTable)
function addBookToTable(b){
    let tbody = document.querySelector('tbody')

    let tr = document.createElement('tr')
  let content = '<td>' + b.name + '</td><td>' + b.author + '</td>'

  if(b.ReadOrNot == 'Read'){
    content += '<td><button id="readbtn" class="btn rdbtn">Read</button></td>'  
   }
   else if(b.ReadOrNot == 'Not read'){
     content += '<td><button id="readbtn" class="btn rdbtn">Not read</button></td>'
   }

   content += '<td><button class="btn delbtn" onclick="toggleDelete(this)">Delete</button></td>'
  tr.innerHTML = content
  tbody.appendChild(tr)
  }
  
 

  function toggleDelete(o) {
    let p = o.parentNode.parentNode;
    p.parentNode.removeChild(p);
  }