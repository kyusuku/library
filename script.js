const myLibrary = [];
const card = document.querySelector('.card');
const newBookBtn = document.querySelector('.newBookBtn');
const dialog = document.querySelector('dialog');
const dialogCloseBtn = document.querySelector('dialog button');
const dialogConfirm = document.querySelector('.confirmBtn');

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
    for (const book of myLibrary) {
        let bookCard = document.createElement('div');
        let bookId = document.createElement('div');
        let bookTitle = document.createElement('div');
        let bookAuthor = document.createElement('div');
        let bookPages = document.createElement('div');
        let bookRead = document.createElement('div');

        bookId.textContent = book.id;
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages + ' Pages';
        bookRead.textContent = book.read;

    
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookRead);
        bookCard.appendChild(bookId);

        card.appendChild(bookCard);
    }
}

addBookToLibrary('Harry Potter', 'J.K. Rowling', 300, false);
addBookToLibrary('Animal Farm', 'George Orwell', 240, true);
addBookToLibrary('Stonks', 'Lucy', 99, true);

displayBooks();

newBookBtn.addEventListener('click', () => {
    dialog.showModal();
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
