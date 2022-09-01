console.log("Hello World");

var myName = "Edson";

console.log(myName);

let language = "Javascript";

const pattern = "ECMAScript";

{
    var age = 32
}

console.log(age)

var myName = "Edson" //string

var age = 35 //number

var height = 1.64 //number

null
undefined

var isStudent = false //boolean

// Objeto, array e function

var person = {
    "name": "Edson",
    "age": 35
}

var students = ["Edson", "Simara", "Maria", "Joao"];

function sum(a, b) {
    return a + b
}

//operador typeof

var age = 35

console.log(typeof age)


function summy(){
    return 5 + 2
}

console.log(typeof summy)

//operadores aritméticos

//adicão +
var sumTwoNumbers = 1 + 3;
console.log(sumTwoNumbers);

// subtração - 
var subTwoNumbers = 1 - 3;
console.log(subTwoNumbers);

//multiplicação *

var multTwoNumbers = 1 * 3;
console.log(multTwoNumbers);

//divisão /

var divTwoNumbers = 12 / 3;
console.log(divTwoNumbers);

//módulo ou resto de uma divisão

console.log(8 % 3);

// incremento ++

var num = 1;
console.log(++num);

// decremento --

console.log(--num);

// operadores de atribuição

var x = 2
var y = 4

console.log( x += y );
console.log( x -= y );
console.log( x *= y );
console.log( x /= y );
console.log( x %= y );

//operadores de comparação

// == valor
// === valor e tipo
// != Diferente de
// < ou  <= menor
// > ou >== maior


//operadores lógips

// & e
//|| ou
// ! negação

// Condicionais

var num = 1;

num = 2;

if (num === 1){
    console.log("num é igual a 1")
} else if (num === 3) { 
    console.log("num é igual a 3")
} else {
    console.log("num é diferente de 1")
}

//swith case

var mes = "janeiro"

switch (mes) {
    case "fevereiro":
        console.log("mês 2");
        break;
    case "março":
        console.log("mes 3");
        break;
    case "janeiro":
        console.log("mês 1");
        break;
    default:
        console.log("nenhuma dos casos acima atendidos")
}

// repetições

var colors = ["preto", "azul", "amarelo", "verde", "branco"]

for (var i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

for (var i = 0; i < 10; i++){
    console.log(i);
}

var i =  0;

while (i < 10){
    console.log(i);
    i++;
}

var i = 1;

do {
    console.log(i);
    i++;
} while (i < 10);

//Funções

function sayHello(name, lastname) {
    console.log("Hello " + name + " " + lastname)
}

sayHello("Edson", "Júnior");

function sum(a,b) {
    return a + b;
}

console.log(sum(40,60));

//Classes

class Book {
    constructor (title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read(){
        return `Estou lendo ${this.title}`
    }
}

let book = new Book("Algoritmos", "Brian", 500);

console.log(book);
console.log(book.read());

let otherBook = new Book ("Um Exu em nova York", "Cidinha da Silva", 100);

console.log(otherBook.read())

console.log(book, otherBook)

//HERANÇA

class ITBook extends Book {
    constructor(title, author, pages, technology) {
        super(title, author, pages);
        this.technology = technology;
    }
}

let itBook = new ITBook("Algoritmos", "Brian", 500, "Algoritmos");

console.log(itBook);

// Encapsulamento

class Person {
    constructor(name){
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

let person = new Person ("Edson");
person.name = "Ed"
console.log(person.name);