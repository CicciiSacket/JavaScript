
// _total //identificatore valido sono case sensitive

// let test = 12 //inizializzare variabile

// typeof test // restituisce il tipo di variabile

// 3<4 ? "yes":"no"// ? operatore ternario, restituisce il secondo operando se risulta valida altrimneti restuisce il terzo operando

//subprogram consente attreverso un singolo punto di accesso di eseguire la computazione delle istruzioni definite all'interno di un blocco di codide asseganto 
//si distinguono in due tipi: funzioni(tornano un valore) e procedure(nonn tornano valore), in js le procedure non sono implementate quindi le funzioni possono non tornare un valore;
 

//per scope si intende il range di istruzioni nel quale la variabile è "visibile"; LOCALE= dichiarata nello scope -- NONLOCALE= non dichiarata ma risulta visibile 


//LEXICAL SCOPING, determinare lo scope della variabile dal codice prima dell'esecuzione;
//BLOCK SCOPING la variabile è globale e usabile anche all'intenro

// La chiave const inizializza una variabile costante il cui valore rimane sempre uguale, non prende assegnamento in run coding


//Dichiarando con var è come se la variabile venisse inizalizzata tipo un import o un enum in Cs


//MODULO è una porzione di programma con specifiche funzinoalità, i moduli possono essere tra loro dipendendenti;
//CommonJs il modulo incorpora il codice all'interno di una funzione, attraverso a un metodo require o attraverso la proprietà export dell'oggetto module 
// in questo modo si inizia a capire come un programma di grandi dimensioni può strutturasi grazie alle struttre dati presenti in js


//PACKAGES codice strutturato che può essere distribuito, scaricabile ed installabile e che contiene le info dal package da cui dipende, si usano spesso i moduli per questo fine;
// NPM è un infrastruttura che permette in js che consente di scaricare installare e gestire dei packages
// per installare un pacchetto di esegue da terminale il comando *"npm install nomepacchetto{noi proviamo ad installare il pacchetto 'prompt-sync'}"*


//this come in java per gli oggetti notazione puntata


// node script.js per eseguire lo script da terminale




// [...test] spread operator che si può usare per concatenare due array ad esempio

// a = [1,2,3]
// b = [a,b,c]
// c = [...a,...b] prendi il valore di A e spalmalo su B

//LO STESSO RAGIONAMENTO FUNZIONA CON GLI OGGETTI CAMBIA CHE SI USANO LE PARENTESI GRAFFE


/* 

    var conversions = require('./values.json');
var items = conversions.map(item => item.originalValue);
var set = new Set(items); // set non è un array e non posso applicare metodi degli array
var valideCurrency = [...set]; // operazione di spread, includere all'interno tutto il set e converirlo in array 
// console.log(valideCurrency); // [ '€', '$', '£', '¥' ]
var convert = (currencyToStart, currencyToEnd, value) => {
    if (valideCurrency.includes(currencyToStart) && valideCurrency.includes(currencyToEnd)) {
        var convertedObject = conversions.find(item => item.originalValue === currencyToStart && item.convertedValue === currencyToEnd);
        return convertedObject.taxConversion * value;
    }
    return {message: 'format not valid'};
}
console.log(convert("L", "€", 2));
var a = ['a', 'b', 'c'];
var b = [1, 2, 3];
var c = [...a, ...b]; // spread 
console.log(c);
var obj1 = {name: 'Carlo', surname: 'Leonardi'};
var obj2 = {age: 36};
var obj3 = {...obj1, ...obj2};
console.log(obj3);
// console.log(conversions);

*/