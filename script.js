const myLibrary = [];
const card = document.querySelector('.card');
const newBookBtn = document.querySelector('.newBookButton');

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

});