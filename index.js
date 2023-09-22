
function Read (read){
    this.read = read;
}

function Book(title,author,info,pages){
    this.title = title;
    this.author = author;
    this.info = info;
    this.pages = pages; 
}

const didread = new Read('Hi');


const GOT = new Book('Game of thrones','George R Martin','A book set in westeros',234,false);

Object.setPrototypeOf(GOT.prototype, Read.prototype)
// console.log(Object.getPrototypeOf(Read.prototype));
console.log(GOT.read);

/*Checking if built in Object has built in valueOf function, which it does */
// console.log(Object.prototype.hasOwnProperty('valueOf'));


/* Seeing if Object prototype (that is built into JS, is inherited by Book object we created 'Book.prototype') */
// console.log(Object.getPrototypeOf(GOT) === Book.prototype);