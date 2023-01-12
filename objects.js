//BIBBLAN

//1
let myBook = {
    title: 'The book of Fabi',
    autor: 'Ludvik Brodl',
    numPages: 100
};


//2
let library = [
    {
        title: "Harry Potter",
        autor: 'JK rowling',
        numPages: 2500
    },
    {
        title: "The Martian",
        autor: "The Alien",
        numPages: 100
    },
    {
        title: "Max Bil",
        autor: "Ludvik Brodl",
        numPages: 10
    }
];

//3
function titleSearch(library, title) {
    for(let book of library) {
        if (title === book.title) {
            return book;
        }
        else {
            return null;
        }
    }
};


console.log(titleSearch(library, "Harry Potter"));

//LETTER FREQUENCY

//Skapa funktion som tar en sträng som input och ger ett object som output
//Varje tecken är en key
//Värdet är antalet förekomser av tecknet.


function letterFrequency(word) {
    const frequency = {};
    for (let letter of word) {
        if ( frequency[letter]) { //"Om den finns" Skilt från undefined. Funkar också med >=1 samt != undefined
            frequency[letter] = frequency[letter] + 1
        }
        else {
            frequency[letter] = 1;
        }
    }
    return frequency;
};

console.log(letterFrequency("kalle"));


// // spara alla bokstäver i en lista

// let word = "fabbi";
// for (i = 0; i < word.length; i++) {
//     let char = word[i];
//     let frequency = {char};
// }