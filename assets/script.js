const library = []

function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addBook() {
    let bookObj = new Book;
    let bookName = prompt('Book Title:');
    let bookAuthor = prompt('Author:');
    let bookPages = prompt('Pages:')
    bookObj.name = bookName;
    bookObj.author = bookAuthor;
    bookObj.pages = bookPages;
    library.push(bookObj)
}

function displayLibrary() {

}

