const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// function to toggle read
Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function addBookToLibrary() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read= document.getElementById('read').value;

  const newBook = new Book (title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

// render the form data on display
function render(){
  let libraryBook = document.querySelector('#my-library');
  libraryBook.innerHTML = '';
  for(let i = 0; i < myLibrary.length; i++){
    let book = myLibrary[i];
    let bookEle = document.createElement('div');
    bookEle.innerHTML = `
    <div class = 'card-header'>
      <h3 class = 'title'>${book.title}</h3>
      <h5 class = 'author'>${book.author}</h5>
    </div>
    <div class = 'card-body'>
      <p>${book.pages} pages</p>
      <p class = 'read-status'>${book.read ? 'Read' : 'Not Read Yet'}</p>
      <button class = 'remove-btn' onclick = 'removeBook(${i})'>Remove</button>
      <button class = 'toggle-read-btn' onclick = 'toggleRead(${i})'>Toogle Read</button>
    </div>
    `;
    libraryBook.appendChild(bookEle);
  }
}

// function to remove book
function removeBook(index){
  myLibrary.splice(index,1);
  render();
}

// Code Block to add new book form
const openFormButton = document.getElementById('openFormButton');
const closeFormButton = document.getElementById('closeFormButton');
const popupForm = document.getElementById('popupForm');

// Function to open the pop-up form
function openForm() {
    popupForm.style.display = 'block';
}

// Function to close the pop-up form
function closeForm() {
    popupForm.style.display = 'none';
}

// Event listeners for the buttons
openFormButton.addEventListener('click', openForm);
closeFormButton.addEventListener('click', closeForm);

// Event listener for the form
document.getElementById('new-book-form').addEventListener('submit', function(event){
  event.preventDefault();
  addBookToLibrary();
  closeForm();
})
