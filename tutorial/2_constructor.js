// Constructor

function Book(title, author, year) {
  // console.log("Book Initialized");
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

// Instatiate an Obejct
const book1 = new Book("Book One", "John", "2013");
const book2 = new Book("Book Two", "Jane", "2015");

console.log(book1.getSummary());
