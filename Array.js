let listNumber = [23,23,32] //array normale

let listString = new Array('filipo','mario') // array con costruttore

console.log(`${listNumber} e ${listString}`) // si usano "${}" per spaziare IMPORTANTE!!!!!

console.log(listNumber[0]) //stampa il primo valore dell'array, un indice più grande dell'array produce undefined
console.log(listString[0])

// .lenght da la lunghezza degli array, utilizzabile per un ciclo

for(let i=0; i<listNumber.length;i++){ //stampa tutti gli elementi dell'array
    console.log(listNumber[i])
}

// in js un array può contenere anche tipi diversi ad esempio:
let prove = ["mario",33, "filippo",46]
for(let i=0; i<prove.length;i++){
    console.log(prove[i])
}

//all'interno degli array possono esserci anche oggetti:
let prova = ["mario",33, "filippo",46,{name:'luciano', surname:'clementoni'}]
    console.log(prova[4])

//con il metodo array.push('valore') si inserisce alla fine della lista il 'valore':  { .reverse() usato insieme a sorto ordina al conatrario in alfabetico /\ .sort() ordina l'array  /\con il metodo .pop rimuovo l'ultimo elemento /\ .shift rimouve il primo elemento /\ .unshift aggiunge in posizione 0/\/\ https://www.w3schools.com/jsref/jsref_obj_array.asp}
let list = [35,34,33,32,31,30]
list.push(29)
console.log(list)

// con il metodo array.slice('indice1', 'indice2') è possibile specificare un sottoarray grazie agli indici:
let list2 = [35,34,33,32,31,30]
console.log(list2.slice(0,3))

//con il metodo typeof viene specificato il tipo che nel caso dell'array sarà di tipo object