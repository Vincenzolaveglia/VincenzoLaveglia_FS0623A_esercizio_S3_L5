/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20
console.log(sum)


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21)
console.log(random)


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Vincenzo",
  surname: "Laveglia",
  age: 21
}
console.log(me)


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age
console.log(me)


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["HTML", "CSS"]
console.log(me)


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("JavaScript")
console.log(me)


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop()
console.log(me)


// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  return Math.floor(Math.random() * 6) + 1
}
let numeroRandom = dice()
console.log(numeroRandom)


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(numero1, numero2){
  return Math.max(numero1, numero2)
}
let numeroMax = whoIsBigger(54, 24)
console.log(numeroMax)


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(stringa){
  return stringa.split(" ")
}
let stringaSplittata = splitMe("I love coding")
console.log(stringaSplittata)


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(stringa, valore){
  let modificaStringa
  if(valore){
    modificaStringa = stringa.slice(1)
  }else{
    modificaStringa = stringa.slice(0, -1)
  }
  return modificaStringa
}
let risultatoTrue = deleteOne("Buongiorno", true)
console.log(risultatoTrue)
let risultatoFalse = deleteOne("Buongiorno", false)
console.log(risultatoFalse)


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(stringa){
  if(stringa.includes("@")){
    return console.log("Indirizzo email valido")
  }else{
    return console.log("Indirizzo email non valido")
  }
}
let email = "aldo@baglio.com"
isThisAnEmail(email)

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt(){
  const dataCorrente = new Date()
  const giorniSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
  indiceGiorno = dataCorrente.getDay()
  return giorniSettimana[indiceGiorno]
}
const giornoCorrente = whatDayIsIt()
console.log(giornoCorrente)


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(num) {
  const result = {
    sum: 0,
    values: []
  }
  for(let i = 0; i < num; i++){
    let valoreDice = dice()
    result.sum += valoreDice
    result.values.push(valoreDice)
  }
  return result
}
const risultatoFunzione = rollTheDices(3)
console.log(risultatoFunzione)


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(data){
  const dataOggi = new Date()
  let differenzaTempo = dataOggi - data //differenza in millisecondi
  let differenzaInGiorni = Math.floor(differenzaTempo / (1000 * 60 * 60 * 24)) //converto i millisecondi in giorni

  return differenzaInGiorni
}
const data = new Date("2023-03-04")
const giorniPassati = howManyDays(data)
console.log(`Sono passati ${giorniPassati} giorni`)


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(compleanno){
  const currentDate = new Date()

  //estrai giorno e mese dalla data di oggi
  const currentDay = currentDate.getDate()
  const currentMonth = currentDate.getMonth() + 1

  //estrai giorno e mese dalla data del compleanno
  const giornoCompleanno = compleanno.getDate();
  const meseCompleanno = compleanno.getMonth() + 1

  if(currentDay === giornoCompleanno && currentMonth === meseCompleanno){
    return true
  }else{
    return false
  }
}
const compleanno = new Date("2023-07-29")
let risultatoConfronto = isTodayMyBirthday(compleanno)
console.log(`Oggi è il compleanno? ${risultatoConfronto}`)


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(oggetto, stringa){
  if(oggetto.hasOwnProperty(stringa)){
    delete oggetto[stringa]
  }
  return oggetto
}
const oggetto = {
  nome: "Aldo",
  cognome: "Baglio",
  età: 40
}
const oggettoModificato = deleteProp(oggetto, "età")
console.log(oggettoModificato)


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(arrayFilm) {
  let filmPiùRecente = arrayFilm[0]

  for (let i = 1; i < arrayFilm.length; i++) {
    let filmcorrente = arrayFilm[i]

    if (parseInt(filmcorrente.Year) > parseInt(filmPiùRecente.Year)) {
      filmPiùRecente = filmcorrente
    }
  }
  return filmPiùRecente
}
//LA CHIAMATA DELLA FUNZIONE E' ALLA FINE DELLA PAGINA DOPO LA DICHIARAZIONE DELL'ARRAY movies!!!


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(arrayFilm){
  return arrayFilm.length
}
//LA CHIAMATA DELLA FUNZIONE E' ALLA FINE DELLA PAGINA DOPO LA DICHIARAZIONE DELL'ARRAY movies!!!


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(arrayFilm){
  let anniArray = arrayFilm.map(function(movie){
    return movie.Year
  })
  return anniArray
}
//LA CHIAMATA DELLA FUNZIONE E' ALLA FINE DELLA PAGINA DOPO LA DICHIARAZIONE DELL'ARRAY movies!!!


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(arrayFilm) {
  let filmMillennioScorso = arrayFilm.filter(function(movie) {
    let anno = parseInt(movie.Year)
    return anno >= 1000 && anno <= 1999
  });

  return filmMillennioScorso
}
//LA CHIAMATA DELLA FUNZIONE E' ALLA FINE DELLA PAGINA DOPO LA DICHIARAZIONE DELL'ARRAY movies!!!


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(arrayFilm) {
  let totaleAnni = arrayFilm.reduce(function(somma, film) {
    return somma + parseInt(film.Year)
  }, 0);

  return totaleAnni
}
//LA CHIAMATA DELLA FUNZIONE E' ALLA FINE DELLA PAGINA DOPO LA DICHIARAZIONE DELL'ARRAY movies!!!


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(arrayFilm, stringa){
  let film = arrayFilm.filter(function(movie){
    return movie.Title.toLowerCase().includes(stringa.toLowerCase())
  })
  return film
}
//LA CHIAMATA DELLA FUNZIONE E' ALLA FINE DELLA PAGINA DOPO LA DICHIARAZIONE DELL'ARRAY movies!!!


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(arrayFilm, indice){
  let arrayModificato = arrayFilm.slice()
  arrayModificato.splice(indice, 1)

  return arrayModificato
}
//LA CHIAMATA DELLA FUNZIONE E' ALLA FINE DELLA PAGINA DOPO LA DICHIARAZIONE DELL'ARRAY movies!!!


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const elementiContenitore = document.getElementById("container")


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const elementiTag = document.querySelectorAll("td")


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const elementiTd = function (){
  const elementiTag = document.querySelectorAll("td")

  elementiTag.forEach(function(td) {
    console.log(td.textContent);
  });
}


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const inserisciBackground = function (){
  const linkPagina = document.querySelectorAll("a")

  linkPagina.forEach(function(link){
    link.style.backgroundColor = "red"
  })
}


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const aggiungiElemento = function(){
  const lista = document.getElementById("myList")
  var nuovoElemento = document.createElement('li')

  lista.appendChild(nuovoElemento)
}


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const svuotaLista = function(){
  const lista = document.getElementById("myList")
  lista.innerHTML = ''
}


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const aggiungiClasse = function (){
  const elementiTr = document.querySelectorAll("tr")

  elementiTr.forEach(function(tr){
    tr.classList.add("test")
  })
}


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
function halfTree(altezza) {
  for (let i = 0; i < altezza; i++) {
    let riga = '';
    for (let j = 0; j <= i; j++) {
      riga += '*';
    }
    console.log(riga);
  }
}
//LA CHIAMATA DELLA FUNZIONE E' ALLA FINE DELLA PAGINA 


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function tree(altezza) {
  for (let i = 1; i <= altezza; i++) {
    let spazi = ' '.repeat(altezza - i);
    let asterischi = '*'.repeat(2 * i - 1);
    console.log(spazi + asterischi);
  }
}
//LA CHIAMATA DELLA FUNZIONE E' ALLA FINE DELLA PAGINA 


