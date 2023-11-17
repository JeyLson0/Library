const submitButton = document.querySelector('.submit-button')
const closeButton = document.querySelector('.cancel-button')
const formTitle = document.querySelector('#formTitle');
const formAuthor = document.querySelector('#formAuthor');
const formPages = document.querySelector('#formPages');
const addForm = document.querySelector('.add-form')
const input = document.querySelectorAll('.top-form>input') 
const addButton = document.querySelector('.add-btn');
const modal = document.querySelector('dialog');

const library = []

let titleData;
let authorData;
let pageData

function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

Book.prototype.status = true;

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
        let cardTitle = document.querySelector(`.main-container div:nth-child(${i+1}) .book-title`);
        let cardAuthor = document.querySelector(`.main-container div:nth-child(${i+1}) .book-author`);
        let cardPages = document.querySelector(`.main-container div:nth-child(${i+1}) .book-pages`);
        cardTitle.textContent = books.name;
        cardAuthor.textContent = books.author;
        cardPages.textContent = books.pages;
    })
}


let main = document.querySelector('.main-container');
let mainArr = main.childNodes;

function createCard() {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card')
    const editData = document.createElement('div');
    editData.classList.add('edit-data')

    main.appendChild(cardContainer);

    const divBookData = document.createElement('div');
    divBookData.classList.add('card-data')

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

    const readButtonElem = document.createElement('img');
    readButtonElem.setAttribute('src', './assets/read-img.svg')
    readButtonElem.setAttribute('alt', 'read-img')
    const removeButtonElem = document.createElement('img');
    removeButtonElem.setAttribute('src', './assets/delete-img.svg')
    removeButtonElem.setAttribute('alt', 'delete-img')

    editData.appendChild(readButtonElem);
    editData.appendChild(removeButtonElem);
   
    readButtonElem.addEventListener('click', () => {
        for(i=0; i < mainArr.length; i++) {
            if (mainArr[i] == cardContainer) {
                if (library[i].status == true) {
                    readButtonElem.setAttribute('src', './assets/not-read-img.svg')
                    console.log(`Previous status: ${library[i].status}`)
                    return library[i].status = false;
                }
                if (library[i].status == false) {
                    readButtonElem.setAttribute('src', './assets/read-img.svg')
                    console.log(`Previous status: ${library[i].status}`)
                    return library[i].status = true;
                }
            }
        }
    });
    
    removeButtonElem.addEventListener('click', (e) => {
        for(i=0; i < mainArr.length; i++) {
            if (mainArr[i] == cardContainer) {
                main.removeChild(cardContainer)
                library.splice(i, 1)
            }
        }
    });
}

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
    addBook();
    createCard();
    displayLibrary();

    input.forEach((element) => {
        element.value = ''
    })

    modal.close()
})
