


class macchina{ //CLASSE
    constructor(modello,targa){ //COSTRUTTORE
        this.modello = modello
        this.targa = targa
    }

    prezzo(euro){//METODO DELLA CLASSE
        this.euro = euro
        let mensile = euro/12
        return mensile
    }
    setSconto(sconto){
        this.sconto = sconto
    }
    getSconto(){
        return this.sconto
    }

    prezzScontato(){
    return this.prezzo - 100
    }
   

}

let mercedes = new macchina('MercedesGLA',010334) //Creare un nuovo oggetto della classe
console.log(mercedes)
console.log(mercedes.prezzo(120000))//10000 come outuput 
mercedes.prezzo = 1000
mercedes.setSconto(100)
console.log(mercedes.prezzScontato())



macchina.prototype.prezzo = function(prezzo){ // modifica al prototipo 
    return prezzo - 100
}
let bmw = new macchina('Bmw',121212)

console.log(bmw.prezzo(200))// 100 come outuput dopo la modifica al prototipo


//----------------------------------------------------//
var mySet = new Set(); //--> set è una struttura dati che simile a map e molto vicina agli array

mySet.add(1);
mySet.add(5);
mySet.add("some text");
var o = {a: 1, b: 2};
mySet.add(o);

mySet.has(1); // true
mySet.has(3); // false, 3 non è stato aggiunto al set
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 4

mySet.delete(5); // rimuove 5 dal set
mySet.has(5);    // false, 5 è stato rimosso

mySet.size; // 3, abbiamo rimosso 1 valore