const myLibrary = [];
const card = document.querySelector('.card');
const newBookBtn = document.querySelector('.newBookBtn');
const dialog = document.querySelector('dialog');
const dialogCloseBtn = document.querySelector('dialog button');
const dialogConfirm = document.querySelector('.confirmBtn');
const bookTitleInput = document.getElementById('bookTitle');
const bookAuthorInput = document.getElementById('bookAuthor');
const numPagesInput = document.getElementById('numPages');
const hasReadInput = document.getElementById('hasRead');

let userTitle;
let userAuthor;
let userPages;
let userRead;

function Book(title, author, numberOfPages, hasRead) {
    this.id = crypto.randomUUID().substring(0,13);
    this.title = title;
    this.author = author;
    this.pages = numberOfPages;
    this.read = hasRead;
}

function addBookToLibrary(title, author, numberOfPages, hasRead) {
    let newBook = new Book(title, author, numberOfPages, hasRead);
    myLibrary.push(newBook);
}

function displayBooks() {
    if (myLibrary.length === 0) {
        card.style.display = "none";
    } else {
        card.style.display = "grid";
    }


    for (const book of myLibrary) {
        let removeBookBtn = document.createElement('button');

        let bookCard = document.createElement('div');
        bookCard.setAttribute('data-id', book.id);

        let bookId = document.createElement('div');
        let bookTitle = document.createElement('div');
        let bookAuthor = document.createElement('div');
        let bookPages = document.createElement('div');
        let bookRead = document.createElement('button');

        removeBookBtn.setAttribute('id', 'removeBook');
        bookRead.setAttribute('id', 'readBtn');
        bookId.textContent = book.id;
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages + ' Pages';

        if (book.read) {
            bookRead.textContent = "Read";
            bookRead.style.backgroundColor = "#608860";
        } else {
            bookRead.textContent = "Not Read"
            bookRead.style.backgroundColor = "#ffc2c2";
        }

        bookCard.appendChild(removeBookBtn);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookRead);

        card.setAttribute('data-attribute', book.id);
        card.appendChild(bookCard);
    }
}

displayBooks();

function validateInputs() {
    if (bookTitleInput.value && bookAuthorInput.value && numPagesInput.value) {
        dialogConfirm.disabled = false;
    } else {
        dialogConfirm.disabled = true;
    }
}

bookTitleInput.addEventListener('input', validateInputs);
bookAuthorInput.addEventListener('input', validateInputs);
numPagesInput.addEventListener('input', validateInputs);

newBookBtn.addEventListener('click', () => {
    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    numPagesInput.value = "";
    hasReadInput.checked = false;

    dialog.showModal();
    dialogConfirm.disabled = true;
});

dialogCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
});

dialogConfirm.addEventListener('click', (event) => {
    event.preventDefault();

    userTitle = document.getElementById('bookTitle').value;
    userAuthor = document.getElementById('bookAuthor').value;
    userPages = document.getElementById('numPages').value;
    userRead = document.getElementById('hasRead').checked
        ? true
        : false;

    dialog.close();

    addBookToLibrary(userTitle, userAuthor, userPages, userRead);
    card.textContent = "";
    displayBooks();
});

card.addEventListener('click', (e) => {
    if (e.target.id === 'removeBook') {
        let bookCard = e.target.parentElement;
        let bookId = bookCard.getAttribute('data-id');

        myLibrary.splice(myLibrary.findIndex(book => book.id === bookId), 1);

        bookCard.remove();

        if (myLibrary.length === 0) {
            card.style.display = "none";
        }
    }

    if (e.target.id === 'readBtn') {
        if (e.target.textContent === "Read") {
            e.target.textContent = "Not Read";
            e.target.style.backgroundColor = "#ffc2c2";
        } else {
            e.target.textContent = "Read";
            e.target.style.backgroundColor = "#608860";
        }
    }
});