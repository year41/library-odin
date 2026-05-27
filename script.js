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

const cardContainer = document.querySelector('.card-container');

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

function createBookCard() {
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        
        const card = document.createElement("div");
        card.classList.toggle("card");
        const title = document.createElement("h2");
        title.classList.toggle("title");
        const author = document.createElement("p");
        author.classList.toggle("author");
        const pages = document.createElement("p");
        pages.classList.toggle("pages");
        
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = `${book.pages} Pages`;

        cardContainer.appendChild(card);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);

    }
}

addBookToLibrary("The Outsider", "Albert Camus", "144");
addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", "650");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "320");
addBookToLibrary("Pride and Prejudice", "Jane Austen", "400");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "180");

console.log(myLibrary);
createBookCard();