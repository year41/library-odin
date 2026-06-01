const myLibrary = [];

const cardContainer = document.querySelector('.card-container');
const titleValue = document.getElementById("title");
const authorValue = document.getElementById("author");
const pagesValue = document.getElementById("pages");
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
        if (book.read === "yes") {
            readInput.checked = true;
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
            if (readInput.checked) {
                myLibrary[bookIndex].read = "yes";
            } else {
                myLibrary[bookIndex].read = "no";
            }
            console.log(myLibrary[bookIndex].title, "-read-", myLibrary[bookIndex].read);
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
    addBookToLibrary(titleValue.value, authorValue.value, pagesValue.value);
    createBookCard();
    formSubmit.reset();
})

// Sample library books list
addBookToLibrary("The Outsider", "Albert Camus", "144", "yes");
addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", "650", "no");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "yes");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "320", "no");
addBookToLibrary("Pride and Prejudice", "Jane Austen", "400", "yes");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "180", "no");

createBookCard();