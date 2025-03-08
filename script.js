const myLibrary = [];

function Book(title, author, numberOfPages, hasRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = numberOfPages;
    this.read = hasRead;

    this.info = function() {
        return this.read === true ? `${this.title} by ${this.author}, ${this.pages} pages, has already read` : 
                                    `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;      
    }
}

function addBookToLibrary(title, author, numberOfPages, hasRead) {
    let newBook = new Book(title, author, numberOfPages, hasRead);
    myLibrary.push(newBook);
}