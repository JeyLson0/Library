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
        console.log(`Name: ${books.name}, Author: ${books.author}, Page: ${books.pages}, index: ${i}`);
        let cardTitle = document.querySelector(`.main div:nth-child(${i+1}) .book-title`);
        let cardAuthor = document.querySelector(`.main div:nth-child(${i+1}) .book-author`);
        let cardPages = document.querySelector(`.main div:nth-child(${i+1}) .book-pages`);
        cardTitle.textContent = books.name;
        cardAuthor.textContent = books.author;
        cardPages.textContent = books.pages;
    })
}

function createCard() {
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

    const readButtonElem = document.createElement('button');
    readButtonElem.classList.add('toggle-read');
    readButtonElem.textContent = 'Toggle Read'
    const removeButtonElem = document.createElement('button');
    removeButtonElem.classList.add('remove')
    removeButtonElem.textContent = 'Delete'
    const editButtonElem = document.createElement('button');
    editButtonElem.classList.add('edit');
    editButtonElem.textContent = 'Edit'

    editData.appendChild(readButtonElem);
    editData.appendChild(removeButtonElem);
    editData.appendChild(editButtonElem);

    readButtonElem.addEventListener('click', () => {
        console.log(true);
        console.log(readButtonElem)
    });

    removeButtonElem.addEventListener('click', () => {
        console.log(true);
        console.log(removeButtonElem)
    });


    editButtonElem.addEventListener('click', () => {
        console.log(true);
        console.log(editButtonElem)
    });
}

/* Event listener */
addButton.addEventListener('click', () => {
    modal.showModal();
})

closeButton.addEventListener('click', () => {
    modal.close()
})

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


addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createCard();
    addBook();
    displayLibrary();

    input.forEach((element) => {
        element.value = ''
    })

    modal.close()
})






