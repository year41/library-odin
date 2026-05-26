// function Book(title, author, pages, read) {
//     if (!new.target) {
//         throw Error("You must use the 'new' operator to call the constructor.")
//     }
//     this.title = title;
//     this.author = author;
//     this.pages = `${pages} pages`;
//     this.read = read === "yes" ? "already read" : "not read yet";
//     this.info = function () {
//         return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
//     };
// }

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not");
// const theOutsider = new Book("The Outsider", "Albert Camus", "144", "yes");
// console.log(theHobbit.info());
// console.log(theOutsider.info());

const myLibrary = [];

function Book(title, author, pages) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor.")
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
};

function addBookToLibrary(title, author, pages) {
    const bookItem = new Book(title, author, pages);
    myLibrary.push(bookItem);
};

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295");
addBookToLibrary("The Outsider", "Albert Camus", "144");

console.log(myLibrary);