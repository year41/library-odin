const myLibrary = [];

const cardContainer = document.querySelector('.card-container');
const titleValue = document.getElementById("title");
const authorValue = document.getElementById("author");
const pagesValue = document.getElementById("pages");
const formSubmit = document.querySelector("#new-book-form");

function Book(title, author, pages) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor.");
    };
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
    cardContainer.innerHTML = "";
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
    };
};

titleValue.addEventListener("input", () => {
    if (titleValue.validity.valueMissing) {
        titleValue.setCustomValidity("Book's title is required.");
    } else {
        titleValue.setCustomValidity("");
    };
});

authorValue.addEventListener("input", () => {
    if (authorValue.validity.valueMissing) {
        authorValue.setCustomValidity("Author's name is required.");
    } else {
        authorValue.setCustomValidity("");
    };
});

pagesValue.addEventListener("input", () => {
    if (pagesValue.validity.valueMissing) {
        pagesValue.setCustomValidity("Number of pages is required.");
    } else {
        pagesValue.setCustomValidity("");
    };
});

formSubmit.addEventListener('submit', (e) => {
    console.log(titleValue);
    addBookToLibrary(titleValue.value, authorValue.value, pagesValue.value);
    console.log(titleValue.value);
    createBookCard();
    formSubmit.reset();
})

// Sample library books 
addBookToLibrary("The Outsider", "Albert Camus", "144");
addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", "650");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "320");
addBookToLibrary("Pride and Prejudice", "Jane Austen", "400");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "180");

console.log(myLibrary); // Console check
createBookCard();