

function hello(){// parametro tra le tonde, da inserire al momento del richiamo possono esserci vari parametri 
    console.log("hello")
} //this is a named function, per le funzioni dichiarate cosi l'interprete effettua l'hoisting nel senso che anche chiamata prima della sua dichiarazine questa funzione produce quanto aspettato


//this is anonymous function, le funzioni dichiarate cosi o con var avviene l'hoisting e restituisce o errore o undefined(inizializzata ma non allocata)
let goodbay = function(){
    console.log("goodbay")
}

hello() // richiamo di una funzione
goodbay() // richiamo di una funzione 
//per associare la fuznione ad una variabile diversa basta richiamarla senza le parentesi tonde che seguono 
let lilla = hello 
console.log(lilla)//[Function: hello]
lilla() // stampa solo hello

// le funzioni sono importanti per seguire il Don't repeat your'self 
 
//quando la funzione torna un valore questo può essere specificato dalla chiave return, se nessun valore viene specificato la funzione torna undefined
let sum = function(){ // ritorna il risultato
    return 2*2
}
let total = sum()
console.log(total)

let test = function(){  // non c'è return e torna undefined 
    let x = 2
    let y = 2
    let z = x*y
}
console.log(test())


