/* DOM */
const submitButton = document.querySelector('.submit-button')
const closeButton = document.querySelector('.cancel-button')
const formTitle = document.querySelector('#formTitle');
const formAuthor = document.querySelector('#formAuthor');
const formPages = document.querySelector('#formPages');
const addForm = document.querySelector('.add-form')
const input = document.querySelectorAll('input[type="text"]') //array of elements
const addButton = document.querySelector('.add-btn');
const modal = document.querySelector('dialog');

const library = []

let titleData;
let authorData;
let pageData

/* Obj and Arr */
function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addBook() {
    let bookObj = new Book;
    let bookTitle = titleData;
    let bookAuthor = authorData;
    let bookPages = pageData;
    bookObj.name = bookTitle;
    bookObj.author = bookAuthor;
    bookObj.pages = bookPages;
    library.push(bookObj)
}
function displayLibrary() {
    library.forEach((books, i)=> {
        console.log(`${books.name}, ${books.author}, ${books.pages}, ${i}`);
        let cardTitle = document.querySelector(`.main div:nth-child(${i+1}) .book-title`);
        let cardAuthor = document.querySelector(`.main div:nth-child(${i+1}) .book-author`);
        let cardPages = document.querySelector(`.main div:nth-child(${i+1}) .book-pages`);
        cardTitle.textContent = books.name;
        cardAuthor.textContent = books.author;
        cardPages.textContent = books.pages;
    })
}

/* Event listener */
addButton.addEventListener('click', () => {

    modal.showModal();

    input.forEach((element) => {
        element.addEventListener('change', () => {
            if(element == formTitle) {
                titleData = element.value
            }
            if(element == formAuthor) {
                authorData = element.value;
            }
            if(element == formPages) {
                pageData = element.value
            }
        })
    })

    closeButton.addEventListener('click', () => {
        modal.close()
    })


})

addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const main = document.querySelector('.main');
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('cards', 'stored-cards')
    const editData = document.createElement('div');
    editData.classList.add('edit-data')

    main.insertBefore(cardContainer, addButton);

    const divBookData = document.createElement('div');
    divBookData.classList.add('book-data')

    const divCardTitle = document.createElement('div');
    divCardTitle.classList.add('book-title')
    const divCardAuthor = document.createElement('div');
    divCardAuthor.classList.add('book-author')
    const divCardPages = document.createElement('div');
    divCardPages.classList.add('book-pages')


    cardContainer.appendChild(divBookData);
    cardContainer.appendChild(editData);

    divBookData.appendChild(divCardTitle);
    divBookData.appendChild(divCardAuthor);
    divBookData.appendChild(divCardPages);

    const readButton = document.createElement('div');
    readButton.classList.add('toggle-read');
    readButton.textContent = 'Toggle Read'
    const removeButton = document.createElement('div');
    removeButton.classList.add('remove')
    removeButton.textContent = 'Delete'
    const editButton = document.createElement('div');
    editButton.classList.add('edit');
    editButton.textContent = 'Edit'

    editData.appendChild(readButton);
    editData.appendChild(removeButton);
    editData.appendChild(editButton);
;
    addBook();
    displayLibrary();

    input.forEach((element) => {
        element.value = ''
    })

    modal.close()
})