/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrime(numero){
  for(let i = 2; i <= Math.sqrt(numero); i++ ){ //parto da indice 2 perchè i numeri minori o uguali a 1 non sono primi
    if(numero % i === 0){
      return false
    }else{
      return true //se non è stato trovato alcun divisore il numero è primo
    }
  }
}
//LA CHIAMATA DELLA FUNZIONE E' ALLA FINE DELLA PAGINA 


/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
//CHIAMATA DELLA FUNZIONE DELL'ESERCIZIO 12
let filmPiùRecente = newestMovie(movies)
console.log("Il film più recente è:", filmPiùRecente)

//CHIAMATA DELLA FUNZIONE DELL'ESERCIZIO 13
const numeroFilm = countMovies(movies)
console.log(`Ci sono ${numeroFilm} film`)

//CHIAMATA DELLA FUNZIONE DELL'ESERCIZIO 14
const anniDeiFilm = onlyTheYears(movies)
console.log(`Gli anni dei film sono ${anniDeiFilm}`)

//CHIAMATA DELLA FUNZIONE DELL'ESERCIZIO 15
let filmMillennioScorso = onlyInLastMillennium(movies)
console.log(filmMillennioScorso)

//CHIAMATA DELLA FUNZIONE DELL'ESERCIZIO 16
let totaleAnni = sumAllTheYears(movies)
console.log(totaleAnni)

//CHIAMATA DELLA FUNZIONE DELL'ESERCIZIO 17
let stringa = "Avengers"
let film = searchByTitle(movies, stringa)
console.log(`I film che contengono ${stringa} nel titolo sono`, film)

//CHIAMATA DELLA FUNZIONE DELL'ESERCIZIO 19
let indiceDaRimuovere = 4
let arrayModificato = removeIndex(movies, indiceDaRimuovere)
console.log(arrayModificato)

//CHIAMATA DELLA FUNZIONE DELL'ESERCIZIO 27
halfTree(3)

//CHIAMATA DELLA FUNZIONE DELL'ESERCIZIO 28
tree(3)

//CHIAMATA DELLA FUNZIONE DELL'ESERCIZIO 28
console.log(isItPrime(7))
console.log(isItPrime(26))