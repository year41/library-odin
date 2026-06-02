const myLibrary = [];

const cardContainer = document.querySelector('.card-container');
const titleValue = document.getElementById("title");
const authorValue = document.getElementById("author");
const pagesValue = document.getElementById("pages");
const readValue = document.getElementById("read");
const formSubmit = document.querySelector("#new-book-form");


function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor.");
    };
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.readStatus = function () {
    if (this.read === true) {
        return this.read = false;
    } else {
        return this.read = true;
    };
};

function addBookToLibrary(title, author, pages, read) {
    const bookItem = new Book(title, author, pages, read);
    myLibrary.push(bookItem);
};

function createBookCard() {
    cardContainer.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];

        const card = document.createElement("div");
        card.classList.toggle("card");
        const titleContainer = document.createElement("div");
        titleContainer.classList.toggle("title-container");
        const title = document.createElement("h2");
        title.classList.toggle("title");
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.toggle("btn");
        deleteBtn.id = "delete-btn";
        const author = document.createElement("p");
        author.classList.toggle("author");
        const pagesContainer = document.createElement("div");
        pagesContainer.classList.toggle("pages-container");
        const readDiv = document.createElement("div");
        readDiv.classList.toggle("read-container");
        const readLabel = document.createElement("label");
        readLabel.htmlFor = "read" + i;
        const readInput = document.createElement("input");
        readInput.id = "read" + i;
        readInput.type = "checkbox";
        const pages = document.createElement("p");
        pages.classList.toggle("pages");

        card.dataset.id = book.id;
        title.textContent = book.title;
        deleteBtn.textContent = "Delete";
        author.textContent = book.author;
        readLabel.textContent = "Read";
        if (book.read) {
            readInput.checked = !readInput.checked;
        }
        pages.textContent = `${book.pages} Pages`;

        cardContainer.appendChild(card);
        card.appendChild(titleContainer)
        titleContainer.appendChild(title);
        titleContainer.appendChild(deleteBtn);
        card.appendChild(author);
        card.appendChild(pagesContainer);
        pagesContainer.appendChild(readDiv);
        readDiv.appendChild(readLabel);
        readDiv.appendChild(readInput);
        pagesContainer.appendChild(pages);

        deleteBtn.addEventListener('click', (e) => {
            const cardId = card.dataset.id;
            const bookIndex = myLibrary.findIndex((obj) => obj.id === cardId);
            myLibrary.splice(bookIndex, 1);
            createBookCard();
        });

        readInput.addEventListener('click', (e) => {
            const cardId = card.dataset.id;
            const bookIndex = myLibrary.findIndex((obj) => obj.id === cardId);
            myLibrary[bookIndex].readStatus();
        });
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
    addBookToLibrary(titleValue.value, authorValue.value, pagesValue.value, readValue.checked);
    console.log("New book = ", myLibrary.at(-1));
    createBookCard();
    formSubmit.reset();
})

// Sample library books list
addBookToLibrary("The Outsider", "Albert Camus", "144", true);
addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", "650", false);
addBookToLibrary("The Tempest", "William Shakespeare", "143", true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", false);
addBookToLibrary("Brave New World", "Aldous Huxley", "288", true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "320", false);
addBookToLibrary("1984", "George Orwell", "112", true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", "400", false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "180", false);


createBookCard();